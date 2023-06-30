const robot = [
  "\\(•_•)/",
  "( •_•)>⌐■-■",
  "(⌐■_■)"
];

const totalFrames = robot.length;
const delay = 500; // Delay between frames in milliseconds

async function animate() {
  for (let i = 0; i < totalFrames; i++) {
    if (i > 0) {
      process.stdout.moveCursor(0, -robot[i - 1].split('\n').length);
    }
    process.stdout.cursorTo(0);
    console.log(robot[i]);
    await sleep(delay);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

animate();
