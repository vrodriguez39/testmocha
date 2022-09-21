var expect    = require("chai").expect;
var calculator = require("../app/calculator");
describe("Prueba de Calculadora usando la interface EXPECT desde el modulo CHAI: ", function() {
 describe("Prueba de la funcion addTested: ", function() {
 it("Verificando el valor devuelto usando: expect(value).to.equal('value'): ", function() {
 result   = calculator.addTested("text");
 expect(result).to.equal("text tested");
 });
 it("Verificando el valor devuelto usando: expect(value).to.be.a('value')): ", function() {
 result   = calculator.addTested("text");
 expect(result).to.be.a('string');
 });
 it("Verificando el valor devuelto usando: expect(value).to.have.lengthOf(value): ", function() {
 result   = calculator.addTested("text");
 expect(result).to.have.lengthOf(11);
 });
 });
});
