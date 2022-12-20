module.exports = {
  apps: [
    {
      name: "brubeckscan/server",
      script: "packages/server/dist/index.js",
      exec_mode: "cluster",
      instances: 4,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "brubeckscan/client",
      script: "packages/client/server/index.js",
      exec_mode: "cluster",
      instances: 4,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
