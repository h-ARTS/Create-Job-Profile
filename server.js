var express = require('express'),
    app = express();

app.use(express.static('src'));

app.listen(4000, function() {
    console.log('Express listening on Port 4000...');
});