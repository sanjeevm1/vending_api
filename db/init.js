
const Students = require("./tables/Students.js")
const Transactions = require("./tables/Transactions.js")

let tables = [Students,Transactions]

tables.forEach((table)=>{
    table.sync();
})