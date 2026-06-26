# Calculando el Total

Proyecto realizado para el desafio **Calculando el total**, donde se implementa una tarjeta de producto interactiva usando HTML, CSS y JavaScript.

## Deploy

Puedes ver el proyecto publicado aqui:

[Ver sitio web](https://cadina-sandy.github.io/D1-calculadora-js/)

## Descripcion

La aplicacion muestra una tarjeta de producto de un peluche de osito. El usuario puede aumentar o disminuir la cantidad de productos usando los botones `+` y `-`, y el total a pagar se actualiza automaticamente segun el precio base del producto.

El precio base del producto es de `$5990`.

## Funcionalidades

- Mostrar el precio base del producto.
- Mostrar la cantidad seleccionada.
- Aumentar la cantidad con el boton `+`.
- Disminuir la cantidad con el boton `-`.
- Calcular el total a pagar segun la cantidad seleccionada.
- Evitar que la cantidad baje de `0`.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estructura del proyecto

```text
D1-Calculando-total/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── osito-peluche.png
└── README.md
```

## Como funciona

En JavaScript se utilizan `querySelector()` para seleccionar elementos del DOM, `innerHTML()` para mostrar los valores en pantalla y eventos `onclick` para ejecutar las acciones de los botones.

Cada vez que cambia la cantidad, el total se calcula multiplicando:

```js
precioBase * cantidad
```

## Repositorio

[Ver repositorio en GitHub](https://github.com/cadina-sandy/D1-calculadora-js)
