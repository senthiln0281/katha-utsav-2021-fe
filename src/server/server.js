const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 2500;

// Mapping the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);
const indexFile = /*(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'ci') ?*/ path.resolve(__dirname, 'index.html'); //: path.join(__dirname, 'public', 'index.html');

app.get('*', (req, res) => {
    res.render(__dirname+'/index.html');
  });

  const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`running in port ${port}`);
  });

module.exports = server;
