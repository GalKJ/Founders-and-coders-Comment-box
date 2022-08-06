// Select elements 
let form = document.querySelector('#form');

let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let comment = document.querySelector('#comment');

const subButts = document.querySelector('#subBut');

let fNameBox = document.querySelector('#fNameBox');
let lNameBox = document.querySelector('#lNameBox');
let commentBox = document.querySelector('#comBox');

// Declare empty variables to be used as arrays
let fNameArray;
let lNameArray;

//Add prevent default on form element

  form.addEventListener('submit', e => {
      e.preventDefault(); 
  });

  
//Add event listener to comment input and a function to count the users characters 

  comment.addEventListener("input", cCount2);

  function cCount2() {
    let charCount2 = document.querySelector('#charCount2');
    
    charCount2.innerHTML = comment.value.length;
  }


  //Add event listener and funcs to populate first name array and fname paragraph

  

  firstName.addEventListener("input", nameInputSplit);

  function nameInputSplit() {
    fNameArray = firstName.value.split('');
  }

  subButts.addEventListener("click", namebox);

  function namebox() {
    fNameBox.textContent = fNameArray.join("");
  }


  //Event listener and func to populate last name array and lname paragraph

  
  lastName.addEventListener("input", alert3);
  
  function alert3() {
    

    lNameArray = lastName.value.split('');
  }

  subButts.addEventListener("click", nameBox);

  function nameBox() {
    lNameBox.textContent = lNameArray.join("");
  }


  //Event listener and func to populate comment array, add and remove class of 'exceededChars' for CSS

  let commentArray = "";

  comment.addEventListener("input", alert);

  function alert() {
    commentArray = comment.value.split('');
    
    if (commentArray.length > 140) {
      comment.classList.add("exceededChars")
    } else {
      comment.classList.remove("exceededChars")
    }
  }


  //Submit button event listener to populate comment paragraph

  subButts.addEventListener("click", combox);

  function combox() {
    commentBox.textContent = commentArray.join(""); 
  }

  

   
  
  