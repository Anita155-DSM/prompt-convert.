const dolar =1300 // (1 dolar va a ser equivalente a 1300 pesos) y va const porque es una variable que tiene que ser fija
let historial = []; // esto va a guardar cada intento de conversion en mi historial
let opcion
function convertirPesosADolares (pesos){
    return pesos/dolar
}
do {
    opcion = prompt('Menú: 1.Divisa (de pesos a dolares) 2.Salir');
    if (opcion==='1'){
      let divisa =  prompt('¿Cuántos pesos vas a convertir?');
      let pesos = parseFloat(divisa);
      if (!isNaN (pesos)) {
      let resultado = convertirPesosADolares(pesos);
      alert(`Resultado: ${resultado.toFixed(2)} USD`);
      
      let operacion = {
                tipo: "divisa",
        entrada: `${pesos} ARS`,
        salida: `${resultado.toFixed(2)} USD`,
        fecha: new Date().toLocaleString()
      };

      historial.push (operacion);
    } 
  }
}while (opcion !== "2");

