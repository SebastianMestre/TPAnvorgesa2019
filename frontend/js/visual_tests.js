const test1 = async () => {
	let p1 = new Pedido(1, "Cocinando");
	let p2 = new Pedido(2, "Cocinando");

	pedidos.agregar(p1);

	await delay(100);
	pedidos.agregar(p2);

	await delay(1000);
	pedidos.marcarParaRetirar(2);

	await delay(1000);
	pedidos.marcarParaRetirar(1);

	await delay(1000);
	pedidos.borrar(1);

	await delay(1000);
	pedidos.borrar(2);
};
