const lista1 = [
    1,2,3,4,5,1,3,5,6,7,3,2,3,4,2,1,5,6,8,8,5,2,4,5,9,6,7,1,2,2,4,,8,8,9,1,1,3,2,2,3,21,21,
];

const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] = lista1Count[elemento] + 1;
        }
        else{
            lista1Count[elemento] = 1;   
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
);
  
const moda = lista1Array[lista1Array.length - 1];