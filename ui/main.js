var counter=0;
var button = document.getElementById("counter");
alert(button);
button.onclick= function(){  
    
    var request = new XMLHttpRequest();
    
    //caputure
    request.onreadystatechange=function(){
        if (request.readystate ===XMLHttpRequest.DONE){
            if (request.status===200){
                var counter   = request.responseText;
                var span= document.getElementById('count');
                 span.innerHTML=counter.toString();
                
            }
        }
    };
   
    request.open('GET', 'http://mpalanisamee.imad.hasura-app.io', true);
    request.send(null);
   
   
};
