var mysql =require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "13013013"
});

con.connect(function(err) {
    if (err) throw err
    console.log("Connect!");
    
})