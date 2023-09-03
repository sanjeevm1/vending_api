const { canStudentOrder } = require("../../db/query");

const router = require("express").Router()

router.post("/",async (req,res)=>{

    let totalAmount = req.body.totalAmount.reduce((sum,data)=>sum+data.amount,0)
    console.log(totalAmount)
    
    if(await canStudentOrder(req.body.rfid,totalAmount)){
       res.json({state:true}) 
    }

    else res.status(409).json({state:false})

});

module.exports = router