console.log('Loaded!');
var img = document.getElementById("modi");
marginLeft = 0;
function moveRight() {
    marginLeft = marginRight + 10;
    
}
img.onclick = function (){
    var interval = setInterval(moveRight, 100);
   
};