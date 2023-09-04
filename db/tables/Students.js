
const db = require("../conn.js");
const { DataTypes } = require("sequelize")


/*user_id	bigint
user_name	varchar(50)
name	varchar(255)
amount	int
already_logged_in	int
pin	varchar(11)
type	int
email	varchar(50)
rfid	bigint
*/

const Students = db.define("users", {
        
    user_id:{
        type:DataTypes.BIGINT,
        primaryKey:true
    },
    user_name: {
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.INTEGER
    },
    already_logged_in:{
        type: DataTypes.INTEGER
    },    
    pin:{
        type : DataTypes.STRING
    },
    type:{
        type :DataTypes.INTEGER
    },
    email:{
        type : DataTypes.STRING,
        isEmail : true
    },
    rfid: {
        type: DataTypes.BIGINT,
        //primaryKey: true
    }
    
    }, {
        freezeTableName: true,
        createdAt:false,
    updatedAt:false
    })



module.exports = Students