module.exports = {
  apps: [
    {
      name: "StreamrAPI",
      script: "packages/server/dist/index.js",
      exec_mode: "cluster",
      instances: 4,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
