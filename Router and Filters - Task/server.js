const express=require('express');
const app = express();
const bookRoutes=require('./routes/books');


app.use(express.json());

app.use('/',bookRoutes);


let PORT=3000;
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})