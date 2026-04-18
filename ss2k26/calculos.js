function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) return { erro: "Divisão por zero é inválida." };
    return a / b;
} 

module.exports = {
    sum,
    sub,
    multi,
    div,
}
