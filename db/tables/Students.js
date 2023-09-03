
const db = require("../conn.js");
const { DataTypes } = require("sequelize")


const Students = db.define("Students", {

        rfid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        rollNo: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true
    })



module.exports = Students