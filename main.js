const express = require('express')

process.argv.forEach(function (val, index) {
    if (index >= 2) {
        var app = express();
        app.get('/', (req, res) => res.send('Reporting from port ' + val + '!'))
        app.listen(val, () => console.log('Example app listening on port ' + val + '!'))
    }
});
