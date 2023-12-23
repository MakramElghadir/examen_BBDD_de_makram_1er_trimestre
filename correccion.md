## Teoria
5/12, sé que tienes buena base en algunos aspectos, pero en otros no. La teoría es importante, y es necesario que **detectes** tus puntos debiles y luego simplemente los repases. Cuanta mejor base tengas, mejor programarás.

## Práctica
La aplicación es demasiado básica, sé que sabes hacerlo mejor.

No has integrado ningún aspecto en relación con localStorage. Este es un punto clave del examen.

La interfaz puede ser mejorada en bastantes aspectos:

- Idealmente, la lista debe mostrarse verticalmente para aumentar su legibilidad. Si la dejas en vertical, debes añadir un espacio entre elementos, es confuso para el usuario leerlo asi.
- No dejar la fuente por defecto del navegador es básico.

## Documentacion

Un poco confusa, se que explicar código es difícil, y mas en un idioma diferente al tuyo, pero es importante desarrollar esta habilidad con el tiempo.

Aun así, todo el mundo habeis explicado demasiado, cuando simplemente podriais haber adjuntado algo de codigo:

```js
function sortear() {
  let random = Math.floor(Math.random() * participantes.length);
  document.getElementById("sorteo").innerHTML = participantes[random];
}
```

Y decir que funcion cumple en la página, no hace falta explicar tanto cuando ya tenemos código, solo referenciar que hace.

## Nota: 5.5