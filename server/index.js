var cors = require('cors');
const { json } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors())
app.set('port', (5000));

let logger = fs.createWriteStream('db.txt', {
    flags: 'a' 
  })

  const readFileLines = (filename) => {
  f = fs
    .readFileSync(filename)
    .toString('UTF8')
    .split("\n");
    return f.map(element => {
        return element.split(";")
    });
  }

let result = []
let arrContent = readFileLines('db.txt');

// let middleNum = arrContent.length ? arrContent.slice(-2).reduce((p, n) => (+p + +n) / 2) : null;
// result.push(...arrContent, middleNum)
let messages = []

app.post('/message', (req, res) =>{
    messages.push(req.body)
    res.json("ok")
})
console.log(messages);
app.post('/calculate', (req, res) =>{
    let authorMessages = messages.filter(m => m.author_name === req.body.author_name)
    if(authorMessages.length > 0) {
        let message = authorMessages[authorMessages.length-1]

        let f = message.n
        let s = req.body.n
        let t = (+message.n+ +req.body.n)/2
        logger.write(`${+f};${+s};${+t}\n`)
        
        res.json(+t)   
    } else {
        res.status(404).json({message: "Not Found"})
    }
})

app.get('/getmessages', (req, res) => {
    const resp = {
        status: 200,
        message: 'OK',
        arrContent
    }

    res.json(resp)
})
    


const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})