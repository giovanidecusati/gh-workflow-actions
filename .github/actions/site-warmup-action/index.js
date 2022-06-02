
const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `site-warmup-action` input defined in action metadata file
    const authenticationToken = core.getInput('authentication-token');
    console.log(`authentication-token: ${authenticationToken}!`);

    const url = core.getInput('url');
    console.log(`url: ${url}!`);

    const time = (new Date()).toTimeString();
    core.setOutput("httpresponse", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}