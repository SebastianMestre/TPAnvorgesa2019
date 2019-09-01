
const textoAElementoHTML = texto => {
	let template = document.createElement('template');
	template.innerHTML = texto.trim();
	return template.content.firstChild;
};

const delay = (time) => {
	return new Promise((success, reject) => {
		setTimeout(success, time);
	});
}
