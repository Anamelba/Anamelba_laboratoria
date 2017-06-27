// EJERCICIO 1 ***************************************
var arr=[4,4,5,12];
var multiplicacion=arr.reduce(function(resultado,num)
{
  return resultado*num;
},9);
return multiplicacion;
// PRUEBAS UNITARIAS - EJERCICIOS 1
var assert = require("assert");
describe("Prueba unitaria - ejercicio 1", function()
{
    it("Pruebas con [4,4,5,12], resultado 8640", function()
    {
        assert.equal(8640, multiplicacion([4, 4, 5, 12], 9));
    });
});
// EJERCICIO 2 ***************************************
var cellNumber = [784123123, 355676784, 342354354]
var cell= cellNumber.filter(filterCell)
function filterCell(element, index, cellNumber)
{
  var firstChar = element.toString().substr(0,3);
  var lastChar = element.toString().substr(6,9);

  if(firstChar == "784" || lastChar == "784")
    {
      return element;
    }
}
// PRUEBAS UNITARIAS - EJERCICIOS 2
var assert = require("assert");
describe("Prueba unitaria - ejercicio 2", function()
{
    it("Pruebas con [784123123, 355676784, 342354354], resultado: 784123123, 355676784", function()
    {
        assert.equal(784123123, 355676784, filterCell([784123123, 355676784, 342354354]));
    });
});
// EJERCICIO 3 ***************************************
var arr = [7,14,44,80,77,35];
var multiplos = arr.forEach(eachMult);
function eachMult(element, index, cellNumber)
{
  var x = 7;
  if(element%x == 0)
  {
    return element;
  }
}
// PRUEBAS UNITARIAS - EJERCICIOS 3
var assert = require("assert");
describe("Prueba unitaria - ejercicio 3", function()
{
    it("Pruebas con [7,14,44,80,77,35], resultado: 7,14,77,35", function()
    {
        assert.equal(7,14,77,35, eachMult([7,14,44,80,77,35]));
    });
});
// EJERCICIO 4 ***************************************
var arr = [2,5,7,2,3,8,10];
var doble = arr.map(mapDoble);
function mapDoble(element, index, cellNumber)
{
  var element = element*2 + 1;
  return element;
}
// PRUEBAS UNITARIAS - EJERCICIOS 4
var assert = require("assert");
describe("Prueba unitaria - ejercicio 4", function()
{
    it("Pruebas con [2,5,7,2,3,8,10], resultado: 5,11,15,5,7,17,21", function()
    {
        assert.equal(5,11,15,5,7,17,21, mapDoble([2,5,7,2,3,8,10]));
    });
});
// EJERCICIO 5 ***************************************
var arr = [2,5,7,2,3,8,10];
var doble = arr.map(mapDoble)
function mapDoble(element, index, cellNumber)
{
  var element = element*9/5 + 32;
  return element;
}
// PRUEBAS UNITARIAS - EJERCICIOS 5
var assert = require("assert");
describe("Prueba unitaria - ejercicio 5", function()
{
    it("Pruebas con [2,5,7,2,3,8,10], resultado: 35.5,41,44.6,35.6,37.4,46.4,50", function()
    {
        assert.equal(35.5,41,44.6,35.6,37.4,46.4,50, mapDoble([2,5,7,2,3,8,10]));
    });
});
//**** EJERCICIO 6 ***********************************
var arr=[1,2,3,4];
var producto=arr.reduce(function(resultado,num){
return resultado*num;
});
return producto;
// PRUEBAS UNITARIAS - EJERCICIOS 6
var assert = require("assert");
describe("Prueba unitaria - ejercicio 6", function()
{
    it("Pruebas con [1,2,3,4], resultado: 24", function()
    {
        assert.equal(24, (producto));
    });
});
//**** EJERCICIO 7 ***********************************
var edad = [20, 16, 89, 6];
var año= edad.filter(filterAño)
function filterAño(element, index, edad)
{
  var fecha_hoy = new Date();
  var ahora_anio = fecha_hoy.getFullYear();
  var newElement = ahora_anio - element;
  if(element>18)
    {
      return newElement;
    }
}
// PRUEBAS UNITARIAS - EJERCICIOS 7
var assert = require("assert");
describe("Prueba unitaria - ejercicio 7", function()
{
    it("Pruebas con [20, 16, 89, 6], resultado: 1997,1928", function()
    {
        assert.equal(1997,1928, filterAño([20, 16, 89, 6]));
    });
});
//**************************************************************
