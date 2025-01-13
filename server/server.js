const express=require('express');
const cors=require('cors');


//create object of express
const app=express();


const PORT=5000;


//for Managing customer requests
app.use(cors());


//create basic testing endpoint for customer requests
app.get('/',(req,res)=>{
   res.send('Hello Main Page MedixFlow');
});


//
app.listen(PORT,()=> {
    console.log(`Server running on  http://localhost:${PORT}`);
});