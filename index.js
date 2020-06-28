const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sentiment = require('sentiment')

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    if (!req.headers.text) return res.json({message: "Please Enter something in the \'text\' header"})
    const sentiment = new Sentiment();
    const data = sentiment.analyze(req.headers.text);
    const result = {
        calculation: data.calculation,
        positive: data.positive,
        negative: data.negative
    }
    res.json({
        result
    })
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.