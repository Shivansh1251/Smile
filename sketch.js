let progress = 0; // Progress variable to control drawing speed
let timer; // Timer variable to store setTimeout reference

function setup() {
  createCanvas(400, 400);
  background(255); // Set background color to white
  drawFace(); // Call function to draw face
  timer = setTimeout(stopAnimation, 3000); // Set timeout to stop animation after 4 seconds
}

function draw() {
  // Increment progress to control drawing speed (increased from 0.02 to 0.05 for slightly slower speed)
  progress += 0.05;
  
  // Call function to draw face with current progress
  drawFace(progress);
}

function stopAnimation() {
  noLoop(); // Stop animation
}

function drawFace(progress) {
  // Draw face
  fill(255, 204, 0); // Yellow color
  noStroke(); // No stroke for face
  let faceSize = map(progress, 0, 1, 0, 200); // Map progress to face size
  ellipse(200, 200, faceSize, faceSize); // Face circle
  
  // Draw eyes
  drawEye(150, 150, progress);
  drawEye(250, 150, progress);

  // Draw mouth
  drawSmile(progress);
}

function drawEye(x, y, progress) {
  // Draw eye
  fill(0); // Black color
  let eyeSize = map(progress, 0, 1, 0, 30); // Map progress to eye size
  ellipse(x, y, eyeSize, eyeSize); // Eye circle

  // Draw eye highlight
  fill(255); // White color
  ellipse(x - 7, y + 5, 14, 14); // Eye highlight circle
}

function drawSmile(progress) {
  // Draw smile
  noFill(); // No fill for arc
  stroke(0); // Black color for stroke
  strokeWeight(4); // Increase stroke weight
  let smileAngle = map(progress, 0, 1, PI + QUARTER_PI, TWO_PI - QUARTER_PI); // Map progress to smile angle
  arc(200, 250, 120, 80, PI + QUARTER_PI, smileAngle); // Smiling arc
}
