// Core Module
//  File System

// const fs = require('fs')


//  menulis file secara synchronous
// try{
//   fs.writeFileSync("data.txt","Hallo kk jelek","utf-8")

// }catch(err){
//    console.log(err)
// }


//  menulis file secara Asynchronous
// fs.writeFile('text.txt',"Hallo","utf-8", (e) =>{
//   console.log(e)
// })


//  membaca file secara synchronous
// const read = fs.readFileSync('data.txt',"utf-8")
// console.log(read)


//  membaca file secara Asynchronous
// fs.readFile("data.txt","utf-8",(e,data) =>{
//   if(e) throw e

//   console.log(data)
// })



// ReadLine  Qestions
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Masukan nama kamu : ", (nama) => {
//   rl.question("Masukan email kamu : ", (email) => {
//     console.log(`Nama kamu adalah ${nama}, dan alamat email mu ${email}`)
//     rl.close()
//   })
// })