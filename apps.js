console.log('Chicken Fun Run')

// DOM Elements
const game = document.getElementById('game');
const movement = document.getElementById('movement');
const score = document.getElementById('score');
const status = document.getElementById('status');
const ctx = game.getContext('2d'); // creates a 2D game
const chick = document.getElementById('chick');
const obstacle1 = document.getElementById('obstacle1');
const obstacle2 = document.getElementById('obstacle2');
const obstacle3 = document.getElementById('obstacle3');
const obstacle4 = document.getElementById('obstacle4');
const obstacle5 = document.getElementById('obstacle5');
const obstacle6 = document.getElementById('obstacle6');
const obstacle7 = document.getElementById('obstacle7');
const obstacle8 = document.getElementById('obstacle8');
let chicken;
let car1;
let car2;
let car3;
let car4;
let car5;
let car6;
let car7;
let car8;


// ====================== PAINT INTIAL SCREEN ======================= //
// Event Listeners
window.addEventListener('DOMContentLoaded', function () {
    chicken = new Character(-10, 210, chick, 70, 70);
    car1 = new Drivers(0, -10, obstacle2, 85, 110);
    car2 = new Drivers(59, -10, obstacle1, 85, 110);
    car3 = new Drivers(109, 400, obstacle3, 85, 110);
    car4 = new Drivers(174, 400, obstacle4, 85, 110);
    car5 = new Drivers(245, -10, obstacle5, 88, 110);
    car6 = new Drivers(305, -10, obstacle6, 85, 110);
    car7 = new Drivers(360, 400, obstacle7, 85, 110);
    car8 = new Drivers(420, 400, obstacle8, 85, 110);


    // run the game loop
    const runGame = setInterval(gameLoop, 60);
});

document.addEventListener('keydown', moveChicken);
console.log('chicken')


// document.addEventListener('keydown', movementHandler);
document.addEventListener('keydown', moveChicken);

// ====================== SETUP FOR CANVAS RENDERING ======================= //
// 2D rendering context for canvas element
// This is used for drawing shapes, text, images, etc.
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

class Character {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = function () {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}

class Drivers {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = function () {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}

// KEYBOARD LOGIC
function moveChicken(e) {
    console.log('movement :', e.key);

    if (e.key === 'ArrowUp' || e.key === 'w') {
        chicken.y - 30 >= 0 ? (chicken.y -= 30) : null;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        chicken.y + 30 <= game.height - chicken.height ? (chicken.y += 30) : null;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        chicken.x + 30 <= game.width - chicken.width ? (chicken.x += 30) : null;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        chicken.x - 30 >= 0 ? (chicken.x -= 30) : null;
    }
}

//====================== GAME PROCESSES ======================= //
function gameLoop() {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height);
    // if (chicken.alive) {
    //     car1.render();
    // }
    // display x and y coords for Chicken
    // movement.textContent = `X:${chicken.x}\nY:${chicken.y}`;
    // movement.textContent = `X:${chicken.x}\nY:${chicken.y}`;
    chicken.render();
    car1.render();
    car2.render();
    car3.render();
    car4.render();
    car5.render();
    car6.render();
    car7.render();
    car8.render();
}



// Movement function for Cars

function driveCar() {
    car1.y += 5
    car2.y += 9
    car3.y += 4
    car4.y += 3
    car5.y += 8
    car6.y += 12
    car7.y += 7
    car8.y += 4
}

setInterval(driveCar, 40);
