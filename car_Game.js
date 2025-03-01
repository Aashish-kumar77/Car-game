const green_Car = document.getElementById('green_Car');
const red_Car = document.getElementById('red_Car');

window.addEventListener('keydown', x);
let fullBody=outer_Body.clientWidth;
let green_Car_Body=green_Car.offsetWidth;
function x(event) {
    if (event.key === 'ArrowRight') {

        let currentMargin = parseInt(green_Car.style.marginLeft) || 0;
        
        if(currentMargin+green_Car_Body<fullBody){
        currentMargin = currentMargin + 10;
        green_Car.style.marginLeft = currentMargin + 'px';
    }
    }
    else if(event.key ==='ArrowLeft'){
        let currentMargin=parseInt(green_Car.style.marginLeft)||0;
        
        if(currentMargin>0){
            currentMargin=currentMargin-10;
            green_Car.style.marginLeft=currentMargin + 'px';

        }
    }
}


function move_RedCar() {
    let redCar = document.getElementById('red_Car'); 
    let currentPos = parseInt(redCar.style.marginLeft) || 0; 
    let randomOffset = Math.random() * 100; // Adjust the multiplier (100) for desired movement range
    let newPos = currentPos + randomOffset; 
    redCar.style.marginLeft = newPos + 'px'; 
  }
  move_RedCar(); // Call initially to set a random position
setInterval(move_RedCar, 1000); // Call repeatedly for continuous movement (every second in this case)



