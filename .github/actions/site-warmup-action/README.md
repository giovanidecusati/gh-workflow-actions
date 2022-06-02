# authentication-token javascript action
This action send a POST request adding the bearer authentication header.

## Inputs
## `authentication-token`
**Required** Bearer authentication token. Default `"empty"`.

## Inputs
## `url`
**Required** Url to post a request. Default `"empty"`.

## Outputs
## `httpresponse`
HTTP request object.

## Example usage
```
uses: giovanidecusati/gh-workflow-actions@site-warmup-action
with:
    authentication-token: ${{ secrets.WEBAPP_BEARER_AUTHENTICATION_TOKEN }}
    url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}
```