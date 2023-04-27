const express = require('express')
const cors = require('cors');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000


app.use(cors());

app.get('/', (req, res) => res.send('Hello World! V2'))
app.listen(port);