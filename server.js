import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});
import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './src/constants.js';
import connectDB from './src/db/index.js';

connectDB()






// (async () => {
//     try {
//         await mongoose.connect(`${process.env.
//         MONGODB_URI}/{DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERROR:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () =>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROR:", error)
//         throw error
//     }
// })

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.get('/api/contacts', (req, res) => {
  const contactInfo = [
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com'
    },
    {
      name: 'Jane Smith',
      phone: '987-654-3210',
      email: 'jane@example.com'
    }
  ];
  res.send(contactInfo);
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});
