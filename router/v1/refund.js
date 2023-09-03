const { addTransaction, withDraw } = require("../../db/query")

const router = require("express").Router()

router.post("/",async (req,res)=>{

    if(await addTransaction(req.body.rfid,req.body.transid,0,0,-req.body.refundAmount)){
        await withDraw(req.body.rfid,-req.body.refundAmount)
        res.send("refund succesfull")
    }

    else
    res.status(500).send("Internal Server error")

})

module.exports = router