let canvasWidth = 400;
let canvasHeight = 400;
let xPos = 200; // Set initial x position
let yPos = 200; // Set initial y position

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(29, 40, 115); // Set background color
    
    // Draw shooting star (or other shape) at (xPos, yPos)
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    // Update xPos and yPos to animate the shooting star
    // Add conditional statements for looping and resetting positions
    xPos += 1; // Update x position for animation
    yPos -= 1; // Update y position for animation
    
    // Draw another shape with its own xPos2 and yPos2
    // Use fill and shape-drawing functions
    fill(0, 255, 0); // Change fill color
    ellipse(xPos + 50, yPos - 50, 20, 20); // Draw another shape
    
    // Bonus: Change the shape, create a cannon effect, add a backdrop
    fill(0, 0, 255); // Change fill color
    rect(xPos + 100, yPos - 100, 30, 15); // Draw a different shape
    
    // Add backdrop, e.g., starry night or skyscrapers
    // You can add an image as the backdrop here
}
