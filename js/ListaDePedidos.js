class ListaDePedidos {
	constructor (elementoContenedor) {
		this.pedidos = new Map();
		this.elementoContenedor = elementoContenedor;
	}

	agregar (pedido) {
		let numeroDePedido = pedido.numero;

		// FIXME:
		// Si es otro objeto Pedido con el mismo numero mantiene el nuevo
		// Si es el mismo objeto Pedido se rompe (lo borra)
		if(this.pedidos.has(numeroDePedido))
			this.borrar(numeroDePedido);

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
}