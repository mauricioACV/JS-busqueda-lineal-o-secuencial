console.clear();

// **********************************************************
// **********************************************************
// Búsqueda lineal o secuencial
// **********************************************************
// **********************************************************

// Este algoritmo funciona iterando secuencialmente a través de toda
// la matriz o lista desde un extremo hasta que se encuentra el elemento
// de destino.Si se encuentra el elemento, devuelve su índice,
// de lo contrario - 1.

const arrExample = [2, 12, 15, 11, 7, 19, 45];

// Supongamos que el elemento objetivo que queremos buscar es   7.

// Enfoque para búsqueda lineal o secuencial
// 1.- Comience con el índice 0 y compare cada elemento con el objetivo
// 2.- Si se encuentra que el destino es igual al elemento, devuelve su índice
// 3.- Si no se encuentra el objetivo, devuelve -1

const target = 7;

function searchTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("indice target: ", searchTarget(arrExample, target));

// *********** Análisis de la complejidad del tiempo *****************
// El mejor caso ocurre cuando el elemento de destino es el primer elemento
// de la matriz. El número de comparaciones, en este caso, es 1. Entonces,
// la complejidad del tiempo es O(1).

// El caso promedio: en promedio, el elemento de destino estará en algún
// lugar en el medio de la matriz. El número de comparaciones,
// en este caso, será N/2. Entonces, la complejidad del tiempo será O(N)
// (se ignora la constante).

// El peor de los casos ocurre cuando el elemento de destino es el último
// elemento de la matriz o no está en la matriz. En este caso, tenemos que
// recorrer toda la matriz, por lo que el número de comparaciones será N.
// Por lo tanto, la complejidad del tiempo será O(N).
