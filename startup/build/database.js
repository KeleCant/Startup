const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');


const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('What_to_do_Provo'); // Updated database name to match your collection name
const userCollection = db.collection('user');
const locationCollection = db.collection('location'); // Added collection for locations


// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(userName) {
  return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(userName, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    userName: userName,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

// Function to add a location to the database
async function addLocation(locationName, address, wouldGoAgain) {
  const location = {
    locationName: locationName,
    address: address,
    wouldGoAgain: wouldGoAgain,
  };
  await locationCollection.insertOne(location);
  return location;
}

// Function to get all locations from the database
async function getAllLocations() {
  return await locationCollection.find().toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addLocation,
  getAllLocations
};