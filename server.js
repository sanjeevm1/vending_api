
const express = require("express");
require("dotenv").config();
require("./db/init.js");

const app = express();

app.use(express.json());

app.use("/v1",require("./router/v1/getStudentInfo.js"))
app.use("/v1/order",require("./router/v1/isTransPossible.js"))
app.use("/v1/vending",require("./router/v1/addTrans.js"))
app.use("/v1/refund",require("./router/v1/refund.js"))

app.listen(process.env.PORT,"0.0.0.0",(err)=>{

    if(err){
        console.log("Error listening");
    }

    else{
        console.log(`Server listened @ Port ${process.env.PORT}`);
    }

})