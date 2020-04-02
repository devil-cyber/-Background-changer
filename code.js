var input=document.getElementById("input");
var count=0;
input.addEventListener("click",function(){
    count++;
    if(count%2!=0){
          var color="#";
    var symbol="0123456789ABCDEF";
    for(var i=0;i<6;i++){
        color=color+symbol[Math.floor(Math.random()*16)];
    }
           var back=document.getElementById("body");
    back.style.backgroundColor=color;
  
    }
    else{
           var back=document.getElementById("body");
          var color="#";
    var symbol="0123456789ABCDEF";
    for(var i=0;i<6;i++){
        color=color+symbol[Math.floor(Math.random()*16)];
    }
    back.style.backgroundColor=color;

    }
});
