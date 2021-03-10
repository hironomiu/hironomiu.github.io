import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/hironomiu/hironomiu.github.io"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star hironomiu/hironomiu.github.io on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
