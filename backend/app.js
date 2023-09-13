const express= require('express');
const app=express();

const PORT=8000;

app.get('/', (req,res) =>{
    res.json('serveur ok');
})

app.listen(PORT, () =>{
    console.log('Serveur démarré sur '+PORT);
})