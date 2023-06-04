import * as core from '@actions/core'
import {Youtrack} from "youtrack-rest-client";
import {context} from "@actions/github";

const AsyncFunction = async function () {
}.constructor;

async function main() {
    const token = core.getInput('youtrack-token', {required: true})
    const url = core.getInput('youtrack-url', {required: true})
    const script = core.getInput('script', {required: true})
    const encoding = core.getInput('result-encoding')

    const client = new Youtrack({
        baseUrl: url,
        token: token
    })
    const result = await new AsyncFunction(
        'context',
        'core',
        'youtrack',
        script
    )(context, core, client)

    core.setOutput('result', result)
}

main().catch((e) => {
    core.setFailed(`Got an unhandled error. ${e}`)
})
