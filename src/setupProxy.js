const createProxyMiddleware = require("http-proxy-middleware");

// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware("/v1/get", {
//       target: "http://front365.s3-website.ap-northeast-2.amazonaws.com", //프록시 할 주소
//       onProxyReq(proxyReq, req, res) {
//         proxyReq.setHeader("Origin", "http://54.180.114.189:8080/365Project");
//       },
//       changeOrigin: true,
//     })
//   );
// };

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      // "http://54.180.114.189:8080/365Project",
      "http://front365.s3-website.ap-northeast-2.amazonaws.com/",
      {
        // target: "http://localhost:3000",
        target: "http://54.180.114.189:8080/365Project",

        changeOrigin: true,
      }
    )
  );
};

// const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "http://3.36.74.148:8080/project365-back_2",
//     proxy({
//       target: "http://3.36.74.148:8080/project365-back_2",
//       changeOrigin: true,
//     })
//   );
// };
