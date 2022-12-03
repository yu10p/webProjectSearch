const better_sqlite = require('better-sqlite3')
const db = new better_sqlite('../product_db/product.db')

exports.search = function(productName){
    //如果商品名不為空，搜尋特定商品
    if(productName!=''){
        //字串處理，輸入部分關鍵字也可查詢，但無法處理空格
        productName = '%'+productName+'%'
        //console.log('entry If')   

        //取得特定商品資料
        var result = db.prepare("SELECT * FROM product WHERE productName like ?").all(productName)
        //console.log(result)

        
    //如果商品名為空，搜尋所有商品
    }else{  
        console.log('entry Else')
        var result = db.prepare("SELECT * FROM product").all()
        //console.log(result)
    }
    return result
}

//===施工中===
exports.Mysearch = function(productName,userId){
    //如果商品名不為空，搜尋特定商品
    if(productName!=''){
        //字串處理，輸入部分關鍵字也可查詢，但無法處理空格
        productName = '%'+productName+'%'
        //console.log('entry If')   

        //取得特定商品資料
        var result = db.prepare("SELECT * FROM product WHERE productName like ? AND userId like ?").all(productName,userId)
        //console.log(result)

        
    //如果商品名為空，搜尋所有商品
    }else{  
        console.log('entry Else')
        var result = db.prepare("SELECT * FROM product WHERE userId like ?").all(userId)
        //console.log(result)
    }
    return result
}
//===施工中===