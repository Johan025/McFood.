const mongoose=require('mongoose');

const livraisonSchema= new mongoose.Schema({
          name:{
            type:String,
            required:true,
          },

          produit:{
            type: String,
            required: true,
          },
          adresse:{
            type:String, 
            required: true,
          },
          date:{
            type:Date,
          },
          nombre:{
            type: Number,
          }

})

module.exports=mongoose.model("livraison",livraisonSchema);