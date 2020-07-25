const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

reportFileSizeImpact({
  ...readGithubWorkflowEnv(),
  projectDirectoryUrl: process.env.GITHUB_WORKSPACE + "/app",
  buildCommand: "ls -la ./build",
  trackingConfig: {
    "app/build": {
      "./build/**/*": true,
      "./build/**/*.map": false,
    },
  },
});
