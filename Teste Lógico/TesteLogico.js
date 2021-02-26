//  1) Implemente um método que crie um novo array baseado nos valores passados.
//  Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

export const generatorArray = (valor, caract) => {
  const newArray = [];
  for (let index = 0; index < valor; index++) {
    newArray.push(caract);
  }

  return newArray;
};

//  2) Implemente um método que inverta um array, não utilize métodos nativos do array.
//  Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

export const reverseArray = (array) => {
  const newArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }

  return newArray;
};

//  3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
//  Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

export const cleanArray = (array) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (
      array[index] !== false &&
      array[index] !== undefined &&
      array[index] !== '' &&
      array[index] !== 0 &&
      array[index] !== null
    )
      newArray.push(array[index]);
  }

  return newArray;
};

//  4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
//  Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

export const transformArray = (array) => {
  const newObject = new Object();

  array.forEach(item => {
    newObject[item[0]] = item[1];
  });

  return newObject;
};

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]//

export const removeItensArray = (array, valor) => {
  const newArray = [];

  array.forEach(item => {
    if (item !== valor) {
      newArray.push(item);
    }
  });

  return newArray;
};

//  6) Implemente um método que retorne um array, sem valores duplicados.
//  Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

export const removeDuplicatesArray = (array) => {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    for (let index2 = index + 1; index2 < array.length; index2++) {
      if(array[index] === array[index2])
        array[index2] = null
    }
  }

  for (let index = 0; index < array.length; index++) {
    if(array[index] !== null)
      newArray.push(array[index])
  }

  return newArray;
};

//  7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
//  Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

export const compareEqualityArray = (array1, array2) => {
  if(array1.length !== array2.length)
    return false

  for (let index = 0; index < array1.length; index++) {
    if(array1[index] !== array2[index])
      return false
  }

  return true;
};

//  8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
//  Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

export const removeArrayOfArray = (array) => {
  const newArray = [];

  array.forEach(item => {
    if(typeof item === 'object')
      item.forEach(itemOfItem => {
        newArray.push(itemOfItem)
      })
    else
      newArray.push(item)
  })

  return newArray;
};

//  9) Implemente um método divida um array por uma quantidade passada por parâmetro.
//  Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

export const shareArray = (array, valor) => {
  const newArray = [];

  for (let index = 0; index < array.length; index += valor) {
    const temp = [];

    for (let index2 = index; index2 < valor + index && index2 < array.length; index2++) {
      temp.push(array[index2]);
    }

    newArray.push(temp)
  }

  return newArray;
};

//  10) Implemente um método que encontre os valores comuns entre dois arrays.
//  Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

const searcherEqualityValues = (array1, array2) => {
  const newArray = [];

  for (let index = 0; index < array1.length; index++) {
    let temp;
    for (let index2 =  0; index2 < array2.length; index2++) {
      if(array1[index] === array2[index2]){
        temp = array1[index]
       }
    }

    if(!!temp)
      newArray.push(temp)
  }

  return newArray;
};

// ps: Esses exercícios são de senso comum da comunidade desenvolvimento, utilize o melhor padrão para implementação, criando uma semântica factível.
