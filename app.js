const fs = require('fs')
const readLine = require('readline')

const rl = readLine.createInterface({
      input : process.stdin,
      output : process.stdout,
})

rl.question('Masukan nama kamu : ',(nama) =>{
    rl.question('Masukan email kamu : ',(email)=>{
      const contact = {nama,email}
      const file = fs.readFileSync('contact.json','utf-8')
      const contacts = JSON.parse(file)
      contacts.push(contact)
      fs.writeFileSync('contact.json',JSON.stringify(contacts))
      console.log("terimakasih telah memasukan data")
      
        rl.close()
    })
})