const express = require('express');
const app = express();
const DB = require('./database.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const authCookieName = 'token';

//web socket incerts
const { WebSocketServer } = require('ws');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});






//
//Added with Login Service
//

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);



// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.userName)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.userName, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.userName);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});



// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:userName', async (req, res) => {
  const user = await DB.getUser(req.params.userName);
  if (user) {
    const token = req?.cookies.token;
    res.send({ userName: user.userName, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}





//
// Page function commands
//


// Load Location List
apiRouter.get('/LoadList', (_req, res) => {
  res.send(locationList);
});


// Load Location Data
apiRouter.get('/LoadData/:locationId', async (req, res) => {
  const locationId = req.params.locationId;
  const location = locationList.find(location => location.id === locationId);
  if (location) {
    res.send(location);
  } else {
    res.status(404).send({ message: 'Location not found' });
  }
});


// Add Location 
apiRouter.post('/AddLocation', async (req, res) => {
  try {
    // Extract location data from the request body
    const { locationName, address, again } = req.body;

    // Construct the document to be inserted into the database
    const locationDocument = {
      id: generateUniqueId(),
      locationName: locationName,
      address: address,
      wouldGoAgain: again
    };

    // Insert the document into the MongoDB collection
    //const result = await DB.locationCollection.insertOne(locationDocument); // Change DB.collection('locations') to DB.locationCollection
    const result = await DB.addLocation(locationName, address, again);

    // Check if insertion was successful
    if (result.insertedCount === 1) {
      res.status(201).send({ message: 'Location added successfully' });
    } else {
      res.status(500).send({ message: 'Failed to add location' });
    }
  } catch (error) {
    console.error('Error adding location:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});


function generateUniqueId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
  const randomChars = Math.random().toString(36).substr(2, 5); // Generate random characters
  return timestamp + randomChars; // Concatenate timestamp and random characters
}


//
// Websocket 
//

// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Keep track of all the connections so we can forward messages
let connections = [];
let id = 0;

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

wss.on('connection', (ws) => {
  const connection = { id: ++id, alive: true, ws: ws };
  connections.push(connection);
  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });
  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    const pos = connections.findIndex((o, i) => o.id === connection.id);

    if (pos >= 0) {
      connections.splice(pos, 1);
    }
  });
  // Respond to pong messages by marking the connection alive
  ws.on('pong', () => {
    connection.alive = true;
  });
});

// Keep active connections alive
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
