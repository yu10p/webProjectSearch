const sqlite3 = require('sqlite3')
let db = new sqlite3.Database('../product_db/product.db')

exports.search = function(productName){
    //如果商品名不為空，搜尋特定商品
    if(productName!=''){
        //字串處理，輸入部分關鍵字也可查詢，但無法處理空格
        productName = '%'+productName+'%'
        console.log('entry If')   
        //取得特定商品資料
        db.each("SELECT * FROM product WHERE productName LIKE $productName",{$productName:productName}, (err,row) => {
            console.log(row.productName+" : "+row.productPrice+"，from : "+row.userId)
        })
    //如果商品名為空，搜尋所有商品
    }else{  
        console.log('entry Else')
        //取得所有商品資料
        db.each("SELECT * FROM product", (err,row) => {
            console.log(row.productName+" = "+row.productPrice)
            console.log(row)
        })
    }
}