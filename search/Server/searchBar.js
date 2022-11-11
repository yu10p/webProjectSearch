const express = require('express')
const fs = require('fs')
const search = require('./searchFunction.js')
const app = express()
const port = 3000



app.route('/')
    //當從'/'取得GET Request將serchBar.html回傳給他
    .get((req,res) => {
        fs.readFile('../html/searchBar.html', function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    })

app.route('/product')
    //當從'/product'取得GET Request將他搜尋的商品資訊顯示在console上
    .get((req,res) => {
        //取得傳入的商品名並搜尋
        search.search(req.query.productname)
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


