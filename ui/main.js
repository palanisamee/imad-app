
var button = document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
    var request = new XMLHttpRequest();
    
    //caputure
    request.onreadystatechange=function(){
        if (request.readystate ===XMLHttprequest.DONE){
            if (request.status===200){
                var counter=request.responseText;
                var span=document.getElemnetById("count");
                span.innerHTML=counter.toString();
                
            }
        }
    }
    counter=counter + 1;
    var span= document.getElementById('count');
    span.innerHTML=counter.toString();
    
    
};
