
const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {
    // `site-warmup-action` input defined in action metadata file
    const authenticationToken = core.getInput('authentication-token');
    console.log(`authentication-token: ${authenticationToken}!`);

    // `url` input defined in action metadata file
    const url = core.getInput('url');
    console.log(`url: ${url}!`);

    axios
        .get('url')
        .then(res => {
            console.log(`statusCode: ${res.status}`);
            console.log(res);
            core.setOutput("httpresponse", res);
        })
        .catch(error => {
            console.error(error);
        });

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}