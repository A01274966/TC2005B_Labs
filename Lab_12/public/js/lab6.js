function validarContrasena() {
    let p1 = document.getElementById("pwd1").value;
    let p2 = document.getElementById("pwd2").value;

    let espacios = false;
    let numeros = false;
    let cont = 0;

    while (!espacios && (cont < p1.length)) {
    if (p1.charAt(cont) == " ")
        espacios = true;
    cont++;
    }
    
    for(let i = 0; i < p1.length; i++){
        if(!isNaN(p1[i]*1)){
            numeros = true;
        }
    }

    if (espacios) {
    alert ("La contraseña no puede contener espacios en blanco");
    return false;
    }

    if (p1.length == 0 || p2.length == 0) {
    alert("Los campos no pueden quedar vacios");
    return false;
    }

    if (p1.length < 6) {
    alert("La contraseña debe tener por lo menos 6 caracteres");
    return false;
    }

    if(!numeros){
        alert("La contraseña debe contener por lo menos un numero");
        return false
    }

    if (p1 != p2) {
    alert("Las contraseñas no coinciden");
    return false;
    } else {
    alert("Contraseña validada");
    return true; 
    }
}

function addCommas(nStr){
 nStr += '';
 var x = nStr.split('.');
 var x1 = x[0];
 var x2 = x.length > 1 ? '.' + x[1] : '';
 var rgx = /(\d+)(\d{3})/;
 while (rgx.test(x1)) {
  x1 = x1.replace(rgx, '$1' + ',' + '$2');
 }
 return x1 + x2;
}

function ventaProductos(){
    const iva = 0.16;
    let total;

    const precioVac = 999999;
    const precioChe = 20;
    const precioMon = 100;
    
    let cantVac = document.getElementById("vacuna").value;
    let cantChe = document.getElementById("cheto").value;
    let cantMon = document.getElementById("moneda").value

    document.write("<h2>Lista de productos</h2>")
    total = ((precioVac*cantVac+precioChe*cantChe+precioMon*cantMon)*iva);
    total = (total + (precioVac*cantVac+precioChe*cantChe+precioMon*cantMon));

    document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A01274966_Lab6</title>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
    crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/style.css" />
    </head><body class= "container">`);

    if(cantVac>0){
        document.write("<br><strong>Vacuna contra COVID-19 marca Pfizer: </strong>"+ cantVac);
    }
    if(cantChe>0){
        document.write("<br><strong>Cheto (Indiviual): </strong>"+ cantChe);
    }
    if(cantMon>0){
        document.write("<br><strong>Moneda de 10 pesos brillosa: </strong>"+ cantMon);
    }

    document.write("<br><br><strong>Total: </strong>"+ "$"+addCommas(total)+ " MXN");

    document.write('<br><br><button id="regresar" class="btn btn-dark"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};

    document.write('</body>')

}

function reWrite(){
    // Re-write the webpage
    window.location.reload(true);
}