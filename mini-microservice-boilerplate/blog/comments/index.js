const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Variable to simulate the database
const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  const newComment = { id: commentId, content };
  comments.push(newComment);
  commentsByPostId[req.params.id] = comments;

  res.status(201).send(newComment);
});

app.listen(4001, () => {
  console.log('Listening on port 4001.');
});
