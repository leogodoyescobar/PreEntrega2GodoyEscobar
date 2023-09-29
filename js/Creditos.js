class cliente{
    constructor( nombre, dni, deuda){
        this.nombre = nombre;
        this.dni = dni;
        this.deuda = deuda;
    }    
}
// creacion lista de clientes predefinida//
let listaclientes = [];

listaclientes.push( new cliente("leonel", 33796058, 10000));
listaclientes.push( new cliente("pepe", 35886668, 5000));
listaclientes.push( new cliente("pipo", 36777888, 20000));
listaclientes.push( new cliente("cleto", 34666789, 0));


// funcion calculo intereses //
var inputnombre = document.getElementById("inputnombre");
var inputdni = document.getElementById("inputdni");
var inputmonto = document.getElementById("inputmonto");
var cuotas = document.getElementById("cuotas");

// cuotas.addEventListener("change", function () {
//     var valorcuotas = cuotas.value;
//     console.log(valorcuotas);
// });
function calculoDeCredito(){
    var inputmonto = document.getElementById("inputmonto");
    var resultadoSpan = document.getElementById("spandeuda");
    let monto = parseInt(inputmonto.value);
    let cuotas2 = parseInt(cuotas.value);

    if (cuotas2 == 1){
        var credito = monto * 1.1;     
        resultadoSpan.textContent = parseInt(credito);
        return credito
    }
    else if (cuotas2 == 3){
        var credito = monto * 1.2;
        resultadoSpan.textContent = parseInt(credito);
        return credito
    }
    else if (cuotas2 == 6){
        let credito = monto * 1.4;
        resultadoSpan.textContent = parseInt(credito);
        return credito
    }
    else if (cuotas2 == 9){
        let credito = monto * 1.6;
        resultadoSpan.textContent = parseInt(credito);
        return credito
    }
    else if (cuotas2 == 12){
        let credito = monto * 1.85;
        resultadoSpan.textContent = parseInt(credito);
        return credito     
    }
    else{
        console.log("seleccione cuotas");
    }
}
let btncalcular = document.getElementById("btncalcular");
btncalcular.addEventListener("click", calculoDeCredito)

// alta cliente nuevo
var btnsolicitar = document.getElementById("btnsolicitar");
var resultadoSpan = document.getElementById("spandeuda");
btnsolicitar.addEventListener("click", function () {
	nombre = inputnombre.value;
	dni = inputdni.value;
	deuda = resultadoSpan.textContent;
	let clientes = new cliente(nombre,dni,deuda);
    listaclientes.push(clientes);

    var listaclientesjson = JSON.stringify(listaclientes);
    localStorage.setItem("arrclientesjson", listaclientesjson);

	inputnombre.value ="";
	inputdni.value ="";
	inputmonto.value ="";
});

// funcion cargar listaclientes desde localstorage
function cargarlista(){

    

    var listaClientesUl = document.getElementById("lista-clientes");
    var arrclientesjsonrec = localStorage.getItem("arrclientesjson");
    var listaclientesrec = JSON.parse(arrclientesjsonrec);

    var element = document.getElementById("lista-clientes");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }

    listaclientesrec.forEach(function (cliente) {

        var li = document.createElement("li");
    
        li.textContent = `Nombre: ${cliente.nombre}, DNI: ${cliente.dni}, Deuda: ${cliente.deuda}`;
    
        listaClientesUl.appendChild(li);        
    });
}
let btncargarlista = document.getElementById("btncargarlista");
btncargarlista.addEventListener("click", cargarlista)



// funcion buscar dni //
// function buscardni(cliente){
// 	return cliente.dni == nuevodni
// }
