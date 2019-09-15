class Pedido {
	constructor (numero, texto, estado) {
		this.numero = numero;
		this.texto = texto;
		this.estado = estado;
		this.elemento = textoAElementoHTML(this.outerHTML());
	}
	
	marcarParaRetirar () {
		this.estado = "resaltado";
		this.updateRender();
	}

	borrar () {
		this.estado = "borrando";
		this.updateRender();
		setTimeout(_ => {
			this.elemento.remove();
		}, 990);
	}

	updateRender () {
		this.elemento.innerHTML = this.innerHTML();
		this.elemento.classList.value = this.clases().join(' ');
	}

	asignar (props) {
		console.log(props);
		console.log(this);
		if (props.texto !== undefined) this.texto = props.texto;
		if (props.estado !== undefined) this.estado = props.estado;
		this.updateRender();
	}

	clases () {
		switch (this.estado) {
			case "borrando": return ["orden", "borrando"];
			case "resaltado": return ["orden", "resaltado"];
			default: return ["orden"];
		}
	}


	innerHTML () {
		return `
<img src="comida.png" alt="icono de comida">
<div class="numero-de-orden">#${this.numero}</div>
<div class="estado-de-orden">${this.texto}</div>`;
	}

	outerHTML () {
		return `
<div class="${this.clases().join(" ")}">
${this.innerHTML()}
</div>`;
	}

	static fromObj (obj) {
		return new Pedido(obj.id, obj.texto, obj.estado);
	}
}
