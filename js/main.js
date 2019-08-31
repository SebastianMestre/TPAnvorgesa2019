

const renderizarPedido = (numero, estado) =>
`<div class="orden">
    <img src="comida.png" alt="icono de comida">
    <div class="numero-de-orden">#${numero}</div>
    <div class="estado-de-orden">${estado}</div>
</div>`;

const agregarPedido = (numero, estado) => {
    document.body.innerHTML += renderizarPedido(numero, estado);
};

/*

window.addEventListener("load", e => {
    // TODO: agregar setInterval que lea del servidor
});

*/