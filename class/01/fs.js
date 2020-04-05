const fs = require('fs');

// fs.readFile('../../a.txt', (ex, data) => {
//     // 如果不存在文件，则输出错误信息
//     if (ex) {
//         console.log(ex);
//     }
//     else {
//         console.log(data.toString());
//     }
// })

// console.log('[fs readFile] 我出现时则为异步');

// fs.writeFile('../../b.txt', '刘文敏是一个大傻瓜儿', ex => {
//     if (ex) {
//         console.log(ex);
//     }
// });

// fs.appendFile('../../b.txt', ',一定是这个样子的！', ex => {
//     if (ex) {
//         console.log(ex);
//     }
// })

fs.readFile('../../test.jpg', (ex, data) => {
    if (ex) {
        console.log(ex);
    }
    else {
        fs.writeFile('../../a.jpg', data, ex => {
            if (ex) {
                console.log(ex);
            }
        })
    }
})