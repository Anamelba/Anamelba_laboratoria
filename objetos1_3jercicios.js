// EJERCICIO 1 ***********************************************
function formulas()
{
  this.areaRectangulo = function(base, altura)
  {
    return base*altura;
  }
}
var f = new formulas();
return "El área del rectangulo de 3 x 7 es " + f.areaRectangulo(3, 7);
// PRUEBAS UNITARIAS - EJERCICIOS 1
var assert = require("assert");
describe("Prueba unitaria - ejercicio 1", function()
{
    it("Pruebas con 3 y 7, resultado 21", function()
    {
        assert.equal(21, formulas(3, 7));
    });
});
// EJERCICIO 2 **************************************************
function calcularEdad(nombre, diaNac, mesNac, anioNac){

	var obj=
        {
			nombre:nombre,
			diaNac:diaNac,
			mesNac:mesNac,
			anioNac:anioNac
        }
	var fecha_hoy = new Date();
	var ahora_anio = fecha_hoy.getFullYear();
	var ahora_mes = fecha_hoy.getMonth();
	var ahora_dia = fecha_hoy.getDate();
	var edad = ahora_anio - obj.anioNac;

	if (ahora_mes < (obj.Nac -1))
    {
		edad --;
    }
	if(((obj.mesNac - 1) == ahora_mes) && (ahora_dia < obj.diaNac))
    {
		edad --;
    }

	return "La edad actual de " + obj.nombre + " es: " + edad;
}
return calcularEdad("Lissette", 02, 05, 1994);
// PRUEBAS UNITARIAS - EJERCICIOS 2
var assert = require("assert");
describe("Prueba unitaria - ejercicio 2", function()
{
    it("Pruebas con nombre:Lissette, dia:02, mesNac:05, anioNac:1994, resultado La edad actual de Lissette es: 23", function()
    {
        assert.equal('La edad actual de aa es: 23', calcularEdad("Lissette", 02, 05, 1994));
    });
});
// EJERCICIO 3 ***************************************************
function people(nombre, edad, pasatiempo)
{
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
}
var p = new people("aa", 23, "voley");
return "Hola soy " + p.nombre + " tengo " + p.edad + " y me gusta " + p.pasatiempo;
// PRUEBAS UNITARIAS - EJERCICIOS 3
var assert = require("assert");
describe("Prueba unitaria - ejercicio 3", function()
{
    it("Pruebas con nombre:aa, edad:23, pasatiempo:voley, resultado Hola soy aa tengo 23 y me gusta voley", function()
    {
        assert.equal('Hola soy aa tengo 23 y me gusta voluey', people("aa", 23, "voley"));
    });
});
