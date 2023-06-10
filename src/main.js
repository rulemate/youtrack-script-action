import * as core from '@actions/core'
import { Youtrack } from 'youtrack-rest-client'
import { context } from '@actions/github'

const AsyncFunction = async function () {}.constructor

async function main() {
  const token = core.getInput('youtrack-token', { required: true })
  const url = core.getInput('youtrack-url', { required: true })
  const script = core.getInput('script', { required: true })
  const encoding = core.getInput('result-encoding')

  const client = new Youtrack({
    baseUrl: url,
    token: token
  })

  // noinspection JSUnresolvedReference
  const result = await new AsyncFunction(
    'context',
    'core',
    'youtrack',
    'require',
    script
  )(context, core, client, __non_webpack_require__)

  switch (encoding ? encoding : 'json') {
    case 'json':
      core.setOutput('result', JSON.stringify(result))
      break
    case 'string':
      core.setOutput('result', String(result))
      break
    default:
      throw new Error('Unsupported encoding type.')
  }
}

main().catch((e) => {
  core.setFailed(`Got an unhandled error. ${e}`)
})
