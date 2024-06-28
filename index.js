const express = require('express');
const { connectDB } = require('./config/mongo');
const { handleSubmit } = require('./Controller/submitController');
const app= express();
const cors = require("cors");
const bodyParser = require('body-parser');

connectDB()
app.use(express.json())

app.use(
	cors({
		origin:"https://rachna-frontend.vercel.app",
		credentials:true,
	})
    
)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000,()=>console.log("App running at 3000"))


app.get('/',(req,res)=>{res.send("nakli Rachna")})
app.post('/submitForm',handleSubmit)