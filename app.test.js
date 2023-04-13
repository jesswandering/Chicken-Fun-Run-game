describe('Character', function () {
    let character;

    beforeEach(function () {
        // Create a new Character object with a mock image
        const mockImage = new Image();
        character = new Character(100, 200, mockImage, 50, 50);

        // Spy on the drawImage method of the canvas context
        spyOn(ctx, 'drawImage');
    });

    describe('render', function () {
        it('should draw the image on the canvas at the correct position and size', function () {
            // Call the render method
            character.render();

            // Check that drawImage was called with the correct arguments
            expect(ctx.drawImage).toHaveBeenCalledWith(
                mockImage,
                character.x,
                character.y,
                character.width,
                character.height
            );
        });
    });
});