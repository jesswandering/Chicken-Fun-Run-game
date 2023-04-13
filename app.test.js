describe('character class', function () {
    let hen = new Character(5, 200, chick, 40, 45);
    console.log(Character);
    it('should be a number for x', function () {
        expect(typeof hen.x).toBe('number');
    });

    it('should be a number for y', function () {
        expect(typeof hen.y).toBe('number');
    });

    it('should be an object', function () {
        expect(typeof hen.image).toBe('object');
    });

});