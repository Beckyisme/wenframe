var box = document.getElementById("box");
var btn = document.getElementById("btn");
function getStyle(obj,value){
  if(obj.currentStyle){
    return obj.currentStyle[value];
  }else{
    return getComputedStyle(obj,false)[value];
  }
}
btn.onclick = function(){
  alert(getStyle(box,'width'));
}
