# youtrack-script-action

The action to execute a simple script using YouTrack REST API.

The following arguments will be provided for `script`.

- `context`
    - The [context](https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts) of the workflow run.
- `core`
    - [@actions/core](https://github.com/actions/toolkit/tree/main/packages/core)
- `youtrack`
    - [youtrack-rest-client](https://www.npmjs.com/package/youtrack-rest-client)
- `require`

This action was inspired by [actions/github-script](https://github.com/actions/github-script).
