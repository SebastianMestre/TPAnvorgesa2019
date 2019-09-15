
let pedidos = null;

window.addEventListener("load", e => {
	pedidos = new ListaDePedidos(document.body);

	setInterval(() => {
		xhrGet("http://localhost:8100/read")
			.then(JSON.parse)
			.then(data => pedidos.asignar(data));
	}, 10000);
});
