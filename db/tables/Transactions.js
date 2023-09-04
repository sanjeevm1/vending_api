
const db = require("../conn.js")
const { DataTypes} = require("sequelize")
/*
Field	Type	Null	Key
id	bigint	NO	PRI
user_name	varchar(50)	NO	
date_and_time	timestamp	NO	
type	varchar(50)	NO	
amount	int	NO	
transaction_ref	varchar(30)	NO	
kiosk_local_ip	varchar(30)	NO	
*/
const Transactions = db.define("vendingTransactions",{

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
    freezeTableName:true,
    createdAt:false,
    updatedAt:false
})

module.exports =Transactions