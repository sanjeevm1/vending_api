
const db = require("../conn.js")
const { DataTypes} = require("sequelize")

const Transactions = db.define("transactions",{

    transid:{
        type:DataTypes.STRING
    },
    rfid:{
        type:DataTypes.STRING
    },
    prodid:{
        type:DataTypes.STRING
    },
    quantity:{
        type:DataTypes.INTEGER
    },
    amount:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName:true
})

module.exports =Transactions