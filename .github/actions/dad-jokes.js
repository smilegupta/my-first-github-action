const axios = require('axios');
const { Octokit } = require('@octokit/rest');

async function run() {
  try {
    // Fetch a random dad joke from the API
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });

    const joke = response.data.joke;

    // Post the dad joke as a comment on the pull request
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const { owner, repo, pull_number } = context.issue;

    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pull_number,
      body: `👨‍👧‍👦 **Dad Joke of the Day** 👨‍👧‍👦\n\n${joke}`,
    });

    console.log('Dad joke posted successfully!');
  } catch (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
}

run();
