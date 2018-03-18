var express = require('express')

var app=express()


app.get('/', (req, res) => {
    res.send('hello world, from aws eb deploy')
})

app.listen(8080, () => {
    console.log(" on port 8080")
})


module.exports = app;