/* IMPORTAÇÕES */

const http = require("http");

const PORT = 3000;

const produtos = [
  { nome: "TV", preco: 3000 },
  { nome: "TV", preco: 300 },
  { nome: "TV", preco: 2000 },
  { nome: "TV", preco: 1000 },
  { nome: "TV", preco: 302 },
  { nome: "TV", preco: 400 },
];

const produtosFiltrados = produtos.filter((produto)=> produto.preco < 500) // Filtrando o Array produtos e armazenando na variavel

/* Criação do Servidor HTTP */
http
  .createServer((request, response) => {
    //console.log(request.url)
    response.writeHead(200, { "content-type": "text/plain; charset=utf-8" }); // header da nossa requisição
    //response.end('você acessou aqui')

    switch (request.url) {
      case "/":
        response.end("Voce esta na pagina home");
        //metodo end so pode receber string, trasformar o objeto em string com JSON.stringfy;
        break;
      case "/produtos":    
        response.end(JSON.stringify(produtos));
        //Pegando o array de objetos e transformando em String e enviando na rota /produtos
        break;

      case "/contatos":
        response.end("voce esta na pagina contatos");  case "/contatos":
                response.end("voce esta na pagina contatos");
                break;
       
    
      case "/produtos-filtrados":
        response.end(JSON.stringify(produtosFiltrados));
        //Pegando o Array.filter acima e enviando pela rota /produtos-filtrados
        break;

      default:
        response.end("esta pagina não existe");
    }
  })
  .listen(PORT, () =>
    console.log(`O servidor esta rodando da porta http://localhost${PORT}`)
  );
