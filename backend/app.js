const express= require('express');
const app=express();
const connectDB=require('./Database/Db');
const cors=require('cors');
const PORT=8000;
const multer=require('multer');
const upload=multer();
const bodyParser=require('body-parser');
const dotenv=require('dotenv').config();

//middalware 
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());
 app.use(express.json());
 app.use(cors()); //connexion API avec React

//connexion avec la base de données
connectDB();

app.use('/', require('./routes/livraison_routes'));


app.listen(PORT, () =>{
    console.log('Serveur démarré sur '+PORT);
})