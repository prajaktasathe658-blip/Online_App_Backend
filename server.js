require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const app = express()
// connecting db
connectDB()

app.use(express.json())

//router
app.use('/api',require('./routes/authRoutes'))
app.use('/api/product',require('./routes/productRoutes'))
app.use('/api/midle',require('./routes/testRoutes'))
app.use('/api/cart',require('./routes/cartRoutes'))

app.get('/',(req,res) => {
    res.send('welcome ')
})

const port = process.env.PORT 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)

})

