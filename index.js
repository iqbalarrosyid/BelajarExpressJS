const express = require('express')

const app = express()
const port = 3333

app.get('/', (req, res) =>{
    res.send("Hello ini express")
})

app.listen(port, () => console.log(`server running on port ${port}`));