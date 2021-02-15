let doc = document.querySelector("html");

function cuadrados_cubos(){
    document.write("<h2>Cuadrados y Cubos</h2>")

    const numero = window.prompt("Inserte un numero");
    let cuadrado;
    let cubo;
	
    for(let i = 0; i <= numero; i++){
        cuadrado = i * i;
        cubo = cuadrado * i;
        document.write("<br><tr><td> " + i + "</td><td> " + cuadrado + "</td><td> " + cubo + "</td></tr>");
    }

    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

function suma_aleatoria(){
    document.write("<h2>Suma Aleatoria</h2>")
     
    let start = Date.now();

    const num_rand1 = Math.floor(Math.random()*(100+1))
    const num_rand2 = Math.floor(Math.random()*(100+1))

    const numero = window.prompt("¿Cual es el resultado de la suma entre "+ num_rand1 + " y " + num_rand2);
    
    let suma = num_rand1 + num_rand2;

    if(numero == suma){
        let end = Date.now();
        document.write("Respuesta correcta<br>"+ "Tardaste "+ ((end - start)/1000)+ " segundos");
    }
    else{
        let end = Date.now();

        document.write("Respuesta incorrecta<br>"+ "Tardaste "+ ((end - start)/1000)+ " segundos");
    }

    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

function contador(){
    document.write("<h2>Contador</h2>")

    const arreglo = [12, 43, 0, -74, 23, 0, -1, -121, 9, 94, 14, -69];

    let ceros=0;
    let positivos=0;
    let negativos=0;

    document.write("Arreglo: "+arreglo.join(", "));

    for(let i=0; i<arreglo.length; i++){

        if(arreglo[i] == 0){
            ceros++;
        }
        else if(arreglo[i] < 0){
            negativos++;
        }
        else{
            positivos++;
        }
    }
    document.write("<br><br> La cantidad de nuemeros postivios en el agrreglo son: "+ positivos+"<br>La cantidad de nuemeros negativos en el agrreglo son: "+ negativos+ "<br>La cantidad de ceros en el arreglo son: "+ ceros);

    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

function promedios(){
    document.write("<h2>Promedio de Numeros</h2>")

    const arreglo = [[14, 302, 47], [102, 5, 0], [78, 23, 234]];

    document.write("Arreglo: <br><br>");
    document.write( arreglo.join('<br>'));

    let suma = [0,0,0];
    let promedio = [];

    for (let i = 0; i < arreglo.length; i++){
        for (let j = 0; j < arreglo.length;j++){
            suma[i]= suma[i] + arreglo[i][j];
        }
    } 
    
    for(let i = 0; i < arreglo.length; i++){
        promedio.push(Math.round(((suma[i]/arreglo.length) + Number.EPSILON) * 100) / 100 );
    }

    document.write("<br><br>El promedio de los renglones es: "+promedio.join(", "));

    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

function inverso(){
    document.write("<h2>Numero Inverso</h2>")

    const numero = 1782946;
    document.write("El numero original es: "+ numero);

    const inverso = (numero) => parseInt(String(numero).split("").reverse().join(""), 10);
    document.write("<br><br>El numero invertido es: "+inverso(numero));
    
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}
    
function fraccion(nuevo_numerador, nuevo_denominador) {
    this.numerador = nuevo_numerador;
    this.denominador = nuevo_denominador;
    this.imprimir = imprimir_fraccion;
}

function imprimir_fraccion() {
    document.write(this.numerador, " / ", this.denominador, "<br>");
}

function sumar_fracciones(fracciona, fraccionb) {
    document.write("<h2>Suma de Fracciones</h2>")

    let numeradorc;
    let denominadorc;

    fraccionb = new fraccion(9, 2);
    fracciona = new fraccion(5, 6);

    numeradorc = fracciona.numerador*fraccionb.denominador+fraccionb.numerador*fracciona.denominador;
    denominadorc = fracciona.denominador*fraccionb.denominador;

    fraccionc = new fraccion(numeradorc, denominadorc);

    document.write("La fraccion a es: ");
    fracciona.imprimir();
    document.write("La fraccion b es: ");
    fraccionb.imprimir();
    document.write("<br> El resultado de la suma de fracciones es: ")
    fraccionc.imprimir();
    
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

function reWrite(){
    // Re-write the webpage
    window.location.reload(true);
}


