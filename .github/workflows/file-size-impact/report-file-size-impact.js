const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

reportFileSizeImpact({
  ...readGithubWorkflowEnv(),
  buildCommand: "npm run build --prefix ./app",
  trackingConfig: {
    "app/build": {
      "./app/build/**/*": true,
      "./app/build/**/*.map": false,
    },
  },
});
