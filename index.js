const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.method === "POST" && req.url === "/click") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "🎉 Docker is alive!" }));
  }
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000"),
);
