const axios = require('axios');
const { GitHub, context } = require('@actions/github');

async function postDadJoke() {
  try {
    // Fetch a random dad joke from the API
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });

    const joke = response.data.joke;

    // Post the dad joke as a comment on the pull request
    const octokit = new GitHub(process.env.GITHUB_TOKEN);

    await octokit.rest.issues.createComment({
      ...context.repo,
      issue_number: context.issue.number,
      body: `👨‍👧‍👦 **Dad Joke of the Day** 👨‍👧‍👦\n\n${joke}`,
    });

    console.log('Dad joke posted successfully!');
  } catch (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
}

postDadJoke();
