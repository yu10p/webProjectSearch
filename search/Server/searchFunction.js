const sqlite3 = require('sqlite3')
let db = new sqlite3.Database('../product_db/product.db')

exports.search = function(Name){
    //如果商品名不為空，搜尋特定商品
    if(Name!=''){
        console.log('entry If')
        //取得特定商品資料
        db.each("SELECT * FROM product WHERE productName=$Name",{$Name:Name}, (err,row) => {
            console.log(row.productName+" = "+row.productPrice)
        })
    //如果商品名為空，搜尋所有商品
    }else{  
        console.log('entry Else')
        //取得所有商品資料
        db.each("SELECT * FROM product", (err,row) => {
            console.log(row.productName+" = "+row.productPrice)
        })
    }
    
}



test_module = function() {
    return 'test';
}

