var assert    = require("chai").assert;
var calculator = require("../app/calculator");
describe("Prueba de Calculadora usando la interface ASSERT desde el modulo CHAI: ", function() {
 describe("Prueba de la funcion addTested: ", function() {
 it("Verificando el valor devuelto usando: assert.equal(value,'value'): ", function() {
 result   = calculator.addTested("text");
 assert.equal(result, "text tested");
 });
 it("Verificando el valor devuelto usando: assert.typeOf(value,'value'): ", function() {
 result   = calculator.addTested("text");
 assert.typeOf(result, "string");
 });
 it("Verificando el valor devuelto usando: assert.lengthOf(value,'value'): ", function() {
 result   = calculator.addTested("text");
 assert.lengthOf(result, 11);
 });
 }); 
});
