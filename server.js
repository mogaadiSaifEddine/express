var express=require('express')
var lodash=require('lodash')
const app=express()
const port = 5000;

var d=new Date()

app.use((req,res,next)=>{
    var h = d.getHours()
    var weekDay = d.getDay();
    if (h <= 9 || h>=17 ) {
        res.send('Our service is out !')}
    else if (weekDay === 0 || weekDay === 6) {
        res.send('Web is closed on Weekend !');}
    else {
        next()
    }
})

app.use(express.static(__dirname+'/public'))

app.listen(port,(err)=>{
    if((err)) console.log ("server not connecting")
    else console.log(`The server is running on port ${port}`)
   
})