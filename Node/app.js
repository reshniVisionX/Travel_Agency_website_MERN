const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose=require("mongoose")
app.use(express.json())
const cors = require("cors");

app.use(cors());
const bcrypt = require('bcryptjs');
app.use(bodyParser.json());

const mongoUrl = "mongodb+srv://reshni:root@democlusterdb.4srqjmw.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
})
.then(()=>{console.log("Connected to Database");})
.catch((e)=> console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

app.post('/register',async(req,res)=>{

    const {fname, lname, email, password }=req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
           return res.json({error:"User Exist.."});
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
        });
        res.send({status:"ok"});
    }
    catch(error){
        res.send({status:"error..."});
    }
});

app.listen(3000,() => {
    console.log("Server Started...!");
});
