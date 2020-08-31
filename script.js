// Show progress bar when user scrolls //

window.onscroll = function () {
    let scroll = document.body.scrollLeft || document.documentElement.scrollLeft;
    let total =
      document.documentElement.scrollWidth - document.documentElement.clientWidth;
    document.getElementById("progressBar").style.width =
      (scroll / total) * 100 + "%";
  };

  window.onwheel = function (e) {
    let speed = parseInt(document.documentElement.clientWidth / 5);
    window.scrollBy(Math.sign(e.deltaY) * speed, 0);
  };




// make menu button extend full screen//

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("change");
});

document.querySelector(".nav-item").addEventListener("click", () => {
  document.querySelector(".bg-cover").classList.toggle("change");
});



// typing effect //

const typeString = ['Hello!', 'Ola!', 'Salut!', 'Bonjour!'];
let  i = 0;
let count = 0
let selectedText = '';
let text = '';


(function type() {
    if (count == typeString.length) {
      count = 0;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    document.getElementById('greeting').innerHTML = text;
    if (text.length === selectedText.length) {
      count++;
      i = 0;
    }
    setTimeout(type, 600);
    sleep(300);
}());

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    }
    while (currentDate - date < milliseconds);
}

// Contact page - repeat with the interval of 2 seconds

const words = ['Clever', 'Interesting', 'Innovative', 'New', 'Diverse'];

const newFun = () => {
  const randomWord = Math.floor(Math.random() * words.length);
  document.getElementById('clever').innerHTML = words[randomWord];
}

let timerId = setInterval(newFun, 2000);
