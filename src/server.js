import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.get('/about', (req, res)=>{
    res.send('About Page');
});

app.get('/api/contacts', (req, res)=>{
    const contactInfo = [
        {
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'john@example.com'
        },
        {
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'john@example.com'
        },
        {
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'john@example.com'
        },
        {
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'john@example.com'
        }
    ];
    res.send(contactInfo);
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});
