import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
});

export { octokit };