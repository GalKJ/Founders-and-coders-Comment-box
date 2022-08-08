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
let commentArray;

//Add prevent default method on form element

  form.addEventListener('submit', e => {
      e.preventDefault(); 
  });

  
//Add event listener to comment input and a function to count the users characters 

  comment.addEventListener("input", cCount2);

  function cCount2() {
    let charCount2 = document.querySelector('#charCount2');
    
    charCount2.innerHTML = comment.value.length;
  }


  //Add event listener to first name input and function to populate first name array and fname paragraph

  firstName.addEventListener("input", fNameInputSplit);

  function fNameInputSplit() {
    fNameArray = firstName.value.split('');
  }

  subButts.addEventListener("click", fNameArrayJoin);

  function fNameArrayJoin() {
    fNameBox.textContent = fNameArray.join('');
  }


  //Add event listener to last name input and function to populate last name array and lname paragraph

  
  lastName.addEventListener("input", lNameInputSplit);
  
  function lNameInputSplit() {
    
    lNameArray = lastName.value.split('');
  }

  subButts.addEventListener("click", lNameArrayJoin);

  function lNameArrayJoin() {
    lNameBox.textContent = lNameArray.join('');
  }


  //Add event listener to comment input, create function to populate comment array, add and remove class of 'exceededChars' to comment input for CSS styles

  comment.addEventListener("input", commentInputSplit);

  function commentInputSplit() {
    commentArray = comment.value.split('');
    
    if (commentArray.length > 140) {
      comment.classList.add("exceededChars")
    } else {
      comment.classList.remove("exceededChars")
    }
  }


  //Submit button event listener to populate comment paragraph

  subButts.addEventListener("click", commentArrayJoin);

  function commentArrayJoin() {
    commentBox.textContent = commentArray.join(""); 
  }

  

   
  
  