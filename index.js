const functions = require('@google-cloud/functions-framework');

const helloWorld = (req, res) => {
  const name = req.query.name || req.body.name || "World";
  res.status(200).send(`Welcome to harness, ${name}! This is a sample Node.js app on Google Cloud Functions.`);
};

functions.http('helloWorld', helloWorld);

module.exports = { helloWorld };