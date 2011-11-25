//var regex=/http://www.[A-Za-z0-9./%_-]*.mp3/


//if (regex.test(document.body.innerText))
//{
    //alert(document);
    //alert(document.body);
    //alert(document.body.innerHTML);
    var str = document.body.innerHTML;

    //alert("body : " + document.getElementsByTagName("body").length);
    //alert("table : " + document.getElementsByTagName("table").length);
    //alert("a : " + document.getElementsByTagName("a").length);
    var len = document.getElementsByTagName("a").length;
    var a = document.getElementsByTagName("a");
    var pattern = /.mp3/
    var f = new String();
    var fi = 0;
    
    for (var i=0; i<len ; i++) {
        if (pattern.test(a[i])) {
            f = f + a[i] + " ";
            //f[fi] = a[i];
            //alert("f : " + f);
            //fi++;
        }
    }
    
    //alert("cookie 1 : " + document.cookie);
    //alert("all parsed!!");    

    chrome.extension.sendRequest(f, function(response_str){});
    //chrome.extension.sendRequest(document.body.innerHTML, function(response_str){});
    //alert("I'm back");
    //alert(document.body.innerText);
//}

