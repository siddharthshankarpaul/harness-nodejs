const functions = require('@google-cloud/functions-framework');

functions.http('hellowWorld',(req, res) => {
    // Access any query parameters or request body data as needed
    const name = req.query.name || req.body.name || "World";
  
    // Send a response
    res.status(200).send(`Welcome to harness, ${name}! This is a sample Node.js app on Google Cloud Functions.`);
  });
  