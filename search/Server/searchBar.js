const express = require('express')
const search = require('./searchFunction.js')
const app = express()
const port = 3000


//設定模板為ejs
app.set('view engine','ejs')
//讓ejs在'../template'找我們的模板
app.set('views','../html')

app.route('/')
    //當從'/'取得GET Request將serchBar.html回傳給他
    .get((req,res) => {
        res.render('searchBar',{
            name: 'start'
        })
    })

app.route('/product')
    //當從'/product'取得GET Request將他搜尋的商品資訊顯示在console上
    .get((req,res) => {
        //取得傳入的商品名並搜尋
        search.search(req.query.productName)
        res.render('searchBar',{
            name: req.query.productName
        })
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


