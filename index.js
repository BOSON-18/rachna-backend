const express = require('express');
const { connectDB } = require('./config/mongo');
const { handleSubmit } = require('./Controller/submitController');
const app= express();
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv=require("dotenv").config()

connectDB()
app.use(express.json())

app.use(
	cors({
		// origin:"https://rachna-frontend.vercel.app",
		origin:"http://localhost:5173",
		credentials:true,
	})
    
)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT,()=>console.log(`App running at ${process.env.PORT||4000}`))


app.get('/',(req,res)=>{res.send("nakli Rachna")})
app.post('/submitForm',handleSubmit)