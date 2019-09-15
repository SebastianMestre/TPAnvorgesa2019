
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
	req.open("GET", address, true);
	req.addEventListener("load", _ => {
		if (req.status === 200) resolve(req.responseText);
		else                    reject(req.responseText);
	});
	req.send();
});

const xhrPost = (address, args) => new Promise((resolve, reject) => { 
	const req = new XMLHttpRequest();
	req.open("POST", address, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.addEventListener("load", _ => {
		if (req.status === 200) resolve(req.responseText);
		else                    reject(req.responseText);
	});
	req.send(JSON.stringify(args));
});
