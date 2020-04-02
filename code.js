var input=document.getElementById("input");
var count=0;
input.addEventListener("click",function(){
    count++;
    if(count%2!=0){
           var back=document.getElementById("body");
    back.style.backgroundColor="black";
    document.getElementById("para").style.color="white";
    }
    else{
           var back=document.getElementById("body");
    back.style.backgroundColor="white";
    document.getElementById("para").style.color="black";
    }
});
