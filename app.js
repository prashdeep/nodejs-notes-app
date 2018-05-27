const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/api/courses' ,(req, res)=>{
    res.status(200).send('sfdsfdf');
  res.send([2,3,4,5]);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`listeneing on port ${PORT}`);
})