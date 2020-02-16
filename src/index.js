const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

app.set('port',4000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views/'))
app.engine('html',require('ejs').renderFile) //para usar archivos html con el motor de ejs







//middlewares


//routes

app.use(require('./routes/index'))




//static files
app.use(express.static(path.join(__dirname,'public')))

//Listening server
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'))
})