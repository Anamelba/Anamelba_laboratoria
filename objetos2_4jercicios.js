// EJERCICIO 1*************************************************
function suma(numInicial, numFinal)
{
  var number =
  {
    inicio : numInicial,
    fin : numFinal,
    sumar : function()
    {
      var res = 0;
      for(var i=number.inicio; i<=number.fin; i++)
      {
       res = res+ i;
      }
      return res;
    }
  };
  return number.sumar();
}
return suma(1,10);
//PRUEBAS UNITARIAS - EJERCICIO 1
var assert = require("assert");
describe("Prueba unitaria - ejercicio 1", function()
{
    it("Pruebas con 1 y 10, resultado 55", function()
    {
        assert.equal(55, suma(1, 10));
    });
});
// EJERCICIO 2**************************************************
function superCoder(nombre, edad, ocupacion, genero)
{
  this.nombre = nombre;
  this.edad = edad;
  this.ocupacion = ocupacion;
  this.genero = genero;
  this.mensaje = function()
  {
    if(this.edad>=18 && (this.ocupacion=="Web developer"||this.ocupacion=="Estudiante laboratoria") && this.genero=="F")
      {
        return "You are awesome";
      }
    else
      {
        return "Upsiii";
      }
  }
}
var lissette = new superCoder("Lissette", 23, "Web developer", "F");
return lissette.mensaje();
// PRUEBAS UNITARIAS - EJERCICIO 2
var assert = require("assert");
describe("Prueba unitaria - ejercicio 2", function(){
    it("Lissette, 23, Web developer, F, resultado = You are awesome", function()
    {
        assert.equal("You are awesome", superCoder("Lissette", 23, "Web developer", "F"));
    });
// EJERCICIO 3******************************************************************************************************************
function concatenar(arr)
{
    var texto = {
        propiedad1 : arr[0],
        propiedad2 : arr[1],
        propiedad3 : arr[2],
        propiedad4 : arr[3],
        propiedad5 : arr[4],
        propiedad6 : arr[5]
    }
    function cadena()
    {
        var propiedades = Object.keys(texto);
        var res = "";
        for(var i = 0; i < arreglo.length; i++)
        {
            resultado += propiedades[i] + "-->" + arr[i] + ";";
        }
        resultado = res.slice(0, -1);
        return res;
    }
    return cadena();
}
// PRUEBAS UNITARIAS - EJERCICIO 3
var assert = require("assert");
describe("Prueba unitaria - Ejercicio 3", function()
{
    it("Pruebas con arreglo[6, 5, 4, 3, 2, 1]", function()
    {
        assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1", concatenar([6, 5, 4, 3, 2, 1]));
    });
});
// EJERCICIO 4******************************************************************************************************************
function clinica(nombre, apellido, edad, genero, ciudad, pais)
{
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.ficha = function()
  {
    return "Nombre: " + this.nombre + " " + this.apellido +" "+  "Edad: " + this.edad +" "+ "Pais: " + this.pais ;

  }
}
var lissette = new clinica("Blanca", "Perez", 23, "Femenino", "Santiago", "Chile");
return lissette.ficha();
// PRUEBAS UNITARIAS - EJERCICIO 4
var assert = require("assert");
describe("Prueba unitaria - Ejercicio 4", function()
{
    it("Pruebas con Blanca, Perez, 23, Femenino, Santiago, Chile", function()
    {
        assert.equal("Nombre: Blanca Perez Edad: 19 Pais: Chile", ejercicio4("Blanca", "Perez", 23, "Femenino", "Santiago", "Chile"));
    });
});
