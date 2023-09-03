const { Sequelize } = require('sequelize');
const createStudentTable = require('./tables/Students');

const conn = new Sequelize(process.env.DB_URL)



conn.authenticate().then(() => {
    console.log("db connected")
    //syncTables(createStudentTable(conn),"studentTable");

}).catch((err) => {
    console.log(err)
})


module.exports = conn;
