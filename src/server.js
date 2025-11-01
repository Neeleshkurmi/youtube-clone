import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});
import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';

connectDB()

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
