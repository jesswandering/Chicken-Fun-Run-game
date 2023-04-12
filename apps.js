console.log('Chicken Fun Run')
let jokes = [
    "You Win!\n\nWhy did the chicken cross the road?\n\nTo get to the other side.",
    "You Win!\n\nWhy does a chicken coop have 2 doors?\n\nCause if it had 4 doors it'd be called a Chicken Sedan.",
    "You Win!\n\nWhat do you call a cow with no legs?\n\nGround beef.",
    "You Win!\n\nWhat do you call a cow with two legs?\n\nLean beef.",
    "You Win!\n\nWhat do you call a cow with 3 legs?\n\nTri Tip.",
    "You Win!\n\nWhy do dads take an extra pair of socks when they go golfing?\n\n\nIn case they get a hole in one!",
    "You Win!\n\nHow did the barber win the race?\n\nHe knew a short cut!",
    "You Win!\n\nWhat does a baby computer call his father?\n\nData. ",
    "You Win!\n\nAfter an unsuccessful harvest, why did the farmer decide to try a career in music?\n\nBecause he had a ton of sick beets.",
    "You Win!\n\nI only seem to get sick on weekdays.\n\nI must have a weekend immune system.",
    "You Win!\n\nWhat's the difference between a well-dressed man on a unicycle and a poorly-dressed man on a bicycle?\n\nAttire.",
    "You Win!\n\nI hate my job—all I do is crush cans all day.\n\nIt’s soda pressing.",
    "You Win!\n\nWhat's blue and not very heavy?\n\nLight blue.",
    "You Win!\n\nWhich farm animal likes computing the best?\n\nThe Ram.",
    "You Win!\n\nWhy did the programmer quit her job?\n\nBecause she didn't get arrays.",
    "You Win!\n\nWhat did the Java Code say to the C code?\n\nYou’ve got no class.",
    "You Win!\n\nWhy do programmers prefer dark mode?\n\nBecause light attracts bugs.",
    "You Win!\n\nWhy do Java programmers have to wear glasses?\n\nBecause they don’t C#.",
]

// DOM Elements
const game = document.getElementById('game');
const movement = document.getElementById('movement');
const score = document.getElementById('score');
const status = document.getElementById('status');
const ctx = game.getContext('2d'); // creates a 2D game
const chick = document.getElementById('chick');
const egg = document.getElementById('egg');
const obstacle1 = document.getElementById('obstacle1');
const obstacle2 = document.getElementById('obstacle2');
const obstacle3 = document.getElementById('obstacle3');
const obstacle4 = document.getElementById('obstacle4');
const obstacle5 = document.getElementById('obstacle5');
const obstacle6 = document.getElementById('obstacle6');
const obstacle7 = document.getElementById('obstacle7');
const obstacle8 = document.getElementById('obstacle8');
let chicken;
let allCars = [];
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
    chicken = new Character(5, 200, chick, 40, 45);

});


// Function to Render Cars
function renderCars() {
    allCars.push(new Drivers(6, 0, obstacle1, 47, 85));
    allCars.push(new Drivers(70, -90, obstacle2, 47, 85));
    allCars.push(new Drivers(128, 400, obstacle3, 47, 80));
    allCars.push(new Drivers(190, 400, obstacle4, 50, 85));
    allCars.push(new Drivers(250, -10, obstacle5, 49, 80));
    allCars.push(new Drivers(313, 0, obstacle6, 49, 75));
    allCars.push(new Drivers(373, 400, obstacle7, 50, 85));
    allCars.push(new Drivers(435, 400, obstacle8, 50, 85));
}


// Run the game loop
const runGame = setInterval(gameLoop, 60);

document.addEventListener('keydown', moveChicken);
console.log('chicken')

// Get the start button element
const startButton = document.getElementById('start-button');

// Add an event listener to the start button that triggers the driveCars function when clicked
startButton.addEventListener('click', renderCars);

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

// Keyboard Logic to move the chicken
function moveChicken(e) {
    console.log('movement :', e.key);

    if (e.key === 'ArrowUp') {
        chicken.y - 30 >= 0 ? (chicken.y -= 30) : null;
    } else if (e.key === 'ArrowDown') {
        chicken.y + 5 <= game.height - chicken.height ? (chicken.y += 30) : null;
    } else if (e.key === 'ArrowLeft') {
        chicken.x - -20 >= 0 ? (chicken.x -= 61) : null;
    } else if (e.key === 'ArrowRight') {
        if (chicken.x + 20 <= 493 - chicken.width) {
            chicken.x += 61;
            console.log('chicken.x', chicken.x)
        } else {
            console.log('chicken.x', chicken.x)
            // alert('You Win!');
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            const popup = document.createElement('div');
            popup.innerText = randomJoke;
            popup.classList.add('win-popup');
            document.body.appendChild(popup);
        }
    }
}

// Element that says you've won & append the element to the DOM instead of the alert
function addNewChicken() {
    chicken.alive = false;
}

//====================== GAME PROCESSES ======================= //
function gameLoop() {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height);
    if (typeof chicken.alive === 'boolean' && chicken.alive) {
        // execute code when chicken is alive
        chicken.render();
        let hit = detectHit(chicken, allCars)
        if (hit) {
            // chicken.image = egg;
            console.log('chicken was hit');
            clearInterval(runGame);
            alert('Game Over!')
            window.location.reload();
        }
    }

    chicken.render();
    for (let i = 0; i < allCars.length; i++) {
        allCars[i].render();
    }
}

// Movement function for cars
function driveCars() {
    let speeds = [4, 8, -8, -6, 5, 6, -8, -7];
    for (let i = 0; i < allCars.length; i++) {
        let car = allCars[i];
        car.y += speeds[i];
        if (speeds[i] > 0 && car.y > game.height) {
            car.y = -car.height;
        } else if (speeds[i] < 0 && car.y < -car.height) {
            car.y = game.height;
        }
    }
}
setInterval(driveCars, 40);


// Detect collision
// returns boolean if chicken was hit
function detectHit(chicken, allCars) {
    for (let i = 0; i < allCars.length; i++) {
        let car = allCars[i];
        if (chicken.x < car.x + car.width &&
            chicken.x + chicken.width > car.x &&
            chicken.y < car.y + car.height &&
            chicken.y + chicken.height > car.y) {
            // collision detected
            // When chicken gets hit it turns into egg image
            chicken.image = egg;
            return true;
        }
    }
    // no collision detected
    return false;
}
