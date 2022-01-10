
//-------- | This is the ifeel Main Page JS File |---------//


function login(){
  sessionStorage.setItem('userid', 1);
}

function createPromptHTML(prompt) {
  return "<a onclick='changePrompt(); myFunction()'; id='prompt' tag='" + prompt.promptid + "'>" + prompt.prompt_txt + "</a>";
}

//--Side bar
/* This opens the sidebar. Sets the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "180px";
}

/* This closes the sidebar. Sets the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

/* When the user clicks on the button, it
toggles between hiding and showing the dropdown content (prompt menu) */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// From W3Schools - Filtered Dropdown
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");

  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
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

//Image Array to store images that are displayed on the main page.
const imageArray =["url('img/Image1.png')","url('img/Image2.png')", "url('img/Image3.png')",
"url('img/Image4.png')","url('img/Image5.png')","url('img/Image6.png')","url('img/Image7.png')",
"url('img/Image8.png')","url('img/Image9.png')","url('img/Image10.png')","url('img/Image11.png')"
,"url('img/Image12.png')","url('img/Image13.png')"];


window.onload = async function() {
  const gridArray = [2,3,4,5,6,7,8,9,10,11,12,13]; //Array that contains the grid items. Eventually this would need to be updated automatically when users post.
  var originalcontainer = document.getElementById('container'); // The grid container.
  var originalgrid = document.getElementById('1'); // The original grid element that is duplicated every time. 

  for (var i = 0; i < gridArray.length; i++){ // The loop that clones the original grid item according to the Array. 
    var newPost = originalgrid.cloneNode(true);
    originalcontainer.appendChild(newPost); // Appends the newPost to the original container. 
    newPost.id = i+2; // Adds the id. 
    newPost.innerHTML = newPost.id;  // adds the id number in HTML. (so that it appears on each grid item.)
  }

  for(var i = 0; i < imageArray.length; i++){
    document.getElementById(i+1).style.backgroundImage = imageArray[i]; // adds the image to the grid items. 
  }

  //AJAX CODE FOR THE PROMPTS

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

}

var currentId; // Stores the id that is clicked on. 

function clickImage(){
  document.getElementById('pop').style.visibility= "visible"; // When an image is clicked, the pop-up becomes visible. 
}
function closeImage(){
  document.getElementById('pop').style.visibility= "hidden"; // When the x is clicked, the pop-up becomes hidden.
}
 function replyClick(clicked_id){ // Gets the id that is clicked on.
   console.log(clicked_id);
   currentId = clicked_id;
   document.getElementById('modal-content').style.backgroundImage = imageArray[clicked_id-1]; // displays the image on the pop-up according to the clicked_id-1. 

 }
