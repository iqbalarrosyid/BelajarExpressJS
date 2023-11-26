const express = require('express')

const app = express()
const port = 3333
const router = require('./routes/index')

app.use(express.json());
app.use(router)

app.get('/', (req, res) =>{
    //res.send("Hello ini express")
    res.json({massage: "Hello ini adalah JSON"})
})


app.listen(port, () => console.log(`server running on port ${port}`));