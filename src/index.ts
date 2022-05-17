/* EJERCICIO - AUMENTO DE SUELDO.
Una empresa desea premiar a sus empleados con un aumento de sueldo.
Este aumento se ajusta a la siguiente tabla {}
Desarrolle  un algoritmo dado el salario actual de un empleado determine el aumento
de sueldo a aplicar y se lo muestre. */

let sueldo: number | any = Number(prompt("ingrese numero"));
let aumento1: number = (sueldo * 20) / 100;
let aumento2: number = (sueldo * 10) / 100;
let aumento3: number = (sueldo * 5) / 100;

let sueldoAumentado1 = sueldo + aumento1;
let sueldoAumentado2 = sueldo + aumento2;
let sueldoAumentado3 = sueldo + aumento3;

if (sueldo >= 1 && sueldo <= 15000) {
  console.log(
    " Su salario es:" + sueldo + "ars.",
    "Aumento del 20%:" + aumento1 + "ars.",
    "Sueldo total:" + sueldoAumentado1 + "ars"
  );
} else if (sueldo >= 15000 && sueldo <= 20000) {
  console.log(
    " Su salario es:" + sueldo + "ars.",
    "Aumento del 10%:" + aumento2 + "ars.",
    "Sueldo total:" + sueldoAumentado2 + "ars"
  );
} else if (sueldo >= 20001 && sueldo <= 25000) {
  console.log(
    " Su salario es:" + sueldo + "ars.",
    "Aumento del 5%:" + aumento3 + "ars.",
    "Sueldo total:" + sueldoAumentado3 + "ars"
  );
} else {
  console.log("su salario no tiene aumento");
}
