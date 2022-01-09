var x= document.getElementById("login");
var y= document.getElementById("register");
var z= document.getElementById("btn");

var name;

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

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert('Welcome ' + username + '!');
    name = username;
}

function getReg() {
    var username1 = document.getElementById("username1").value;
    var password1 = document.getElementById("password1").value;
    var email = document.getElementById("email").value;
    alert('Welcome ' + email);
}

console.log(name);






