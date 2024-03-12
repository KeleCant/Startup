const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);



// Load Location List
apiRouter.get('/LoadList', (_req, res) => {
  res.send(locationList);
});

// Load Location Data
apiRouter.get('/LoadData', (req, res) => {
  res.send(locationList[req.body]); //with this code every location will need an id
});

// Add Location
apiRouter.post('/AddLocation', (req, res) => {
  locationList.push(req.body);
  res.send(locationList);
});



// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


let locationList = [];