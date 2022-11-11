# ILoveCHLEE

v0.1

<h3>說明:</h3>  
<p>&emsp;&emsp;讓使用者從網站輸入關鍵字搜尋，後端接收到request後，利用關鍵字向資料庫請求資料，<br>資料庫回傳到後端，後端在response回前端，最終會讓使用者看到她想看的資料。<p>
      
<h3>目標:</h3>  
<p>&emsp;&emsp;1. 前端將輸入資訊送往，後端接收request後，取得使用者輸入<p>
<p>&emsp;&emsp;2. 後端收到request後，向資料庫取得資料<p>
<p>&emsp;&emsp;3. 從資料庫取得資料後，向使用者顯示搜尋資料<p>
  
<h3>希望改善目標:</h3>  
<p>&emsp;&emsp;1. 改善關鍵字必須完全正確才能取的資料<p>

<h3>專案資料夾說明:</h3>
<p>&emsp;&emsp;html 存放hmtl</p>
<p>&emsp;&emsp;&emsp;&emsp;seatch.html 搜尋欄的簡易html</p>

<p>&emsp;&emsp;javascript 存放javascript檔</p>

<p>&emsp;&emsp;practice 讓我測試功能的地方</p>

<p>&emsp;&emsp;product_db 存放簡易資料庫</p>
<p>&emsp;&emsp;&emsp;&emsp;product.db 拿來測試的資料庫裡面有三筆資料</p>

<p>&emsp;&emsp;Server 存放node.js的一些檔案</p>
<p>&emsp;&emsp;&emsp;&emsp;seatchBar.js 負責處理request和response</p>
<p>&emsp;&emsp;&emsp;&emsp;seatchFunction.js 負責向資料庫取得資料</p>
