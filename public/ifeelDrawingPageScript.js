// const { save } = require("debug/src/browser");

/*  STORE THE USER ID WHEN LOGGING IN ---- MOVE THIS TO THE LOGIN PAGE JS ----- */
function login(){
  sessionStorage.setItem('userid', 1);
} 

var drawing = false;
var context;

var x;
var y;

var w = window.innerWidth;
var h = window.innerHeight;

//--------------------------- CREATE THE PROMPTS TEXT ---------------------
function createPromptHTML(prompt) {
  return "<a onclick='changePrompt(); myFunction()'; id='prompt' tag='" + prompt.promptid + "'>" + prompt.prompt_txt + "</a>";
}


//--------------------------- ON LOAD FUNCTIONS ---------------------

window.onload= async function(){

  let promptsDropdown = document.getElementById("myDropdown");

  login();

  try {
      let prompts = await $.ajax({
          url: "/api/Prompt",
          method: "get",
          dataType: "json"
      });
      let html = "";
      console.log("[prompts] prompts = " + JSON.stringify(prompts));
      for (let prompt of prompts) {
          console.log("[prompts] prompts = " + JSON.stringify(prompt));
          html += createPromptHTML(prompt);
      }
      promptsDropdown.innerHTML += html;

  } catch (err) {
      console.log(err);
  }


  //Clear Button
  document.getElementById('trash').addEventListener('click', function(){
    context.clearRect(0,0, context.canvas.width, context.canvas.height);       
  }, false);
   
  //Width Scale
  document.getElementById('lineWidth').addEventListener('change', function(){
    context.lineWidth = document.getElementById('lineWidth').value;
  }, false);
  
  //Color
  document.getElementById('colorChange').addEventListener('change', function(){
    context.strokeStyle = document.getElementById('colorChange').value;
  }, false);
  
  //Size Canvas
  context = document.getElementById('myCanvas').getContext("2d");
  
  //Mouse movement
  document.onmousemove = handleMouseMove;
  document.onmousedown = handleDown;
  document.onmouseup = handleUp;
  
  //Style line
  context.strokeStyle = "#000000";
  context.lineJoin = "round";
  context.lineWidth = 3;

}


// ----------------------------------------------------- DRAWING -------------------------------
function handleDown(e)
{
    drawing = !drawing; 
    console.log(drawing);
    context.moveTo(e.clientX, e.clientY);
    context.beginPath();
     
}

function handleMouseMove(e)
{

    if(drawing)
    {
       
        context.lineTo(e.clientX - w*0.283, e.clientY - h*0.2751);
        context.closePath();
        context.stroke();
        context.moveTo(e.clientX - w*0.283, e.clientY - h*0.2751 /*``*/);
    }
    
}

function handleUp()
{
  drawing = !drawing;
  console.log(drawing);

  //change colour of the colorpicker
  console.log(document.getElementById('colorChange').value)
  document.getElementById('colorpicker').style.backgroundColor = document.getElementById('colorChange').value;

}

// --------------------------------------- OVERLAY ---------------------------------------------
function on() {
  document.get
  document.getElementById("overlay").style.display = "block";
  console.log("bomdia")
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

var isWidthScaleDisplayed = false;

function showChangeWidthScale() {

  if(isWidthScaleDisplayed == true){
    document.getElementById("lineWidth").style.display = "none";
    isWidthScaleDisplayed = false;
    

  } else if (isWidthScaleDisplayed == false){
    document.getElementById("lineWidth").style.display = "block";
    isWidthScaleDisplayed = true;
  }

}

// --------------------------------------------- DROPDOWN MENU -------------------------------------------------- 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

  document.getElementById("warningPickPrompt").style.display = "none";

}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");

  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) 
    {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function changePrompt(){

  var hasbeenclicked = true

  document.addEventListener('click', function(e) {

    if(document.getElementById('prompt').id == 'prompt' & hasbeenclicked == true){

      e = e || window.event;
      var target = e.target,
      text = target.innerText;
      document.getElementById('promptToChange').innerHTML = text; 
      
      hasbeenclicked = false;

    } 

  }, false);

}
