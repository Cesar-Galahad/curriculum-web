//Codigo del cuadrado--------------------------------------------------------

console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Funciones para calcular el area/perimetro Cuadrado-------------------------------------
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area); 
}
//Codigo del triangulo----------------------------------------------------------

console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

//Funciones para calcular el area/perimetro Triangulo-------------------------------------
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("ladoTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("ladoTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("baseTriangulo");
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("baseTriangulo");
    const value =  parseInt(input1.value);
    const input2 = document.getElementById("alturaTriangulo");
    const value2 = parseInt(input2.value);

    const area = areaTriangulo(value, value2);
    alert(area); 
}

//Funciones para calcular la altura de un triangulo isoceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

//Codigo del Circulo------------------------------------------------------------

console.group("Circulos");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//Pi
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Funciones para calcular el area/perimetro Circulo-------------------------------------
function calcularPerimetroCirculo(){
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area); 
}
