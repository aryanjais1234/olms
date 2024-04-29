

// script.js
// import { MongoClient } from "mongodb";
const MongoClient = require("mongodb").MongoClient;

// Replace the uri string with your connection string.
 const uri = "mongodb+srv://shubhangisrivastava0905:dzqyfwmdyAWDj9Gd@cluster0.cvvqpi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri);

async function Connection() {
  try {
    await client.connect();

    const database = client.db('test');
    const classList = database.collection('classList');

    // Query for all classes
    const allClasses = await classList.find().toArray();
    // console.log(allClasses);

    // Query for a specific class
    const query = { className: 'OOPS' };
    const className = await classList.findOne(query);
    // console.log(className);

    return allClasses;
  } finally {
    // Ensure the client closes when you finish/error
    await client.close();
  }
}

// export default  Connection;
module.exports = Connection;

