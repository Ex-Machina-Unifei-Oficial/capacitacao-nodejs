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
Na arquitetura REST a comunicação entre cliente e servidor ocorre através da troca de mensagens usando um padrão de solicitação-resposta. O cliente basicamente envia uma solicitação de serviço e o servidor retorna uma resposta.Para representação e troca de informações no padrão REST o formato mais utilizado atualmente é o JSON.

## JSON
O JSON (JavaScript Object Notation) é, como o nome sugere, uma forma de notação de objetos JavaScript. É um formato de dados leve e de fácil leitura utilizado para troca de informações entre sistemas computacionais. Ele é frequentemente usado para transmitir dados entre um servidor e um cliente em aplicações web.

```json
{
   "author":{
      "firstname":"Jane"
      "lastname":"Doe",
   },
   "editor":{
      "firstname":"Jane"
      "lastname":"Smith",
   },
   "title":"The Ultimate Database Study Guide",
   "category":[
      "Non-Fiction",
      "Technology"
   ]
}
```

## Métodos HTTP
Em aplicação REST, os métodos mais utilizados são:

* O método ``GET`` é o método mais comum, indica que um recurso será recuperado do servidor. Por exemplo, quando um usuário solicita uma página web pelo navegador;<br>
O método ``POST`` indica que um recurso será inserido ou criado no servidor, como um registro na base  de dados ou um upload de arquivo, por exemplo;<br>
O método ``PUT`` indica que um recurso será atualizado no servidor;<br>
O método ``DELETE`` que como o próprio nome já diz, indica que um recurso pi coleçaão será removido do servidor;<br>

## Códigos de Respostas
Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. Os Códigos de Resposta HTTP mais utilizados são:
* 200 (OK), a solicitação foi bem-sucedida e a resposta contém os dados solicitados;<br>
* 201 (Created), a solicitação foi bem-sucedida e resultou na criação de um novo recurso;<br>
* 204 (No Content), este código significa que o servidor processou a solicitação com sucesso, mas não retornará nenhum conteúdo;<br>
* 400 (Bad Request), a solicitação foi malformada ou contém parâmetros inválidos;<br>
* 401 (Unauthorized), a solicitação requer autenticação, mas as credenciais fornecidas estão incorretas ou ausentes;<br>
* 404 (Not Found), o recurso solicitado não foi encontrado no servidor;<br>
* 500 (Internal Server Error), o servidor encontrou uma situação inesperada que o impediu de atender à solicitação;<br>

# Tipos de Parâmetros nas requisições REST

Há várias maneiras de fazer requisições HTTP do front end para o back end usando REST.
Os verbos são: Get, Put, Post, Delete sendo que alguns podem receber parâmetros na URL ou não. Existem três tipos de parâmetros, dois deles comumente utilizados no método GET e um no método no POST.

* Query Params (GET);
* Route Params (GET);
* Body Params (POST e PUT);

## Query params

Recebe os dados da requisição como parâmetro na URL.

Caso de uso: Filtros para fazer consultas na aplicação.

Pode conter um ou mais parâmetros:

Exemplos:

``http://minhaapi.com/banks?name=nubank``

No exemplo acima acesso o recurso (ou rota) banks, filtrando por name. Para inserir parâmetros é colocado um "?" após a rota e então adicionado a propriedade e valor: ``name=nubank``.

## Route params

Recebe os dados da requisição na rota.

Caso de uso: Melhor maneira para buscar algo específico, deletar ou atualizar usando o identificador único, por exemplo:

``GET: https://api.github.com/users/380327``<br>
``PUT: https://api.github.com/users/380327``<br>
``DELETE: https://api.github.com/users/380327``<br>

## Body Params
Recebe os dados no corpo da requisição, em um objeto em JSON. Frequentemente Utilizado com os métodos ``POST`` e ``PUT``.

```json
{
  "name": "Thiago",
  "age": 18,
  "email": "thiago@mail.com"
}
```

No exemplo acima ocorrem a busca, a atualização e o delete de um usuário do GitHub com id 380327.

# CRUD
CRUD é um acrônimo para ``Create`` (criar), ``Read`` (ler), ``Update`` (atualizar) e ``Delete`` (apagar), que se refere as quatro operações básicas que podem ser realizadas em uma aplicação web.<br>
Essas operações permitem que os usuários interajam com os dados armazenados em um sistema, podendo criar novos registros, ler informações existentes, atualizar registros existentes e excluir registros que não são mais necessários.<br>
Criar um CRUD significa desenvolver uma interface que permita ao usuário realizar essas operações de forma simples e intuitiva.<br>

# TypeScript

O TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript. Começou a ser desenvolvido pela Microsoft em 2012, com o objetivo de adicionar recursos que não estão presentes nativamente na linguagem JavaScript (ou que seriam muito mais complexos de serem implementados), como tipagem estática (ou seja, os tipos das variáveis são definidos explicitamente no código) e orientação a objetos.
A principal vantagem do TypeScript em relação ao JavaScript “tradicional” é adicionar recursos importantes para a construção de projetos em larga escala, como tipagem estática, forte e automática, orientação a objetos e a possibilidade de descobrir e corrigir erros em tempo real durante o desenvolvimento.
Apesar de ter sido criado pela Microsoft, o TypeScript é um projeto de código-aberto, com intensa participação da comunidade. Você pode saber mais sobre a linguagem, ler a documentação e testar sua utilização diretamente no navegador pelo [site oficial](https://www.typescriptlang.org/)
.

# Desafio

Tomando como base o conteúdo da API de Tarefas apresentada na capcitação, o desafio consiste em criar uma API de um CRUD de Usuários. Cada usuário deve ter um id único, um email (não deve ser repetido), um campo nome e um campo senha. Após concluir o desafio em JavaScript, aplique às devidas refatorações migrando o código para TypeScript, aplicando as tipagens correspondentes a cada campo do usuário.

**Bonus**: Para fins de estudo, aplique um processo de criptografia de senha antes de ser persistida no bacno de dados.

## Material para consulta e estudo

💙 [Playlist Conceitos sobre a WEB](https://www.youtube.com/playlist?list=PLPjSrtKJfMyfh-Pk-H-I_5nYAognbeGG7)

💚 [Playlist Node.js](https://www.youtube.com/playlist?list=PLPjSrtKJfMye2tETbbWSql4k_E4TFlQPT)

💜 [Introducao ao Insominia](https://youtu.be/gLpw0GSDYaw)

❤️ [Introducao a APIs](https://www.youtube.com/playlist?list=PLPjSrtKJfMyfaOviKmRvt9cQKdvcqcPUX)

💛 [Introducao ao TypeScript](https://www.youtube.com/playlist?list=PLPjSrtKJfMye8GirwVEfwLEGVkrDc92U2)
