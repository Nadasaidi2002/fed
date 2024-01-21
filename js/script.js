console.log('hoi');

// Hamburger menu werkend maken

// als eerst spreek ik de html elementen aan met const/ik selecteer de elementen
const hamburgerMenu = document.querySelector("header > button:nth-of-type(3)");
const kruisje = document.querySelector("header nav > button");
const navigatieElement = document.querySelector("header nav");


function openMenu() {
	navigatieElement.classList.add("open");
	document.documentElement.classList.add("menuOpen");
}


function sluitMenu() {
	navigatieElement.classList.remove("open");
	document.documentElement.classList.remove("menuOpen");
}

hamburgerMenu.addEventListener("click", openMenu);
kruisje.addEventListener("click", sluitMenu);





// Dit zorgt ervoor dat de styling van de header veranderd als je scrollt
const header = document.querySelector('header');
const headerIcons = document.querySelectorAll('header button');
const logo = document.querySelector('header > a:first-of-type');


function handleScroll() {
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
      logo.classList.add('scrolled');
      headerIcons.forEach(button => button.classList.add('scrolled')); 
  } else {
      header.classList.remove('scrolled');
      logo.classList.remove('scrolled');
      headerIcons.forEach(button => button.classList.remove('scrolled'));
  }
}

// eventlistener
window.addEventListener('scroll', handleScroll);


// audio voor submit knop
var submitKnop = document.querySelector('footer form > section:nth-of-type(2) input:nth-of-type(2)');
var audio = document.querySelector('audio');

function playaudio(){
    audio.play();
    console.log("jkdwk");
}

submitKnop.addEventListener('click', playaudio);