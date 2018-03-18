var path = require('path');
var filename = path.basename('888354/node_js/basic.js');
var current_filename = path.basename(__filename);
console.log("filename : " + filename);
console.log("current_filename : "+ current_filename);
console.log("dirname : "+__dirname);
console.log("filename : "+__filename);

var join_path = path.join('888354','node_js','basic.js');
console.log("join_path : "+ join_path);



