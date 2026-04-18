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
    if (a / b === 0)  return "divisao por zerpo invalida"; 
    return a + b; 
}
function resto(a, b) {
    return a % b;
}
module.exports = {
    sum,
    sub,
    multi,
    div,
    resto,
}
