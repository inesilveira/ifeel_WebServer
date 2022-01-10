
var x= document.getElementById("login");
var y= document.getElementById("register");
var z= document.getElementById("btn");

var name;
var logged = false;

//Functions to move in the selected box 
function moveRegister(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px"; 
}

function moveLogin(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px"; 
}

//Function to acess the log in input values
function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert('Welcome ' + username + '!');
    name = username;
    logged = true;
}

//Function to acess the register input values
function getReg() {
    var username1 = document.getElementById("username1").value;
    var password1 = document.getElementById("password1").value;
    var email = document.getElementById("email").value;
    alert('Welcome ' + username1);
    name = username1;
    console.log(username1);
}


if(logged == false){
    //document.getElementById("LoginRef").href="ifeelLogInPage.html"; 
    console.log("empty");
}
else if(logged){
    //document.getElementById("LoginRef").href="ifeelProfilePage.html";
    console.log("filled");
}
else{
    console.log("not defined");
}




