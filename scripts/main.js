


// Image changer

let myimage = document.querySelector('img');

myimage.onclick = function() {
  let mysrc = myimage.getAttribute('src');
  if(mysrc === 'images/nasiral-mulk.jpg') {
    myimage.setAttribute('src','images/nasiral-mulk2.jpg');
  } else if(mysrc ==='images/nasiral-mulk2.jpg')
  {  myimage.setAttribute('src','images/nasiral-mulk3.jpg');
} else {
    myimage.setAttribute('src','images/nasiral-mulk.jpg');
  }
}







//  A personalized welcome message
let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else{
  localStorage.setItem('name',myName);
  myheading.textContent = 'Salam, ${myName}';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myheading.textContent = 'Salam,' + storedName;
}


mybutton.onclick = function() {
  setUserName();
}




//  if no name is entered
// function setUserName() {
//   let myName = prompt('please enter your name.')
// }
