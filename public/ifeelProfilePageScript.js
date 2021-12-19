
var gnArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12]; //Array storing the ID's 
var imgArray = ["url('img/Image1.png')","url('img/Image2.jpeg')", "url('img/Image3.jpeg')",
"url('img/Image4.jpeg')","url('img/Image5.jpeg')","url('img/Image6.jpeg')","url('img/Image7.jpeg')",
"url('img/Image8.jpeg')","url('img/Image9.jpeg')","url('img/Image10.jpeg')"]; //Array storing the images
var dateArray = ["November 21th, 2021", "November 22th, 2021"];
var tagsArray = ["happy", "sad"];
var promptArray = ["Draw how you feel today", "Draw your future"];
var currentId; //Variable storing the ID of the image clicked 

//possible array of objects for each post data
var objArray = [
  {
    "image": "url('img/Image1.png')",
    "id": 2,
    "date": "November 21th, 2021",
    "tags": ["happy"]
  },
  {
    "image": "url('img/Image2.jpeg')",
    "id": 3,
    "date": "November 22th, 2021",
    "tags": ["sad"]
  }, 
  {
    "image": "url('img/Image3.jpeg')",
    "id": 4,
    "date": "November 23th, 2021",
    "tags": ["sad"]
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
  for(let i = 0; i < gnArray.length; i++){
    var newImg = original.cloneNode(true);
    var newAppend = parent.appendChild(newImg);
    newImg.id = i + 2;
    newImg.innerHTML = newImg.id;

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

//---------FUNCTION TO CLEAR THE FILTERS--------------------

function changeSelected() {
    var select1 = document.querySelector('#prompt');
    var select2 = document.querySelector('#tags');
    select1.value = 'feel';
    select2.value = '#tag';
  };

//---------FUNCTION TO UPLOAD THE IMAGES--------------------
function replyClick(clicked_id){
  console.log(clicked_id);
  currentId = clicked_id;
  document.getElementById("popupImg").style.backgroundImage = imgArray[clicked_id - 1];
  document.getElementById("dateTxt").textContent = objArray[clicked_id - 1].date;
  document.getElementById("tagsTxt").textContent = objArray[clicked_id - 1].tags;
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

}

//----------------------------------------------------------
