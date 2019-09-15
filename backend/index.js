let express = require('express');

let app = express();
app.use(express.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

let data = new Map();

app.get('/read', (req, res) => {
	// req.send toma lo queremos mandar al front end.
	// read simplemente envia el array data.
	res.send([...data.values()]);
});


app.post('/assign', (req, res) => {
	// req.body contiene un array con el input
	req.body.forEach(item => {
		data.set(item.id, item)
	});

	// req.send toma lo queremos mandar al front end, en este caso nada.
	res.send();
});

// Hay pedidos (identificados por id) que ya estan en el array
// pero queremos cambiar algunos de sus valores.
// Update itera y actualiza estos valores
app.post('/update', (req, res) => {
	req.body.forEach(item => {
		if (data.has(item.id))
			Object.assign(data.get(item.id), item);
	});

	res.send();
});

app.post('/insert', (req, res) => {
	req.body.forEach(item => {
		if (!data.has(item.id))
			data.set(item.id, item)
	});

	res.send();
});


app.post('/delete', (req, res) => {
	req.body.forEach(item => {
		data.delete(item.id)
	});

	res.send();
});

app.post('/clear', (req, res) => {
	data.clear();
	res.send();
});


app.listen(8100, _ => {
	console.log("Server started.");
});
