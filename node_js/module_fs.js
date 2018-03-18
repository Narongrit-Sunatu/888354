var fs =require('fs');
fs.readFile('infile.txt','utf8',function(err,data){
   if (err) throw err 
        console.log("infile");
        console.log(data);
        fs.writeFileSync('outfile.txt',data);
});

fs.readFile('outfile.txt','utf8',function(err,datas){
    if (err) throw err 
        console.log("outfile");
        console.log(datas);
});