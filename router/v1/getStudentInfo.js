
const express = require("express");
const { getStudentInfo } = require("../../db/query");

const router = express.Router();

router.get("/:rfid",async (req,res)=>{

     //console.log(req.params)
     let info = await getStudentInfo(req.params.rfid)
     if(!info)res.status(401).send("Unauthorized user")
     else res.json(info)

})

module.exports = router;