const axios = require('axios');

async function run() {
  try {
    // Fetch a random dad joke from the API
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });

    const joke = response.data.joke;

    // Post the dad joke as a comment on the pull request
    const octokit = require('@octokit/rest')();
    octokit.authenticate({
      type: 'token',
      token: process.env.GITHUB_TOKEN,
    });

    const context = JSON.parse(process.env.GITHUB_CONTEXT);
    const { owner, repo, number } = context.issue;

    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: number,
      body: `👨‍👧‍👦 **Dad Joke of the Day** 👨‍👧‍👦\n\n${joke}`,
    });

    console.log('Dad joke posted successfully!');
  } catch (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
}

run();
