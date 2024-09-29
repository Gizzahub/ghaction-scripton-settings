import axios from 'axios';
import * as core from '@actions/core';

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN', { required: true });
const REPO_OWNER = core.getInput('REPO_OWNER', { required: true });
const REPO_NAME = core.getInput('REPO_NAME', { required: true });

const patchRepo = async (options:{
    has_wiki: boolean | undefined,
}) => {
  let paramBody = Object.fromEntries(
    Object.entries(options).filter(([_, value]) => value !== undefined)
  )
  if (Object.keys(paramBody).length === 0) {
    console.log('No options provided to patch repo');
    return;
  }
  try {
    const response = await axios.patch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`,
      paramBody,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    console.log('Repo patched:', response.data);
  } catch (error) {
    console.error('Error patch repo:', error);
  }
};

export { patchRepo };
