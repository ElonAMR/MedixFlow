const express=require('express');
const cors=require('cors');

const db=require('./db');
const {response} = require("express");

//create object of express
const app=express();

app.use(express.json());

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

app.post('/addUser',async (req,res)=> {

        console.log('endpoint start');

        // doing Destructuring for get key in object
        const {FirstName,LastName,IdNumber,Password,Role,Email,Phone,Address,DateBirth,AccountStatus} =req.body;

        //Do an insert query into a users table
        const query=`INSERT INTO users
                    (first_name,last_name,id_number,password,role,email,phone_number,address,birth_date,account_status)
                    VALUES(?,?,?,?,?,?,?,?,?,?);`;

        const values=[FirstName,LastName,IdNumber,Password,Role,Email,Phone,Address,DateBirth,AccountStatus]

        console.log(values);

        try {
            const result=await db.query(query,values)

            res.status(200).send({
                success:true,
                message:'User Added Successfully!',
                result:result
            });

        }catch (err){
            console.error(err);
            res.status(500).send({
                success:false,
                message:'Failed to Add User!',
                error:err
            });
        }
});


//wait for request on port x
app.listen(PORT,()=> {
    console.log(`Server running on  http://localhost:${PORT}`);
});