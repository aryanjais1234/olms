const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Connection = require('./Connection');
const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://shubhangisrivastava0905:dzqyfwmdyAWDj9Gd@cluster0.cvvqpi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri); 

app.get('/fetchdata', async (req, res) => {
  try {
    const result = await Connection();
    console.log(result);
    
    // Send the updated class list data including the newly added class
    const updatedData = await classList.find().toArray();
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const classList = mongoose.connection.collection('classList');
app.post('/addClass', async (req, res) => {
  try {
    const { className, uniqueCode } = req.body;
    const newClass = {
      className,
      uniqueCode
    };
    await classList.insertOne(newClass);

    // Send a success response
    res.status(201).send('Class added successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001,()=>{
  console.log("Server is running on port 3001");
})
