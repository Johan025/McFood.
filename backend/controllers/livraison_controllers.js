const mongoose= require('mongoose');
const livraison_model=require('./../models/livraison_model');

exports.livraison_content= async (req, res) => {
     const formData=req.body;
     
      console.log(formData.name);
      console.log(formData.adresse);
      console.log(formData.produit);
      console.log(formData.date);
      console.log(formData.number);

     const livraison= new livraison_model({
           name:formData.name,
           produit : formData.produit,
           adresse: formData.adresse,
           date:formData.date,
           nombre:formData.number,
           
     })

     const saveData= await livraison.save();

     console.log('données stockées', saveData);
 
}