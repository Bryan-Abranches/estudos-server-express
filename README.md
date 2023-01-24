## Estudos-server-express

<br>

## Criar um servidor com Express

<br>
Primeiro vamos instalar o Express

    npm i express

<br>

Depois fazemos a importação do express no nosso arquivo do servidor

    const express = require('express')

<br>

Depois de importado vamos armazenar o os métodos do Express dentro de variável 'app'.

    const app = express()

Assim os métodos do Express estarão dentro da variável app.

<br>

Podemos criar uma variável com a porta que iremos inicializar nosso servidor.

    const PORT = 5000;

<br>

Importante também criação de uma middleware para que nossa aplicação consiga entender arquivos JSON que serão trafegados pelas rotas

    app.use(express.json())

Faz com que o Express consiga entender arquivos JSON.

<br>

Para iniciar o nosso servidor temos que atribuir nossa variável que está com os métodos do Express ao método Listen do Express que vai "escutar nossa aplicação".

    app.listen(PORT, () => console.log(`O servidor esta rodando na porta ${PORT}`));

Recebe 2 Parâmetros o primeiro e PORT e o segundo e uma função de callback com um console.log confirmando a porta que o servidor esta rodando.

<br>

Agora já podemos criar algumas rotas
<br>

Usando o método GET para criar uma rota do tipo GET:

    app.get("/", (request, response) => {
  response.status(400).send("voce acessou a pagina home");
});

O método GET e atribuído a variável com os métodos do Express nesse caso "app.get".

Passamos 2 parâmetros para ele o primeiro sendo a rota "/", e o segundo uma função de call-back.

A função de call-back vai receber 2 parâmetros o Request e Response (requisição e resposta).

Dentro do call-back definimos o arquivo que será enviado como resposta a requisição do cliente.

    response.status(200).send(produtos);

também vamos definir o Status code da requisição está sendo enviada ao cliente.

