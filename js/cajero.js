class Billete{ //creamos la clase billete, con valor y cantidad
  constructor(v, c){ //con contructor construimos nuestra clase/objeto
      this.valor = v;
      this.cantidad = c;
  }
}

function entregarDinero(){
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja){ //esto hace que tomar todos los elemoentos e ir uno por uno 
    if(dinero > 0){ //nuestro if va a comparar si el dinero que se quiere es mayor que 0 para empezar 
      div = Math.floor(dinero / bi.valor); //guardaremos en div la formula la cual divide nuestro dinero/los valores de los billetes y lo redondea hacia  abajo
      if(div > bi.cantidad){ //si es mayo que la cantidad
        papeles = bi.cantidad; 
      }
      else{
        papeles = div; 
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 0){
    resultado.innerHTML = "No puedo darte esa cantidad"; //innerHTML es la forma correcta de poner cosas en pantalla
  }
  else{
    for(var e of entregado){
      if(e.cantidad > 0){
        resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}

var caja = []; //creamos la array caja
var entregado = [];  //coleccion de "billetes" lo cuales entregamos
caja.push(new Billete(100, 15) ); //aqui creamos los billetes o insertar
caja.push(new Billete(50, 20) );
caja.push(new Billete(20, 5) );
caja.push(new Billete(10, 10) );
caja.push(new Billete(5, 5) );

var dinero = 0; //la cantidad de billetes
var div = 0; //resultado de divicion comenzada en 0
var papeles = 0; //tambien comienza en 0 

var resultado = document.getElementById("resultado"); //el valor que tenemos en la caja lo traemos a java

var b = document.getElementById("extraer"); //botton
b.addEventListener("click", entregarDinero); //escuchador de click para accionar la funcion entregar dinero
