import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb+srv://shubhangisrivastava0905:dzqyfwmdyAWDj9Gd@cluster0.cvvqpi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
                      
 async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();

         // Get the database and collection on which to run the operation
         const database = client.db('test');
         const classList = database.collection('classList');

         // Create new documents                                                                                                                                         
         const classData = [
          {
            className: "Math",
            uniqueCode: "abc",
          },
          {
            className: "Science",
            uniqueCode: "def",
          },
          {
            className: "History",
            uniqueCode: "abcks",
          },
          {
            className: "English",
            uniqueCode: "abcks",
          }
         ]

         // Insert the documents into the specified collection        
         const p = await classList.insertMany(classData);

         // Find the document
         const allClasses = await classList.find().toArray();

         // Print results
         console.log("Document found:\n" + JSON.stringify(allClasses));

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
