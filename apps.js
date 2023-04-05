console.log('Chicken Fun Run')

// DOM Elements
const game = document.getElementById('game');
const movement = document.getElementById('movement');
const ctx = game.getContext('2d'); // creates a 2-dimensional canvas
// set up characters/cars
let chicken;
let car1;
let car2;

// Event Listener
window.addEventListener('DOMContentLoaded', function () {

    car1 = new obstacle(200, 10, 40, 40);

    const runGame = setInterval(gameLoop, 60);
    const carFunction = setInterval(moveCar, 60);
})

game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);


// random car operations
const colorIndex = ['red', 'black'];
let randomIndex = Math.floor(Math.random() * (colorIndex.length));
let randomColor = colorIndex[randomIndex];

console.log(randomColor);

class obstacle {
    constructor(x, y, color, width, height) {

        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.render = function () {

            ctx.fillStyle = this.color; //to fill in a spot on the canvas
            ctx.fillRect(this.x, this.y, this.width, this.height); //fillRect => making a rectangle
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);

    car1.render();
}

function moveCar() {

    car1.y += 3;

    if (car1.x < 0) {
        car1.x = 0 + 2;
    }
    else if (car1.x + car1.width > game.width) {
        car1.x = game.width - (car1.width + 2);
    }
    else if (car1.y < 0) {
        car1.y = 0 + 2;
    }
    else if (car1.y + car1.height > game.height) {
        car1.y = game.height - (car1.height + 2);
        car1.landed = true;
    }
}


// // Load the images
// const fastCar = new Image();
// fastCarImg.src = './img/fastcar.jpg';

// const slowCar = new Image();
// slowCarImg.src = './img/slowcar.png';

// const chickenImage = new Image();
// alienImage.src = './img/chicken.png';

// const roadImg = new Image();
// roadImage.src = './img/roadcar.jpg';


// Characters

// class Chicken {
//     constructor(x, y, color, width, height) {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true; // cause your character needs to be alive in a game

//         this.render = function () {
//             ctx.fillStyle = this.color; //to fill in a spot on the canvas
//             ctx.fillRect(this.x, this.y, this.width, this.height); //fillRect => making a rectangle
//         }
//     }
// }

// class Cars {
//     constructor()
//     img.onload = function { car = newcar(100, 100, car image) }
// }
// // just to know that our render works!
// let rambo = new Crawler(200, 200, 'yellow', 50, 50);
// rambo.render();

// // KEYBOARD LOGIC
// function movementHandler(e) {
//     console.log('movement :', e.key);

//     if (e.key === 'ArrowUp' || e.key === 'w') {
//         donkey.y - 10 >= 0 ? (donkey.y -= 10) : null; // null means do nothing
//     } else if (e.key === 'ArrowDown' || e.key === 's') {
//         donkey.y + 10 <= game.height - donkey.height ? (donkey.y += 10) : null;
//     } else if (e.key === 'ArrowRight' || e.key === 'd') {
//         donkey.x + 10 <= game.width - donkey.width ? (donkey.x += 10) : null;
//     } else if (e.key === 'ArrowLeft' || e.key === 'a') {
//         donkey.x - 10 >= 0 ? (donkey.x -= 10) : null;
//     }
// }