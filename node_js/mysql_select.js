var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "13013013",
    database: "shopDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connect!");
    var sql = "SELECT * FROM products";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        result.forEach(function (data) {
            console.log("ProductName : "+data.name);
            console.log("Price : "+data.price);
            
        });
    });
});