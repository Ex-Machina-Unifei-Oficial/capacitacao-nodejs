const express = require('express');
const { json } = require('./middleware/json');
const route = require('./config/routes')

const app = express();
const PORT = 3333;

app.use(json);
app.use(route);

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
