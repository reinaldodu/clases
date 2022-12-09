let edadesMayoresDeEdad = [];
let edadesMenoresDeEdad = [];
let sumaEdades = 0;
for (let i = 0; i < 10; i++) {
    let Edad = parseInt(prompt("Ingrese la edad" + (i + 1)));
    // No acepte edades mayores a 100
    if (Edad > 100) {
        alert("La edad no puede ser mayor a 100");
        i--;
        continue;
    }
    sumaEdades = sumaEdades + Edad;
    // sumaEdades += Edad; Es igual a la instruccion anterior
    if (Edad >= 18) {
        edadesMayoresDeEdad.push(Edad);
    } else {
        edadesMenoresDeEdad.push(Edad);
    }
}
// Concatenar los arreglos de edades
let edades = edadesMayoresDeEdad.concat(edadesMenoresDeEdad);
//ordenar de menor a mayor
edades.sort((a, b) => a - b);
//Arreglo de edades menores
console.log("Arreglo de edades menores: " + edadesMenoresDeEdad);
//Arreglo de edades mayores
console.log("Arreglo de edades mayores: " + edadesMayoresDeEdad);
//Arreglo de todas las edades
console.log("Arreglo de todas las edades: " + edades);
//La edad menor es
console.log("La edad menor es: " + edades[0]);
//La edad mayor es
console.log("La edad mayor es: " + edades[edades.length-1]);
//Promedio de edades
console.log("El promedio de edades es: " + sumaEdades/edades.length);
