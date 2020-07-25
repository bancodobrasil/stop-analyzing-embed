const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

reportFileSizeImpact({
  ...readGithubWorkflowEnv(),
  buildCommand: "ls -la ./app/build",
  trackingConfig: {
    "app/build": {
      "./app/build/**/*": true,
      "./app/build/**/*.map": false,
    },
  },
});
