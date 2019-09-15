
const mostrar = (data, elemento) => {
	elemento.innerHTML = data;
}

function registrarFormulario (elemento, callback) {
	const campos = [
		"id-input",
		"text-input",
		"status-input",
	]
		.map(className => elemento.getElementsByClassName(className)[0]);

	elemento
		.getElementsByClassName("submit-button")[0]
		.addEventListener("click", ev => {
			const valores = campos
				.map(element => element ? element.value : "");

			callback(ev, valores[0], valores[1], valores[2]);
		});
}

window.addEventListener("load", e => {
	const elementoDisplay = document.getElementById("display");
	const formularios = [
		"delete-controller",
		"update-controller",
		"assign-controller",
		"clear-controller",
	].map(id => document.getElementById(id));

	registrarFormulario(formularios[0], (ev, id, text, status) => {
		if(id == "") return;
		const args = [{
			id: Number(id),
		}];

		xhrPost("http://localhost:8100/delete", args);
	});

	registrarFormulario(formularios[1], (ev, id, text, status) => {
		if(id == "") return;
		const args =[{
			id: Number(id),
			texto: (text == "" ? undefined : text),
			estado: (status == "" ? undefined : status),
		}];

		xhrPost("http://localhost:8100/update", args);
	});

	registrarFormulario(formularios[2], (ev, id, text, status) => {
		if(id == "") return;
		const args = [{
			id: Number(id),
			texto: (text == "" ? undefined : text),
			estado: (status == "" ? undefined : status),
		}];

		xhrPost("http://localhost:8100/assign", args)
			.then(_ => console.log("done"));
	});

	registrarFormulario(formularios[3], (ev, id, text, status) => {
		// TODO: Pedir confirmacion
		const args = {
		};
		xhrPost("http://localhost:8100/clear", args);
	});

	setInterval(() => {
		xhrGet("http://localhost:8100/read")
			.then(data => mostrar(data, elementoDisplay));
	}, 1000);
});
