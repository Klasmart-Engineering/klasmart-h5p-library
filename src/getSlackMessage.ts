/* eslint-disable no-await-in-loop */

import axios, { AxiosRequestConfig } from 'axios';
import { exec, ExecException } from 'child_process';

const executeCliCommand = function (command: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(command, function (
            error: ExecException,
            stdout: string,
            stderr: string
        ) {
            if (error) {
                reject(error);
            } else if (stderr) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
};

const workspace = process.env.BITBUCKET_WORKSPACE;
const repository = process.env.BITBUCKET_REPO_SLUG;
const branchName = process.env.BITBUCKET_BRANCH;
const user = process.env.BITBUCKET_USER;
const password = process.env.BITBUCKET_PASSWORD;
const previousBuildNumber = Number(process.env.BITBUCKET_BUILD_NUMBER) - 1;

const maxPipelineLoops = 20;
const slackMessageHeader = `🔔 A new build of H5P has been deployed from the "${branchName}" branch.`;
const pipelinesUrl = `https://${user}:${password}@api.bitbucket.org/2.0/repositories/${workspace}/${repository}/pipelines`;

const bitBucketRequest: AxiosRequestConfig = {
    method: 'GET',
    headers: { Accept: 'application/json' }
};

async function getCommitHashOfLastPipelineByCurrentBranch(): Promise<
    string | undefined
> {
    let loopCounter = 0;
    let commitHashOfLastPipelineByCurrentBranch = undefined;
    let buildNumber = previousBuildNumber;
    while (loopCounter < maxPipelineLoops && buildNumber >= 1) {
        bitBucketRequest.url = `${pipelinesUrl}/${buildNumber}`;
        const response = await axios(bitBucketRequest);
        const pipeline = response?.data;
        if (
            pipeline &&
            pipeline.state?.name === 'COMPLETED' &&
            pipeline.state?.result?.name === 'SUCCESSFUL' &&
            pipeline.target?.ref_type === 'branch' &&
            pipeline.target?.ref_name === branchName
        ) {
            commitHashOfLastPipelineByCurrentBranch =
                pipeline.target.commit?.hash;
            break;
        }
        loopCounter += 1;
        buildNumber -= 1;
    }
    return commitHashOfLastPipelineByCurrentBranch;
}

async function getSlackMessage(
    commitHashOfLastPipelineByCurrentBranch: string
): Promise<string> {
    let result = slackMessageHeader + '\n';
    const currentState = branchName;
    const previousState = commitHashOfLastPipelineByCurrentBranch;
    const commits = await executeCliCommand(
        `git log ${previousState}..${currentState} --oneline --reverse | cut -d " " -f 1`
    );
    for (const commit of commits.split('\n').filter((x) => x)) {
        const header = await executeCliCommand(
            `git show --format="%s" -s ${commit}`
        );
        result += `  * ${header}`;
    }
    return result;
}

async function main(): Promise<string> {
    const commitHashOfLastPipelineByCurrentBranch = await getCommitHashOfLastPipelineByCurrentBranch();
    if (!commitHashOfLastPipelineByCurrentBranch) {
        // Unable to find a previous pipeline for "${branchName}" branch. Returning default message.
        return slackMessageHeader;
    }
    const slackMessage = await getSlackMessage(
        commitHashOfLastPipelineByCurrentBranch
    );
    const webhookUrl = process.env.WEBHOOK_URL;
    const pretext = process.env.PRETEXT;
    const payload = {
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: pretext
                }
            },
            {
                type: 'divider'
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: slackMessage
                }
            }
        ]
    };
    const response = await axios.post(webhookUrl, payload, {
        timeout: 10
    });
    if (response.status >= 200 && response.status <= 299) {
        console.log('Notification successful');
    } else {
        console.log('Notification failed');
    }
    return slackMessage;
}

main()
    .then((slackMessage) => {
        console.log(slackMessage);
    })
    .catch((e) => {
        console.log(slackMessageHeader);
    });
