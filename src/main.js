import * as core from '@actions/core'
import {Youtrack} from "youtrack-rest-client";

async function main() {
    const token = core.getInput('youtrack-token', {required: true})
    const url = core.getInput('youtrack-url', {required: true})
    const script = core.getInput('script', {required: true})
    const encoding = core.getInput('result-encoding')

    const client = new Youtrack({
        baseUrl: url,
        token: token
    })
}

main().catch((e) => {
    core.setFailed(`Got an unhandled error. ${e}`)
})
