const express = require('express');
const app = express();
const orderRoute=require('./routes/orderRoute');
const userRoute = require('./routes/userRoute');

app.use('/orders',orderRoute);

app.use('/user',userRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});