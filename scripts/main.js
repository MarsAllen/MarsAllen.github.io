// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	switch(mySrc){
		case 'images/m1.png':
			myImage.setAttribute ('src','images/m2.png');
		break;
		case 'images/m2.png':
			myImage.setAttribute ('src','images/m3.png');
		break;
		case 'images/m3.png':
			myImage.setAttribute ('src','images/m1.png');
		break;
	}	
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Allen is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Allen is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
