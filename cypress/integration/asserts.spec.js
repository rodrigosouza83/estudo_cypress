/// <reference types="cypress" />

it('test asserts...', () => {
        const a = 1;
        expect(a).equal(1);
        expect(a).not.be.equal('b');

})

it('teste com booleanos...', () => {
  
    const b = true;
    const c = null;
    let a;

    expect(b).to.be.equal(true)
    expect(c).to.be.null
    expect(a).to.be.undefined
})

it('Testar igualdade de objetos...', () => {
    const object = {
        a: 10,
        b: 25
    }

    expect(object).eql({a: 10, b: 25})
    expect(object).include({b:25})
    expect(object).to.have.property('a')
    expect(object).not.to.be.empty

})

it('Testar array list...', () => {
    const array = [30, 60, 90, 120];

    expect(array).to.have.contains.members([30,60])
    expect(array).to.not.be.empty
})

it('Testar tipos de objetos...', () => {
    const num = 1
    const str = "String"

    expect(num).to.a('number')
    expect(str).to.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('Testar Strings com Cypress...', () => {
    const string = 'Rodrigo & Suellen'

    expect(string).to.be.contains('&')
    expect(string).to.be.length(17)
    expect(string).to.be.match(/en$/) //checa as últimas frases da string
    expect(string).to.be.match(/^Rod/) // checa as primeiras frases da string
})


it('Trabalhando com números no Cypress...', () => {
    const number = 9
    const floatNumber = 3.1401

    expect(number).to.be.eql(9)
    expect(number).to.be.above(7)
    expect(number).to.be.below(11)
    expect(floatNumber).to.be.closeTo(3.1, 0.1)
    expect(floatNumber).to.be.below(4)
})