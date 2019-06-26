const express= require('express')
const app = express()


//asignamos el motor de vistas
app.use(express.static('public'))
app.set('views',`${__dirname}/views`)
app.set('view engine','hbs')


app.get('/',(req,res)=>{
  let data={
    name: "Ironhacker",
    bootcamp: "<span>IronHack WebDev</span>",
    lastname:"Yolo",
    address: {
      street: "Your heart",
      number: 87
    },
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
  }
  res.render('index',data)
})


app.get('/about',(req,res)=>{
  //TODO completar ruta
  res.render('about')
})

app.listen(3300,()=>{
  console.log('listen on: http://localhost:3300');
  
})