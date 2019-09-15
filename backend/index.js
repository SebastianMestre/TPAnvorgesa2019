let express = require('express');

let app = express();
app.use(express.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

let data = [];

app.get('/read', (req, res) => {
	// req.send toma lo queremos mandar al front end.
	// read simplemente envia el array data.
	res.send(data);
});


app.post('/assign', (req, res) => {
	// req.body contiene un array con el input
	for (let item of req.body) {
		data.push(item);
	}

	// req.send toma lo queremos mandar al front end, en este caso nada.
	res.send();
});

// Hay pedidos (identificados por id) que ya estan en el array
// pero queremos cambiar algunos de sus valores.
// Update itera y actualiza estos valores
app.post('/update', (req, res) => {
	res.send();
});

app.post('/insert', (req, res) => {
	res.send();
});


app.post('/delete', (req, res) => {
	let items = [...req.body];
	data = data.filter(datum =>
		items.every(item =>
			item.id !== datum.id));
	res.send();
});

app.post('/clear', (req, res) => {
	data = [];
	res.send();
});


app.listen(8100, _ => {
	console.log("Listening");
});
