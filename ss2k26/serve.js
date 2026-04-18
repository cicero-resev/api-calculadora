const http = require('http');
const url = require('url');
const calc = require('./calculos');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    
    const a = Number(query.a);
    const b = Number(query.b);

    // Validação de segurança
    if (isNaN(a) || isNaN(b)) {
        console.log("Erro: Valores de 'a' ou 'b' inválidos (n é número ;-;).");
        res.writeHead(400, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
        });
        return res.end(JSON.stringify({ erro: "Por favor, envie números válidos. T-T" }));
    }

    let result;
    switch (pathname) {
        case '/sum':
            result = calc.sum(a, b);
            break;
        case '/sub':
            result = calc.sub(a, b);
            break;
        case '/multi':
            result = calc.multi(a, b);
            break;
        case '/div':
            result = calc.div(a, b);
            break;
        case '/resto':
            result = calc.resto(a, b);
            break;
        default:
            res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
            return res.end('Rota não encontrada');
    }

    res.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
    });
    res.end(JSON.stringify({ resultado: result }));
});

server.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000');
});