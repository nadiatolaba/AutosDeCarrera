rotulo1.innerHTML = "Ingrese la vuelta N°1";
rotulo2.innerHTML = "Ingrese la vuelta N°2";
rotulo3.innerHTML = "Ingrese la vuelta N°3";
rotulo4.innerHTML = "Ingrese la vuelta N°4";
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", () => {
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);
  let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  console.log("Tiempo total:", tiempoTotal);
  console.log("Tiempo promedio", tiempoTotal / 4);
});
