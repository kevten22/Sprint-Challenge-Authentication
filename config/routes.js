const axios = require('axios');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticate } = require('./middlewares');

const secret = 'Why can’t banks keep secrets? There are too many tellers!'

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  console.log(req.body)
  const user = req.body;
  console.log(user);
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  db.insert(user)
      .into('users')
      .then(ids => {
        db('users')
          .where({id: ids[0] })
          .first()
          .then(user => {
            const token = generateToken(user);
            res.status(201).json(token);
          })
      })
      .catch(err => {
        res.status(500).json(err);
      })

}

function generateToken(user){
  const payload ={
      username: user.username,
  };

  const options = {
      expiresIn: '1h',
  };
  return jwt.sign(payload, secret, options);
}

function login(req, res) {
  // implement user login
  const credentials = req.body;

  db('users')
        .where({ username: credentials.username }).first()
        .then(user => {
            if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
                return res.status(401).json({ error: 'Incorrect credentials' });
            }
            else {
                const token = generateToken(user);
                res.status(201).json(token);
            }
        })
    .catch(err => {
        res.status(500).json(err);
    })


}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
