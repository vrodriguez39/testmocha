var should    = require("chai").should();
var calculator = require("../app/calculator");
describe("Prueba de Calculadora usando la interface SHOULD desde el modulo CHAI: ", function() {
 describe("Prueba de la funcion addTested: ", function() {
 it("Verificando el valor devuelto usando: value.should.equal(value): ", function() {
 result   = calculator.addTested("text");
 result.should.equal("text tested");
 });
 it("Verificando el valor devuelto usando: value.should.be.a('value'): ", function() {
 result   = calculator.addTested("text");
 result.should.be.a('string');
 });
 it("Verificando el valor devuelto usando: expect(value).to.have.lengthOf(value): ", function() {
 result   = calculator.addTested("text");
 result.should.have.lengthOf(11);
 });
 });
});
