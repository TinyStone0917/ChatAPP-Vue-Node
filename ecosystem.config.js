module.exports = {
  apps: [
    {
      name: "Astro Chat Backend",
      cwd: "./server/",
      script: "./server/server.js",
      watch: true,
      ignore_watch: [".git", "./node_modules/", "./logs/*"],
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      },
      error_file: "./logs/pm2errors.log",
      out_file: "./logs/access.log"
    }
  ]
};
