let express = require('express');

let app = express();

app.get('/read', (req, res) => {
	res.send('[]');
});

app.post('/delete', (a, b) => {

});

app.post('/assign', (a, b) => {

});

app.post('/update', (a, b) => {

});

app.post('/insert', (a, b) => {

});

app.listen(8100, _ => {
	console.log("Listening");
});
