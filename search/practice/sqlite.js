const sqlite3 = require('sqlite3')
//建立資料庫
let db = new sqlite3.Database('practice.db')

//Insert data
//db.run("INSERT INTO sqlite (name,age) VALUES ('Jack',13)")

//search data
db.each("SELECT * FROM product", (err,row) => {
    console.log(row.productName+":"+row.productPrice)
})

//console.log()

db.close()