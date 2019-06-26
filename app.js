const express= require('express')
const app = express()

//asignamos el motor de vistas
app.set('views',`${__dirname}/views`)
app.set('view engine','hbs')


app.get('/',(req,res)=>{
  //TODO completar ruta
  res.render('index')
})
app.get('/about',(req,res)=>{
  //TODO completar ruta
  res.render('about')
})

app.listen(3300,()=>{
  console.log('listen on: http://localhost:3300');
  
})