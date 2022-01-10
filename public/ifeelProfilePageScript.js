
var gnArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12]; //Array storing the ID's 
var imgArray = ["url('img/Image1.png')","url('img/Image2.jpeg')", "url('img/Image3.jpeg')",
"url('img/Image4.jpeg')"]; //Array storing the images
var dateArray = ["November 21th, 2021", "November 22th, 2021", "November 23th, 2021"];
var tagsArray = ["happy", "sad", "nostalgic"];
var promptArray = ["How you feel toda", "Your good traits", "Something that you love"];
var currentId; //Variable storing the ID of the image clicked 

//possible array of objects for each post data
var objArray = [
  {
    "image": "url('img/Image1.png')",
    "id": 2,
    "date": "January 10th, 2021",
    "tags": ["happy"],
    "prompt": ["How you feel today"]
  },
  {
    "image": "url('img/Image2.png')",
    "id": 3,
    "date": "December 28th, 2021",
    "tags": ["proud"],
    "prompt": ["Your good traits"]
  }, 
  {
    "image": "url('img/Image3.png')",
    "id": 4,
    "date": "December 5th, 2021",
    "tags": ["nostalgic"],
    "prompt": ["Something that you love"]
  },   
  {
    "image": "url('img/Image4.png')",
    "id": 5,
    "date": "November 15th, 2021",
    "tags": ["sad"],
    "prompt": ["Something that annoys you"]
  },
] 

//console.log(objArray[0].id);
console.log(objArray);

//---------FUNCTION TO DISPLAY THE POSTS--------------------
window.onload = function() { 
  
  var original = document.getElementById("1");
  var parent = document.getElementById("Container");
  
  //---------LOOP TO CREATE THE IMAGES--------------------

  //Option 1
  /*
  for(let i = 0; i < gnArray.length; i++){
    var newImg = original.cloneNode(true);
    var newAppend = parent.appendChild(newImg);
    newImg.id = i + 2;
    newImg.innerHTML = newImg.id;
    //objArray.push(newImg);
  }*/

  //Option 2
  for(let i = 0; i < imgArray.length - 1; i++){
    var newImg = original.cloneNode(true);
    var newAppend = parent.appendChild(newImg);
    newImg.id = i + 2;

    var newPost = {
      "image": objArray[i].image,
      "id": i + 2,
    }

    objArray.push(newPost);
  }

  for(let i = 0; i < imgArray.length; i++){
    document.getElementById(i+1).style.backgroundImage = objArray[i].image;
  }

}; 

//---------FUNCTION TO UPLOAD THE IMAGES--------------------
function replyClick(clicked_id){
  console.log(clicked_id);
  currentId = clicked_id;
  document.getElementById("popupImg").style.backgroundImage = objArray[clicked_id - 1].image;
  document.getElementById("dateTxt").textContent = objArray[clicked_id - 1].date;
  document.getElementById("tagsTxt").textContent = objArray[clicked_id - 1].tags;
  document.getElementById("promptTxt").textContent = objArray[clicked_id - 1].prompt;
}


function changeBackground(){
  for(let i = 0; i < imgArray.length; i++){
    document.getElementById(i+1).style.backgroundImage = imgArray[i];
  }
}



//---------POPUP FUNCTIONALITY--------------------

var btn = document.getElementById("myBtn");

function showPop(){
  document.getElementById('square1').style.visibility = "visible";
}

function closePop(){
  document.getElementById('square1').style.visibility = "hidden";
}

//document.getElementsByClass("grid-item").onclick = showPop();



/*
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/


//-------------DROPDOWN MENU UPDATE---------------------------------------------

 
function showDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function showDrop2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}


function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementsByClassName("Input");
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

}

function changeTag(){

  var hasbeenclicked = true

  document.addEventListener('click', function(e) {

    if(document.getElementById('tag').id == 'tag' & hasbeenclicked == true){

      e = e || window.event;
      var target = e.target,
      text = target.innerText;
      document.getElementById('tagToChange').innerHTML = text; 
      hasbeenclicked = false;

    } 
  }, false);

}

//---------FUNCTION TO CLEAR THE FILTERS--------------------

function clearFilter() {
  document.getElementById('promptToChange').innerHTML = 'Press me to filter by prompt.'; 
  document.getElementById('tagToChange').innerHTML = 'Press me to filter by tag.'; 
};



//----------------------------------------------------------

window.addEventListener('mouseup',function(event){
  var drop1 = document.getElementById("myDropdown");
  if(event.target != drop1 && event.target.parentNode != drop1){
    drop1.classList.toggle("hide");
  }
});


//---------LOG IN FUNCTIONALITY--------------------

var btn = document.getElementById("myBtn");
var overlay = document.getElementById('overlay');

function showLog(){
  document.getElementById('overlay').style.visibility = "visible";
}



