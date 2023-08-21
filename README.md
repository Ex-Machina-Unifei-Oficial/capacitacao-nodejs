# Node.js

O JavaScript é hoje uma das linguagens de programação mais populares entre desenvolvedores, e em grande parte isso se deve ao fato de ser uma linguagem base para dezenas de frameworks com alta popularidade e adesão no mercado.

O JavaScript possui grande foco no Front-end (client side), ou seja, é comumente utilizada para rodar no “lado cliente” da aplicação. Com a evolução das tecnologias web, tornou-se possível fazer o JavaScript rodar também no Back-end, e é nesse momento que surge o Node.js.

O Node.js é um ambiente de execução, um “runtime”, que possibilidade execução de código JavaScript do lado servidor (server side), sem a necessidade de um navegador.

# A História do Node.js

O Node.js nasceu em 2009 como uma resposta às tentativas de rodar códigos JavaScript em modo “server side”, uma vez que a linguagem tinha como meta principal a manipulação do ``DOM (Document Object Model)`` e deixar as aplicações web mais interativas e dinâmicas.

Além disso, o fato da popularidade da linguagem entre pessoas desenvolvedoras por ser simples, interpretada e que não necessita da instalação de ferramentas complexas para o desenvolvimento.

Esses são alguns dos fatores que motivaram  o criador do projeto do Node.js, o engenheiro de software Ryan Dahl.

# Frontend e Backend

Front-end se refere à parte visível de um aplicativo ou site com a qual os usuários interagem diretamente, envolvendo design, interatividade e experiência do usuário. Utiliza tecnologias como HTML, CSS e JavaScript. Enquanto isso, o back-end é a parte não visível que lida com a lógica de negócios, processamento de dados e interações com bancos de dados, usando linguagens como Python, Java e plataformas como Node.js.

A arquitetura cliente-servidor é um modelo em que as funções são divididas entre clientes (que solicitam recursos) e servidores (que fornecem esses recursos). O cliente envia pedidos ao servidor, que os processa e retorna as respostas adequadas. Esses três elementos estão interconectados: o ``front-end (o cliente)`` solicita recursos ao ``back-end(o servidor)``, seguindo a aqruitetura cliente-servidor.

Além disso, uma parte crucial dessa relação são as APIs ``Application Programming Interface (Interface de Programação de Aplicação)``, que define como os componentes front-end e back-end se comunicam. Através da API, o front-end faz solicitações específicas ao back-end, que responde com os dados ou ações necessárias. É possível fazer alusão de uma API com o próprio back-end (o servidor) seguindo determinados protocolos e convenções.

# API

APIs são mecanismos que permitem que dois componentes de software se comuniquem usando um conjunto de definições e protocolos, sendo o ``protocolo HTTP`` o principal protocolo de comunicação utilizado na web. No contexto de APIs, a palavra "Aplicação" se refere a qualquer tipo de software. A "Interface" pode ser definida como um contrato, um conjuntos de regras, que devem ser seguidas para a comunicação efetiva entre dois, ou mais, softwares distintos. A comunicação entre os softwares é realizada por meio de **requisições** (requests) e **repostas** (responses).
Geralmente as APIs utilizam uma arquitetura baseada em ``cliente e servidor.`` A aplicação, o software, que envia a requisição é chamada de “cliente” e a aplicação que envia a resposta é chamada de “servidor”.

# REST

REST(Representational State Transfer, que significa Transferência Representacional de Estado) é um modelo de arquitetura e não uma linguagem ou tecnologia de programação, que fornece diretrizes para que os sistemas distribuídos se comuniquem diretamente usando os princípios e protocolos existentes da Web.
Os conceitos do REST foram submetidos à tese de doutorado de Roy Fielding nos anos 2000, onde o princípio fundamental é usar o protocolo HTTP para comunicação de dados.
A arquitetura REST é simples e fornece acesso aos recursos para que o cliente REST acesse e renderize os recursos no lado do cliente.
Na arquitetura REST a comunicação entre cliente e servidor ocorre através da troca de mensagens usando um padrão de solicitação-resposta. O cliente basicamente envia uma solicitação de serviço e o servidor retorna uma resposta.

## Métodos HTTP
Em aplicação REST, os métodos mais utilizados são:

* O método ``GET`` é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;<br>
O método POST foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado para suportar formulários HTML;
O método PUT edita e atualiza documentos em um servidor;
O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do servidor.

## Códigos de Respostas
Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. Algunso dos Códigos de Resposta HTTP mais utilizados são:
* 200 (OK), a solicitação foi bem-sucedida e a resposta contém os dados solicitados.<br>
* 201 (Created), a solicitação foi bem-sucedida e resultou na criação de um novo recurso.<br>
* 204 (No Content), este código significa que o servidor processou a solicitação com sucesso, mas não retornará nenhum conteúdo.<br>
* 400 (Bad Request), a solicitação foi malformada ou contém parâmetros inválidos.<br>
* 401 (Unauthorized), a solicitação requer autenticação, mas as credenciais fornecidas estão incorretas ou ausentes.<br>
* 404 (Not Found), o recurso solicitado não foi encontrado no servidor.<br>
* 500 (Internal Server Error), o servidor encontrou uma situação inesperada que o impediu de atender à solicitação.<br>

# Tipos de Parâmetros nas requisições REST.

Há várias maneiras de fazer requisições HTTP do front end para o back end usando REST.
Os verbos são: Get, Put, Post, Patch, Delete sendo que alguns podem receber parâmetros na URL ou não.

## Tipos
Existem três tipos de parâmetros, dois deles comumente utilizados no método GET e um no método no POST.

* Query Params (GET)
* Route Params (GET)
* Body Params (POST e PUT)

### Query params

Recebe os dados da requisição como parâmetro na URL.

Caso de uso: Filtros para fazer consultas na aplicação.

Pode conter um ou mais parâmetros:

Exemplos:

``http://minhaapi.com/banks?name=nubank``

No exemplo acima acesso o recurso (ou rota) banks, filtrando por name. Para inserir parâmetros é colocado um "?" após a rota e então adicionado a propriedade e valor: ``name=nubank``.



## Material para consulta e estudo

💙 [Playlist Conceitos sobre a WEB](https://www.youtube.com/playlist?list=PLPjSrtKJfMyfh-Pk-H-I_5nYAognbeGG7)

💚 [Playlist Node.js](https://www.youtube.com/playlist?list=PLPjSrtKJfMye2tETbbWSql4k_E4TFlQPT)

💜 [Introducao ao Insominia](https://youtu.be/gLpw0GSDYaw)
