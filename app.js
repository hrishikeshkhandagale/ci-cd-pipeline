const express = require('express'); // Imports the Express framework
const app = express();              // Creates an Express application
const port = 3000;                  // Defines the port the app will listen on

// Defines a route for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello from jenkins, added webhook, this is the third version of z');
});

// Starts the server and logs a message to the console
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
