let express = require('express');
let app = express();
require("dotenv").config()
let bodyParser = require('body-parser');
//1
// console.log("Hello World");

//2
//app.get("/",(req,res) => {
//res.send("Hello Express")
//})

//4
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
/*
//7

app.use((req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
*/
//3
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  })

  //5 
 /* app.get("/json",(req,res)=>{
   res.json({"message":"Hello json"})
  })*/
/*
//6
   app.get("/json",(req,res) => {
    if( process.env["MESSAGE_STYLE"] == "uppercase"){
        res.json({"message":"HELLO JSON"})
    }
    else{
        res.json({"message":"Hello json"})  
    }
})
*/
/*
// 8
app.get('/now', (req, res, next) => {
   req.time = new Date().toString()
    next();
}, (req,res)=> {
    res.json({"time": req.time})
})

*/

/*
//9
app.get("/:word/echo", (req,res) => {
    res.json({"echo": req.params.word})
}
)
*/

//10
app.get("/name", ( req, res ) => {
    res.json({ name: req.query.first + " " + req.query.last})
})


//12
app.post("/name", ( req, res ) => {
    res.json({ name: req.body.first + " " + req.body.last})
})


module.exports = app;