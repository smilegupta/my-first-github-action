const robot1 = `
   o O
 /¯   ¯\\
|       |
 \\_   _/
   | |
   | |
   | |
   | |
  /| |\\
 / | | \\
<__|_|__>
`;

const robot2 = `
  \\o/
   |
  / \\
`;

const frames = [robot1, robot2];
const totalFrames = frames.length;
const delay = 100; // Delay between frames in milliseconds

async function animate() {
  const startTime = new Date().getTime();

  while (new Date().getTime() - startTime < 300000) {
    for (let i = 0; i < totalFrames; i++) {
      console.log(frames[i]);
      await sleep(delay);
      clearConsole();
    }
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
