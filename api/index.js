const { app } = require("../dist/browser/server/main");
const server = require("http").createServer(app);

module.exports = (req, res) => {
  server.emit("request", req, res);
};
