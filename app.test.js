// Function to test
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

// Test suites
describe("detectHit", function () {
    // Test suite for collision detection
    describe("when there is a collision", function () {
        it("should change the chicken's image to an egg", function () {
            // Set up test data
            let chicken = { x: 100, y: 100, width: 50, height: 50, image: chickenImage };
            let allCars = [{ x: 150, y: 100, width: 50, height: 50 }, { x: 100, y: 150, width: 50, height: 50 }, { x: 200, y: 200, width: 50, height: 50 },];

            // Call the function being tested
            detectHit(chicken, allCars);

            // Check the result
            expect(chicken.image).toEqual(egg);
        });

        it("should return true", function () {
            // Set up test data
            let chicken = { x: 100, y: 100, width: 50, height: 50, image: chickenImage };
            let allCars = [{ x: 150, y: 100, width: 50, height: 50 }, { x: 100, y: 150, width: 50, height: 50 }, { x: 200, y: 200, width: 50, height: 50 },];

            // Call the function being tested
            let result = detectHit(chicken, allCars);

            // Check the result
            expect(result).toBe(true);
        });
    });
}