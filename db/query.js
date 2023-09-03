
const Students = require("./tables/Students.js");
const Transactions = require("./tables/Transactions.js");
const {Op} = require("sequelize")

const getStudentInfo = async (rfid)=>{ 

    let data = await Students.findOne({ 
        where:{rfid:rfid}
    })

    //console.log("yes")
    
    if(data==null)return false;
    var {rfid,rollNo,amount}=data.dataValues

    return {rfid,rollNo,amount}
}

const canStudentOrder= async (rfid,amount)=>{

   // console.log(amount)

    let data = await Students.findOne({ 
        where:{rfid:rfid,amount:{[Op.gte]:amount}}
    })

    return data!=null

}

const addTransaction = async (rfid,transid,prodid,quantity,amount)=>{ 

    try{
      await Transactions.create({rfid,transid,prodid,quantity,amount})
      return true;
    }

    catch(err){
        console.log(err)
        return false;
    }
}

const withDraw = async (rfid,amount)=>{

    const user = await Students.findOne({
        where:{rfid:rfid,amount:{[Op.gte]:amount}}
    })

    user!=null && await Students.update({
        amount:user.dataValues.amount-amount
    },{
        where:{rfid:rfid}
    })

}

module.exports = {getStudentInfo,canStudentOrder,addTransaction,withDraw}