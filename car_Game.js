let red_Car = document.getElementById("red_Car");
let blue_Car = document.getElementById("blue_Car");
let body = document.getElementById("body");
let red_Car_Vpos = 0;
let red_Car_Hpos = 0;
let red_Car_Width = parseInt(window.getComputedStyle(red_Car).width);
let red_Car_Height = parseInt(window.getComputedStyle(red_Car).height);
let blue_Car_Width = parseInt(window.getComputedStyle(blue_Car).width);
let blue_Car_Height = parseInt(window.getComputedStyle(blue_Car).height);
let bodysize = parseInt(window.getComputedStyle(body).width);
let bodyheight = parseInt(window.getComputedStyle(body).height);
let game = true;
let score = 0;
let animation;

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowRight") {
    if (
      parseInt(window.getComputedStyle(blue_Car).marginLeft) +
        20 +
        blue_Car_Width >
      bodysize
    ) {
      let currentLeft = parseInt(window.getComputedStyle(blue_Car).marginLeft);
      currentLeft = 0;
      blue_Car.style.marginLeft = currentLeft + "px";
    } else {
      let currentLeft = parseInt(window.getComputedStyle(blue_Car).marginLeft);
      currentLeft += 20;
      blue_Car.style.marginLeft = currentLeft + "px";
    }
  } else if (event.key == "ArrowLeft") {
    if (parseInt(window.getComputedStyle(blue_Car).marginLeft) - 20 < 0) {
      let currentLeft = parseInt(window.getComputedStyle(blue_Car).marginLeft);
      currentLeft = bodysize - blue_Car_Width;
      blue_Car.style.marginLeft = currentLeft + "px";
    } else {
      let currentLeft = parseInt(window.getComputedStyle(blue_Car).marginLeft);
      currentLeft -= 20;
      blue_Car.style.marginLeft = currentLeft + "px";
    }
  }
});

function restartGame() {
  game = true;
  score = 0;
  red_Car_Vpos = 0;
  red_Car_Hpos = Math.floor(Math.random() * (bodysize - red_Car_Width));
  red_Car.style.marginLeft = red_Car_Hpos + "px";

  animation = setInterval(function () {
    if (!game) return;

    red_Car_Vpos += 40;
    red_Car.style.marginTop = red_Car_Vpos + "px";

    if (red_Car_Vpos + red_Car_Height >= bodyheight) {
      red_Car_Vpos = 0;
      red_Car_Hpos = Math.floor(Math.random() * (bodysize - red_Car_Width));
      red_Car.style.marginTop = red_Car_Vpos + "px";
      red_Car.style.marginLeft = red_Car_Hpos + "px";
      score++;
    }

    let blue_Car_Hpos =
      parseInt(window.getComputedStyle(blue_Car).marginLeft) || 0;
    let blue_Car_Vpos =
      parseInt(window.getComputedStyle(blue_Car).marginTop) || 0;

    if (
      red_Car_Vpos + red_Car_Height >= blue_Car_Vpos &&
      red_Car_Vpos <= blue_Car_Vpos + blue_Car_Height &&
      red_Car_Hpos + red_Car_Width >= blue_Car_Hpos &&
      red_Car_Hpos <= blue_Car_Hpos + blue_Car_Width
    ) {
      game = false;
      clearInterval(animation);
      alert(`Game Over! Score: ${score}`);
      if (confirm("Restart Game?")) {
        restartGame();
      }
      return;
    }
  }, 90);
}

restartGame();
