module.exports = {
  apps: [
    {
      name: "StreamrAPI",
      script: "dist/index.js",
      exec_mode: "cluster",
      instances: 4,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
