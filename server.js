const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/rating', (req,res)=> {
    const {rating, comment} = req.body;

    const data = `Rating : ${rating}, Comment : ${comment}\n`;

    fs.appendFile(path.join(__dirname, 'rating.txt'), data, (err)=>{
        if (err){
            console.error(err);
            return res.status(500).send('Error save Rating');
        }
        res.send('Rating berhasil disave');
    });
});

app.listen(port, () =>{
    console.log(`server running on https://localhost:${port}`);
});