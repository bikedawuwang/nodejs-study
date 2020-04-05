const fs = require('fs');


let rs = fs.createReadStream('../../a.jpg');

let ws = fs.createWriteStream('../../bbb.jpg');

// 我们可以把 rs 理解成水龙头 ws 就是我们的水池

rs.pipe(ws);


rs.on('error', ex => {
    if (ex) {
        console.log(ex);
    }
})

rs.on('end', () => {
    console.log('读取文件完成...');
})

ws.on('error', ex => {
    if (ex) {
        console.log(ex);
    }
})

ws.on('finish', () => {
    console.log('写入文件完成。');
})