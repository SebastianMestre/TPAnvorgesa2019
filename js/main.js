
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

class Pedido {
	constructor (numero, estado) {
		this.numero = numero;
		this.estado = estado;
		this.elemento = textoAElementoHTML(this.html());
	}
	
	marcarParaRetirar () {
		this.estado = "Retirar";
		this.elemento.children[2].innerHTML = this.estado;
		this.elemento.classList.add("resaltado");
	}

	borrar () {
		this.elemento.classList.add("borrando");
		setTimeout(_ => {
			this.elemento.remove();
		}, 990);
	}

	html () {
		return `
<div class="orden">
    <img src="comida.png" alt="icono de comida">
    <div class="numero-de-orden">#${this.numero}</div>
    <div class="estado-de-orden">${this.estado}</div>
</div>`;
	}
}


let pedidos = null;
window.addEventListener("load", e => {
	pedidos = new ListaDePedidos(document.body);
});
