
// when loading the page we ccess all the drop images from html
window.onload = function () {
  drop = document.querySelectorAll("body > img[data-drop]");

  // We set up the start position. it goes through all the items and gives them position left and top of the body. So it starts from top behind hidden and goes out and all next to each other. The interval states how long it will take the interval (every 20ms) and with the first parameter refering to the function move. 
  for (let i = 0; i < drop.length; i++) {
      drop[i].style.left = i * window.innerWidth / drop.length + "px";
      drop[i].style.top = -drop[i].height + "px";
  }

  setInterval(move,20);
}

// The timer function how fast it moves. It changes the position from the top and if we change the number (2) to something higher it will move faster.
function move() {
  for (let i = 0; i < drop.length; i++) {
      let newPosition = parseInt(drop[i].style.top) + 2;
      if (newPosition > window.innerHeight) {
        newPosition = -drop[i].height;
      }
      drop[i].style.top = newPosition + "px";
  }
}
