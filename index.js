const express = require('express')
const Connect = require('./DB/config')
const cors = require('cors')
const Product = require('./DB/Models/Product');

const app = express()
app.use(express.json())
app.use(cors());
Connect();

app.post('/add', async (req, res) => {
  let data = new Product(req.body)
  let result = await data.save();
  res.send(result)
})

app.delete('/delete/:_id', async (req, res) => {
  let data = await Product.deleteOne(req.params)
  res.send(data)
})

app.get('/list', async (req, res) => {
  let data = await Product.find();
  res.send(data)
})

app.put('/update/:_id', async (req, res) => {
  let data = await Product.updateOne(
    req.params,
    {
      $set: req.body

    }
  )
  res.send(data);

})

app.get('/product/:_id',async (req, res)=>{

  let data = await Product.find().where('_id').equals(req.params)
  console.log(data) 
  res.send(data)

})

// app.get('/search/:key',  (req, res) => {

//   Product.find().where('name').equals(req.params.key).then((data) => {
    
//     res.send(data)
//   })

// })
// app.get('/search/:key/:price',  (req, res) => {

//   Product.find().where('price').equals(req.params.price).then((data) => {
    
//     res.send(data)
//   })

// })

app.get('/search/:key', async (req, res)=>{

  let data = await Product.find(
    {
      "$or":[
        {"name":{$regex:req.params.key}},
        {"price":{$regex:req.params.key}}
      ]
    }
  )
  res.send(data)
})

app.listen(5000);

// app.post('/',  (req, res)=>{
//   res.send( req.body)
//   console.log(req.body)
// })

// app.get('/about', (req, res)=>{
//     res.send("This is About page")
// })
// app.get('/about', (req, res) => {
//   res.send('about')
// })



