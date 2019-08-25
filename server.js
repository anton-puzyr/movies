const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/movies', (req, res) =>
  res.send([{ id: 1, name: 'First movie' }, { id: 2, name: 'Second movie' }]),
);

app.listen(port, () => console.log(`Listening on port ${port}`));
