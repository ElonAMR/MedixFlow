const express=require('express');
const cors=require('cors');

const db=require('./db');

//create object of express
const app=express();


const PORT=5000;


//for Managing customer requests
app.use(cors());


//create basic testing endpoint for customer requests
app.get('/',(req,res)=>{
   res.send('Hello Main Page MedixFlow');
});




app.get('/test-db',async (req,res)=>{
    try {
        await db.query('SELECT 1');
        console.log('connected to database');
        res.send('Database connection successful!');
    }catch (err){
        console.error('Failed to connect to the database:', err.message);
        res.status(500).send('Database connection failed')
    }
});




//wait for request on port x
app.listen(PORT,()=> {
    console.log(`Server running on  http://localhost:${PORT}`);
});