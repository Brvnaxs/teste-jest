exports.Soma = function(n1, n2){
    return n1+n2;
} 

exports.Multiplicacao = function(n1, n2){
    return parseInt(n1*n2)
}

exports.Divisao = function(n1, n2){
    if(n1 > n2){
        return parseFloat(n1/n2)
    }else{
        return parseFloat(n2/n1)
    }
}

exports.Subtracao = function(n1, n2){
    return parseInt(n1-n2)
}