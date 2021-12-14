var drawing = false;
var context;

var x;
var y;

var w = window.innerWidth;
var h = window.innerHeight;

window.onload=function(){

  //Clear Button
  document.getElementById('trash').addEventListener('click', function(){
    context.clearRect(0,0, context.canvas.width, context.canvas.height);       
  }, false);
  
  //Back Button
  // document.getElementById('backward').addEventListener('click', function(){
  //   document.getElementById('myCanvas').style.display = "block";
  //   document.getElementById('saveArea').style.display = "none";
  //   document.getElementById('tools').style.display = "block";
  // }, false);
  
  //Width Scale
  document.getElementById('lineWidth').addEventListener('change', function(){
    context.lineWidth = document.getElementById('lineWidth').value;
  }, false);
  
  //Color
  document.getElementById('colorChange').addEventListener('change', function(){
    context.strokeStyle = document.getElementById('colorChange').value;
  }, false);

  
  //Save
  // document.getElementById('btnSave').addEventListener('click', function(){
  //   document.getElementById('myCanvas').style.display = "none";
  //   document.getElementById('saveArea').style.display = "block";
  //   document.getElementById('tools').style.display = "none";
    
  //   var dataURL = document.getElementById('myCanvas').toDataURL();
  //   document.getElementById('canvasImg').src = dataURL;
  // }, false);
  
  //Size Canvas
  context = document.getElementById('myCanvas').getContext("2d");
  // context.canvas.width = window.innerWidth;
  // context.canvas.height = window.innerHeight-60;
  
  //Mouse movement
  document.onmousemove = handleMouseMove;
  document.onmousedown = handleDown;
  document.onmouseup = handleUp;
  
  //Style line
  context.strokeStyle = "#000";
  context.lineJoin = "round";
  context.lineWidth = 5;
  
  //Hide Save Area
  document.getElementById('saveArea').style.display = "none";
}

function handleDown(e)
{
    drawing = !drawing; 
    console.log(drawing);
    context.moveTo(e.clientX - w*0.2109375, e.clientY);
    context.beginPath();
     
}

function handleMouseMove(e)
{
    // console.log(e.clientX);
    // console.log(e.clientY);

    if(drawing)
    {
       
        context.lineTo(e.clientX - w*0.2109375/*-205*/, e.clientY - h*0.28723404255319148936170212765957);
        context.closePath();
        context.stroke();
        context.moveTo(e.clientX - w*0.2109375, e.clientY - h*0.28723404255319148936170212765957/*``*/);
    }
    
}

//OVERLAY
function on() {
  document.get
  document.getElementById("overlay").style.display = "block";
  console.log("bomdia")
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


function handleUp()
{
  drawing = !drawing;
  console.log(drawing);

  //change colour of the colorpicker
  console.log(document.getElementById('colorChange').value)
  document.getElementById('colorpicker').style.backgroundColor = document.getElementById('colorChange').value;

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
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

  // var e = document.getElementById("myDropdown");
  // var value = e.options[e.selectedIndex].value;
  // var text = e.options[e.selectedIndex].text;

  // console.log(text);

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


   
  //document.getElementById('promptToChange').innerHTML= prompt.innerText; 
                                                      //document.getElementById('prompt1').innerText;


}
