let edadesMayoresDeEdad = [];
let edadesMenoreDeEdad = [];
let sumaEdades = 0;
for (let i = 0; i < 10; i++) {
    let Edad = parseInt(prompt("Ingrese la edad" + (i + 1)));
    // No acepte edades mayores a 100
    if (Edad > 100) {
        alert("La edad no puede ser mayor a 100");
        i--;
        continue;
    }
    if (Edad >= 18) {
        edadesMayoresDeEdad.push(Edad);
    } else {
        edadesMenoreDeEdad.push(Edad);
    }
}
//ordenar de menor a mayor
edadesMayoresDeEdad.sort((a, b) => a - b);
edadesMenoreDeEdad.sort((a, b) => a - b);
console.log(edadesMayoresDeEdad);
console.log(edadesMenoreDeEdad);
// console.log("La edad menor es: " + edades[0]);
// console.log("La edad mayor es: " + edades[9]);
// console.log("El promedio de las edades es: " + sumaEdades / 10);



