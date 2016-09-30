console.log('Loaded!');
var img = document.getElementById("modi");
marginLeft = 0;
function moveRight() {
    marginLeft = marginRight + 10;
    
}
img.onclick = function (){
    var interval = setInterval(moveRight, 100);
   
};

// submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.get.ElementById("submit_btn");
submit.onclick = function (){
    //make a request to a server and send a name
    //capture a list of name and render it as a list
    var name =['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>'
    }
    var ul =document.getElementById('nameList');
    ul.innerHTML = list;
};