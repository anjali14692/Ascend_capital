import express from 'express'
import  {connection}  from './postgrsql';
const app =express();
const port = 8000
//const connectToMongoDB = require("./db");

app.get('/', (req, res) => {
    res.send('Hello world')
})


//app.use(express.json())
//app.use('/api', require("./Routes/CreatUser"));
//connectToMongoDB();

connection();
app.listen(port, () =>{
    console.log(`Example app listenting on port ${port}`);
});