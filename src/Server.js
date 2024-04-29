const MongoClient = require('mongodb').MongoClient;

// Replace the uri string with your connection string.
const uri = "mongodb+srv://shubhangisrivastava0905:dzqyfwmdyAWDj9Gd@cluster0.cvvqpi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri);

// Database Name
const dbName = 'test';

// Function to connect to MongoDB and insert data
async function insertDataAndFetch(userData) {
  const client = new MongoClient(uri);

  try {
    // Connect to the server
    await client.connect();

    console.log('Connected successfully to the server');

    // Get the database
    const db = client.db(test);

    // Define the collection
    const collection = db.collection('classList');

    // Insert user data into the collection
    await collection.insertOne(userData);

    console.log('User data inserted successfully');

    // Fetch all data from the collection
    const allData = await collection.find().toArray();

    console.log('All data:', allData);

    return allData;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}



insertDataAndFetch(userData)
  .then((allData) => {
    console.log('All data fetched successfully:', allData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
