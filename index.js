const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const port = 3000
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/auth/', (req, res) => {
    const options = {
        method: 'GET',
        url: "https://www.googleapis.com/books/v1/volumes?q=isbn:" + req.body.number,
        json: true,
    };
    request(options, function(error, response, body) {
        console.log(body.items[0].volumeInfo.title);
        res.send(body);
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

