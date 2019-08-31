const textoAElementoHTML = texto => {
	let template = document.createElement('template');
	template.innerHTML = texto.trim();
	return template.content.firstChild;
};

class ListaDePedidos {
	constructor (elementoContenedor) {
		this.pedidos = new Map();
		this.elementoContenedor = elementoContenedor;
	}

	agregar (pedido) {
		let numeroDePedido = pedido.numero;

		if(this.pedidos.has(numeroDePedido))
			this.borrar(numeroDePedido);

		this.pedidos.set(numeroDePedido, pedido);

		this.elementoContenedor.appendChild(pedido.elemento);
	}

	borrar (numeroDePedido) {
		if (!this.pedidos.has(numeroDePedido))
			return;

		this.pedidos.get(numeroDePedido).elemento.remove();

		this.pedidos.delete(numeroDePedido);
	}
}

class Pedido {
	constructor (numero, estado) {
		this.numero = numero;
		this.estado = estado;

		this.elemento = this.render();
	}
	
	resaltar () {
		this.elemento.classList.add("resaltado")
	}

	borrar () {
		this.elemento.classList.add("borrando");
		setTimeout(_ => {
			this.elemento.remove();
		}, 990);
	}

	render () {
		return textoAElementoHTML(this.html());
	}

	html () {
		return "" +
`<div class="orden">
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
