const fs = require("fs")
const data = fs.readFileSync('1403.非递增顺序的最小子序列.js').toString()
const data1 = fs.readFileSync('1403.非递增顺序的最小子序列.md').toString()
console.log(data1+'\n```js\n' + data + '\n```')
fs.writeFileSync('./1403.非递增顺序的最小子序列.md', data1+'\n```js\n' + data + '\n```')

// const readStream = fs.createReadStream('1403.非递增顺序的最小子序列.js')
// const writeStream = fs.createWriteStream('./1403.非递增顺序的最小子序列.md');
// readStream.on('data',()=>{
  
// })
