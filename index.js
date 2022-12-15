// Import
const http = require("http");

// Create Server
const server = http.createServer(function (request, response) {
  const method = request.method;
  const path = request.url;
  const headers = request.headers;

  const data = {
    method,
    path,
    headers,
  };

  console.log(data);

  response.end("<p>Success</p>");
});

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log('The server is running');
});
