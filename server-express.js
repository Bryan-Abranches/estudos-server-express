const express = require("express");

const PORT = 5000;
const app = express();

const produtos = [
  { nome: "TV", preco: 3000 },
  { nome: "TV", preco: 300 },
  { nome: "TV", preco: 2000 },
  { nome: "TV", preco: 1000 },
  { nome: "TV", preco: 302 },
  { nome: "TV", preco: 400 },
];

const produtosFiltrados = produtos.filter((produto) => produto.preco < 500); // Filtrando o Array produtos e armazenando na variavel

/* Midleware */

app.use(express.json()); // faz com que o express consiga entender JSON

/* rotas */
app.get("/", (request, response) => {
  response.status(400).send("voce acessou a pagina home");
}); //Metodo do express para criação de requisiçãoi do tipo GET

app.get("/produtos", (request, response) => {
  response.status(200).send(produtos);
}); //Metodo do express para criação de requisiçãoi do tipo GET

app.get("/produtos-filtrados", (request, response) => {
  response.status(200).send(produtosFiltrados);
}); //Metodo do express para criação de requisiçãoi do tipo GET

app.post("/produtos", (req, res) => {
  /* console.log(req.body) */
  if (req.body >= 0) {
    return res
      .status(400)
      .json({ message: "o preço nao pode ser meno ou igual a 0" });
    // ESTOU PEGANDO O REQ.BODY VALIDABDO E RETORNARNADO O STATUS CODE E UMA MESSAGEM DE ERRO!
  }

  if (req.body.nome.lenght < 2) {
    return res.status(400).json({ message: "Produto nao encontrato" });
  }

  return res.json({ message: "o produto foi criado com sucesso" });
  //CASO PASSAR PELAS DUAS VALIDAÇOES VAI RETORNAR MENSSAGEM ACIMA 
});

/* Rodando Server */

app.listen(PORT, () => console.log(`O servidor esta rodando na porta ${PORT}`));
