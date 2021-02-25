// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let nuevoArray = Object.keys(objeto).map((key) => [key, objeto[key]])
  return nuevoArray
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let nuevoObjeto = {}
  for (let i = 0; i < string.length; i++) {
    if (nuevoObjeto.hasOwnProperty(string[i])) {
      nuevoObjeto[string[i]] = nuevoObjeto[string[i]] + 1
    } else {
      nuevoObjeto[string[i]] = 1
    }
  }
  return nuevoObjeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let nuevoArray = s.split('')
  // console.log(nuevoArray)
  let otroArray = []
  let mayus = []
  nuevoArray.forEach((letra) => {
    if (letra !== letra.toUpperCase()) {
      otroArray.push(letra)
    } else {
      mayus.push(letra)
    }
  })
  mayus = mayus.join('')
  // console.log(mayus)
  otroArray.unshift(mayus)
  // console.log('mayus', mayus)
  // console.log('nuevoArray', nuevoArray)
  // console.log('otroArray', otroArray)
  
  return otroArray.join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function reverseChar(str) {
    let x = str.length
    let cadena = ''
    while (x>=0) {
      cadena = cadena + str.charAt(x)
      x--
    }
    return cadena
  }
  let nuevoArray = str.split(' ')
  // console.log('nuevoArray con split:', nuevoArray)
  nuevoArray.forEach((elemento, indice) => {
    nuevoArray[indice] = reverseChar(elemento)
    // console.log('indice con nueva funcion: ', nuevoArray[indice])
  })
  // nuevoArray.reverse()
  // console.log('nuevoArray con reverse:', nuevoArray)
  nuevoArray = nuevoArray.join(' ')
  // console.log('nuevoArray con join:', nuevoArray)
  return nuevoArray
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString()
  let inicio = 0
  let fin = numero.length - 1
  let flag = true
  // console.log(inicio)
  // console.log(fin)
  while (inicio < fin && flag) {
    // console.log('inicio ', inicio)
    // console.log('fin ', fin)
    if (numero[inicio] !== numero[fin]) {
      flag = false
    }
    inicio++
    fin--
  }
  return flag ? 'Es capicua' : 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevoArray = []
  cadena = cadena.split('')
  // console.log('cadena: ', cadena)
  cadena.forEach((letra) => {
    if (letra !== 'a' && letra !== 'b' && letra !== 'c') {
      nuevoArray.push(letra)
    }
  })
  return nuevoArray.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        let aux = arr[i]
        arr[i] = arr[j]
        arr[j] = aux
      }
    }
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let nuevoArray = []
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        console.log(nuevoArray)
        nuevoArray.push(arreglo1[i])
      }
    }
  }
  return nuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

