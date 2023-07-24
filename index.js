const fs = require('fs');
const rs = fs.createReadStream('./content.txt');
const ws = fs.createWriteStream('./copy.txt');
/*
rs.on('data', function (mydata) {
   console.log(mydata);
   ws.write(mydata);
});
*/

rs.pipe(ws);

rs.on('end', function ()
{
   console.log('END');
   ws.close();
})