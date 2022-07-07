const subButts = document.querySelector('#demo');
let firstName = document.querySelector('#fname');
let textArea = document.querySelector('#textArea');
let commentBox = document.querySelector('#comBox');
let form = document.querySelector('#form');
let charCount = document.querySelector('#charCount');
let charCount2 = document.querySelector('#charCount2');
let testComment = document.querySelector('#comment');


  form.addEventListener('submit', e => {
      e.preventDefault(); 
  });

  // textArea.addEventListener("input", cCount);

  // function cCount() {
  //   charCount.innerHTML = textArea.textLength;
  // }

  testComment.addEventListener("input", cCount2);

  function cCount2() {
    charCount2.innerHTML = testComment.value.length;
  }

  let myArray = "";

  testComment.addEventListener("input", alert);

  function alert() {
    myArray = testComment.value.split('');
    if (myArray.length > 5) {
      testComment.classList.add("exceededChars")
    }
    if (myArray.length > 5) {
      testComment.classList.add("exceededChars")
    } else {
      testComment.classList.remove("exceededChars")
    }
  }

  

  // textArea.addEventListener("keydown", keyCount); 
  
  