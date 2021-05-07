const express = require("express");
var router = express.Router();
var db = require("../db.json");

router.get("/choice", (req, res) => {
  // retrieving query parameters
  const queries = req.query;
  const previousChoices = queries && queries.previous;
  const count = (queries && queries.count) || 2;

  // checking for choices in db
  const choicesDb = db.choices;
  let choices = [];
  if (previousChoices instanceof Array) {
    choices = [...previousChoices];
  } else if (previousChoices) {
    choices.push(previousChoices);
  }
  let choiceNotFound = false;
  choices.forEach((prev) => {
    if (choicesDb.findIndex((choice) => (prev == choice.id)) === -1) {
      choiceNotFound = true;
    }
  });
  if (choiceNotFound) {
    return res.status(400).end();
  }
  
  // calculating matched choices
  const matchedChoices = getMatchedChoices(previousChoices, count);

  // return matched choices
  const response = {
    choices: matchedChoices
  }
  return res.json(response);
});

// logic to get matched choices
// placeholder only currently
function getMatchedChoices(previousChoices, count) {
  // TODO: implement this function to return matched choices based on previous ones.
  const dbChoices = (db && db.choices) || [];
  const dbChoicesLength = dbChoices.length || 0;
  let returnCount = (dbChoicesLength > count)? count : dbChoicesLength;
  const result = dbChoices.slice(0, returnCount);
  return result;
}

router.post("/choice", (req, res) => {
  const choice = req.body;
  res.json(choice);
});

router.get("/", (req, res) => {
  // set response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // set response content
  res.write("<html><body><p>Greetings from stop analyzing!</p></body></html>");
  res.end();
});

module.exports = router;
