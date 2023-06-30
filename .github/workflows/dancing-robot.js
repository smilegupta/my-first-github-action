const robot = `
\\(•_•)/
( •_•)>⌐■-■
(⌐■_■)
`;

const frames = robot.split('\n');
const totalFrames = frames.length;
const delay = 500; // Delay between frames in milliseconds

async function animate() {
  for (let i = 0; i < totalFrames; i++) {
    console.log(frames[i]);
    await sleep(delay);
    clearConsole();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clearConsole() {
  process.stdout.write('\u001b[3J\u001b[2J\u001b[1J');
  process.stdout.write('\u001b[0;0H');
}

animate();
