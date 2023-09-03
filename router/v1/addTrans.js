const { addTransaction, withDraw } = require("../../db/query");

const router = require("express").Router();


router.post("/",async (req,res)=>{

      let addedProd = [];
      //let amount = 0;

      //let totalAmount = req.body.totalAmount.reduce((sum,data)=>sum+data.amount,0)

      
      for(let data of req.body.totalAmount){

          if(await addTransaction(req.body.rfid,req.body.transid,data.prodid,data.quantity,data.amount)){
            addedProd.push(data.prodid)
            await withDraw(req.body.rfid,data.amount)
          }

    }
    

    res.json(addedProd)
})

module.exports = router