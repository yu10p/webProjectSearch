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
            result: '',
            productName: ''
        })
    })

app.route('/product')
    //當從'/product'取得GET Request將他搜尋的商品資訊顯示在console上
    .get((req,res) => {
        //取得傳入的商品名並搜尋
        received = search.search(req.query.productName)

        res.render('searchBar',{
            result: received,
            productName: req.query.productName
        })
    })

//===施工中===
app.route('/Myproduct')
    //當從'/product'取得GET Request將他搜尋的商品資訊顯示在console上
    .get((req,res) => {
        //取得傳入的商品名並搜尋
        received = search.Mysearch(req.query.productName,req.query.userId)

        res.render('searchBar',{
            result: received,
            productName: req.query.productName
        })
    })
//===施工中===

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})