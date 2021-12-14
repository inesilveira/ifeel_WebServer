
var gnArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12]; //Array storing the ID's 
var imgArray = ["url('img/testimg1.jpg')", "url('img/testimg2.jpg')"]; //Array storing the images
var dateArray = ["November 21th, 2021", "November 22th, 2021"];
var tagsArray = ["happy", "sad"];
var promptArray = ["Draw how you feel today", "Draw your future"];
var currentId; //Variable storing the ID of the image clicked 

//possible array of objects for each post data
var objArray = [
  {
    "image": "url('img/testimg1.jpg')",
    "id": 2,
    "date": "November 21th, 2021",
    "tags": ["happy"]
  },
  {
    "image": "url('img/testimg2.jpg",
    "id": 3,
    "date": "November 21th, 2021",
    "tags": ["happy"]
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
      "image": imgArray[i],
      "id": i + 2,
    }

    objArray.push(newPost);
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
  document.getElementById("dateTxt").textContent = dateArray[clicked_id - 1];
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


//----------------------------------------------------------

 
