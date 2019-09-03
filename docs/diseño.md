# Documento De Diseño

## Operaciones Del Back-End

Las operaciones son las siguientes (en notacion de Typescript):

```typescript
type Pedido = {
	id : number,
	texto : string,
	estado : "normal" | "resaltado",
}

type Error = {
	id : number,
	texto : string, // error para mostrar al usuario
	tipo : string, // legible por maquina
}

Leer () : Array<Pedido>;
Asignar ( datos : Array<Pedido> ) : Array<Error>;
Insertar ( datos : Array<Pedido> ) : Array<Error>;
Actualizar ( datos : Array<Pedido> ) : Array<Error>;
Borrar ( ids : Array<{ id : number }> ) : Array<Error>;
Vaciar () : void;
```

### Leer
Devuelve un array con los pedidos que existen al momento de la consulta.

### Asignar
Toma un array con pedidos que se quieren tener. Estos se guardan para posterior
consulta.

Sobreescribe los pedidos que ya existen, y crea los que no.

### Insertar
Toma un array con pedidos que se quieren agregar. Estos se guardan para
posterior consulta.

No logra insertar todos los pedidos con ids que ya estan presentes.

### Actualizar
Toma un array con pedidos que se quieren actualizar. Estos se modifican los
valores guardados para posterior consulta.

No logra modificar todos los pedidos con ids que ya estan presentes.

### Borrar
Toma un array de objetos que envuelven un id. Borra todos los elementos cuyo id
esta presente en el array.

No logra borrar los elementos que no existen.

--------

Las operaciones que pueden fallar devuelven un array con errores describiendo
cuales operaciones fallaron (id) y la razon de esto (texto, tipo).

## Implementacion

TODO
