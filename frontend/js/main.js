
let pedidos = null;
window.addEventListener("load", e => {
	pedidos = new ListaDePedidos(document.body);

	setInterval(() => {
		xhrGet("http://localhost:8100/read")
			.then(JSON.parse)
			.then(data =>
				data.forEach(datum =>
					pedidos.agregar(Pedido.fromObj(datum))));

	}, 2000);
});
