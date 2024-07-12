import { Application } from "express";

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: Application) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.timbu.cloud",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // remove '/api' from the path
      },
    })
  );
};
