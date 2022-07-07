let form = document.querySelector('#form');

let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let comment = document.querySelector('#comment');
let charCount2 = document.querySelector('#charCount2');

const subButts = document.querySelector('#subBut');

let commentBox = document.querySelector('#comBox');
let nameBox = document.querySelector('#nameBox');


  //Prevent default on form

  form.addEventListener('submit', e => {
      e.preventDefault(); 
  });

  
  //Event listener and func for character counter

  comment.addEventListener("input", cCount2);

  function cCount2() {
    charCount2.innerHTML = comment.value.length;
  }


  //Event listener and func to populate comment array, add and remove class of 'exceededChars' for CSS

  let fNameArray = "";

  firstName.addEventListener("input", alert2);

  function alert2() {
    fNameArray = firstName.value.split('');
  }

  subButts.addEventListener("click", namebox);

  function namebox() {
    nameBox.textContent = fNameArray.join("");
  }


  //Event listener and func to populate comment array, add and remove class of 'exceededChars' for CSS

  let commentArray = "";

  comment.addEventListener("input", alert);

  function alert() {
    commentArray = comment.value.split('');
    
    if (commentArray.length > 5) {
      comment.classList.add("exceededChars")
    } else {
      comment.classList.remove("exceededChars")
    }
  }


  //Submit button event listener to post comment

  subButts.addEventListener("click", combox);

  function combox() {
    commentBox.textContent = commentArray.join(""); 
  }

  

   
  
  