
const textoAElementoHTML = texto => {
	let template = document.createElement('template');
	template.innerHTML = texto.trim();
	return template.content.firstChild;
};

const delay = time => {
	return new Promise((success, reject) => {
		setTimeout(success, time);
	});
};

const xhrGet = address => new Promise((resolve, reject) => { 
	const req = new XMLHttpRequest();
	req.addEventListener("load", _ => {
		if (req.status === 200) resolve(req.responseText);
		else                    reject(req.responseText);
	});
	req.open("GET", address);
	req.send()
});
