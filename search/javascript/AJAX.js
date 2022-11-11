function AJAX(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://127.0.0.1:3000",true);

    //GET -> send()
    //POST -> send(string)
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            //從自己的網域內跳網址
            window.location.href=this.responseText;
        }
            
    }
}