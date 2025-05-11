const dolar =1300 // (1 dolar va a ser equivalente a 1300 pesos) y va const porque es una variable que tiene que ser fija
let historial = []; // esto va a guardar cada intento de conversion en mi historial
let opcion
function convertirPesosADolares (pesos){  
    return pesos/dolar
}
do { //aqui inicia el bucle
    opcion = prompt('Menú: 1.Divisa (de pesos a dolares) 2.Salir'); //menu 
    if (opcion==='1'){ 
      let divisa =  prompt('¿Cuántos pesos vas a convertir?');
      let pesos = parseFloat(divisa);
      if (!isNaN (pesos)) { //esto verifica si la entrada es un numero valido
      let resultado = convertirPesosADolares(pesos);
      alert(`Resultado: ${resultado.toFixed(2)} usd`); //muestra resultado
      
      let operacion = { //creacion de objeto 
        tipo: "divisa",
        entrada: `${pesos} ars`,
        salida: `${resultado.toFixed(2)} usd`,
        fecha: new Date().toLocaleString()
      };

      historial.push (operacion); //operacion guardada en el historial
    } else {
      alert ("no es un numero valido");
    }
  }
}while (opcion !== "2"); //se repite hasta q elija la opcion 2

console.log("historial de movimientos");
console.log(historial);

