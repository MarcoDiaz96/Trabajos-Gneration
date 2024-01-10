
const calculator = require('../modules/calculator');

//PRIMER TEST PARA SUMA

test('La suma de dos numeros y el valor resultante',()=>{
    expect(calculator.sum(10,20)).toBe(30);
});