const express=require('express');
const router=express.Router();
const multer=require('multer');
const upload=multer();
const mongoose=require('mongoose');

const livraison_controllers=require('./../controllers/livraison_controllers');
const livraison_model=require('./../models/livraison_model');

router.post('', livraison_controllers.livraison_content);

module.exports=router;