const {Soma, Subtracao, Divisao, Multiplicacao} = require('./operacoes');

test("A função 'Soma' está funcionando corretamente.", () =>{
    expect(Soma(1,2)).toBe(3)
})

test("A função 'Subtracao' está funcionando corretamente.", () =>{
    expect(Subtracao(4,2)).toBe(2)
})

test("A função 'Divisao' está funcionando corretamente.", () =>{
    expect(Divisao(5,2)).toBe(2.5)
})

test("A função 'Multiplicação' está funcionando corretamente.", () =>{
    expect(Multiplicacao(4,2)).toBe(8)
})


