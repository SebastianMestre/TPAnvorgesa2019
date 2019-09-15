class ListaDePedidos {
	constructor (elementoContenedor) {
		this.pedidos = new Map();
		this.elementoContenedor = elementoContenedor;
	}

	agregar (pedido) {
		let numeroDePedido = pedido.numero;

		if(this.pedidos.has(numeroDePedido))
			return;

		this.pedidos.set(numeroDePedido, pedido);

		this.elementoContenedor.appendChild(pedido.elemento);
	}

	marcarParaRetirar (numeroDePedido) {
		if (!this.pedidos.has(numeroDePedido))
			return;

		this.pedidos.get(numeroDePedido).marcarParaRetirar();
	}

	borrar (numeroDePedido) {
		if (!this.pedidos.has(numeroDePedido))
			return;

		this.pedidos.get(numeroDePedido).borrar();

		this.pedidos.delete(numeroDePedido);
	}

	asignar (pedidos) {
		let mapaInput = new Map();

		pedidos
			.map(Pedido.fromObj)
			.forEach(pedido => mapaInput.set(pedido.numero, pedido));

		for (let numeroInput of mapaInput.keys()) {
			let pedidoInput = mapaInput.get(numeroInput);
			if (!this.pedidos.has(numeroInput)){
				this.agregar(pedidoInput);
			} else {
				console.log("asignando");
				let pedido = this.pedidos.get(numeroInput);
				pedido.asignar({
					texto: pedidoInput.texto,
					estado: pedidoInput.estado
				});
			}
		}

		for (let numeroGuardado of this.pedidos.keys()) {
			if(!mapaInput.has(numeroGuardado)){
				this.borrar(numeroGuardado);
			}
		}
	}
}
