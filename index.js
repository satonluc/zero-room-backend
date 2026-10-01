const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Бэкенд на Vercel работает!' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Заполните все поля!' });
  }
  return res.status(200).json({
    success: true,
    message: 'Успешный вход!',
    user: { username }
  });
});

module.exports = app;