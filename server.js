const express = require('express');
const app = express();
app.use('/:id' ,express.static('./public'));

app.listen(5000, () => console.log('Proxy server listening on port 5000!'));