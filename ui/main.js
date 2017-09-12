//var counter=0;
var button = document.getElementById("counter");
//alert(button);
button.onclick = function() {  
    
    var request = new XMLHttpRequest();
    
    //caputure
    request.onreadystatechange = function(){
        if (request.readystate ===XMLHttpRequest.DONE){
            if (request.status===200){
                var counter   = request.responseText;
                var span= document.getElementById('count');
                 span.innerHTML=counter.toString();
                
            }
        }
    }
   
    request.open('GET', 'http://mpalanisamee.imad.hasura-app.io', true);
   objUserID.send(null);
   
   
};

var nameinput=document.getElementById("name");
var names = nameinput.value;
var submit =  document.getElementById("submit.btn");
submit.onclick=function(){
    var names=["name1","name2"];
    var list='';
    for (var i=0;i< name.length; i++){
        list ='<li>' + name(i) +'</li>';
    }
    var ul=document.getElementById(namelist);
    ul.innerHTML = list;
    
};
  
