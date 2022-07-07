let form = document.querySelector('#form');

let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let comment = document.querySelector('#comment');
let charCount2 = document.querySelector('#charCount2');

const subButts = document.querySelector('#subBut');

let fNameBox = document.querySelector('#fNameBox');
let lNameBox = document.querySelector('#lNameBox');
let commentBox = document.querySelector('#comBox');


  //Prevent default on form

  form.addEventListener('submit', e => {
      e.preventDefault(); 
  });

  
  //Event listener and func for character counter

  comment.addEventListener("input", cCount2);

  function cCount2() {
    charCount2.innerHTML = comment.value.length;
  }


  //Event listener and funcs to populate first name array and fname paragraph

  let fNameArray = "";

  firstName.addEventListener("input", alert2);

  function alert2() {
    fNameArray = firstName.value.split('');
  }

  subButts.addEventListener("click", namebox);

  function namebox() {
    fNameBox.textContent = fNameArray.join("");
  }


  //Event listener and func to populate last name array and lname paragraph

  let lNameArray = "";

  lastName.addEventListener("input", alert3);

  function alert3() {
    lNameArray = lastName.value.split('');
  }

  subButts.addEventListener("click", namebox2);

  function namebox2() {
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

  

   
  
  