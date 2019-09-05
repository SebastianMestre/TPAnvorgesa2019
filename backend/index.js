let express = require('express');

let app = express();
app.use(express.json());

let data = [];

app.get('/read', (req, res) => {
	res.send(data);
});


app.post('/assign', (req, res) => {
	for (let item of req.body) {
		data.push(item);
	}
	res.send();
});

app.post('/update', (req, res) => {

});

app.post('/insert', (req, res) => {

});


app.post('/delete', (req, res) => {
	data = data.filter(datum =>
		req.body.none(item =>
			item.id === datum.id));
});

app.post('/clear', (req, res) => {

});


app.listen(8100, _ => {
	console.log("Listening");
});
