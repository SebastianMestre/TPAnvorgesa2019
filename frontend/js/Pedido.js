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
