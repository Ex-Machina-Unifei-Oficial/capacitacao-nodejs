# Node.js

O JavaScript é hoje uma das linguagens de programação mais populares entre desenvolvedores, e em grande parte isso se deve ao fato de ser uma linguagem base para dezenas de frameworks com alta popularidade e adesão no mercado.

Ele possui grande foco no Front-end, que roda no client side (lado do cliente) da aplicação, ou seja, nos navegadores dos usuários. E, antigamente, só poderia ser executado dessa forma. No entanto, os desenvolvedores necessitavam mastria em pelo menos duas linguagens de programação, uma para o back-end e uma para o front-end do sistema. Isso, juntamente com a popularidade do JS entre desenvolvedores, sua simplicidade e alto nível, e a facilidade da instalação de ferramentas para o desenvolvimento fizeram com que surgisse uma demanda para a utilização de JavaScript no back-end.

Com a evolução das tecnologias web, isso tornou-se possível justamente com o Node.js. Ele é um ambiente de execução (runtime), que possibilita execução de código JavaScript no server side (lado do servidor), sem a necessidade de um navegador.

## Ambiente Node e Gerenciamento de Pacotes

Ao utilizar linguagens de programação como c, por exemplo, para incluir bibliotecas basta adicionar uma linha de comando e magicamente ela funciona, sem o download ou adição de nenhum arquivo.

No entanto, algumas linguagens como o python possuem ambientes virtuais para trabalhar com projetos maiores. O Node, por sua vez, possui um sistema de gerenciamento de pacotes, que são nada mais que bibliotecas que devem ser instaladas juntamente ao projeto desenvolvido para que funcionem corretamente. É possível ver os pacotes instalados no projeto no arquivo `package.json`, nas seções **dependencies** (dependências para ambiente de desenvolvimento e produção) e **devDependencies** (dependências apenas para o desenvolvimento). Os pacotes instalados são armazenados em uma pasta chamada `Node Modules` (que as vezes dá uma dor de cabeça).

### NPM

Justamente por não ser possível de adicionar a biblioteca ao projeto com apenas uma linha de código, existem
ferramentas de Gerenciamento de Pacotes. A ferramenta mais comum, e instalada por padrão junto com o Node, é o **npm** (Node Package Manager). Para utilizá-lo, é necessário rodar os comandos no terminal, sendo recomendado utilizar o próprio vsCode (`crtl + '` abre o terminal). Os comandos mais comuns são:

```bash
npm install
npm i
```

- Instala todos pacotes listados no package.json. É necessário utilizar esse comando toda vez que clonar um repositório no GitHub que utiliza Node.

```bash
npm i nomeDoPacote
npm i nomeDoPacote --dev
npm i nomeDoPacote -D
```

- Todos comando acima instalam um determinado pacote. A diferença entre eles é que, utilizando --dev ou -D o pacote será instalado como dependência de desenvolvedor.
- Na prática os comandos mais utilizados.

```bash
npm uninstall nomeDoPacote
```

- Desinstala um determinado pacote, sendo dependência de desenvolvedor ou não.

Existem outras ferramentas como yarn, que já foi mais recomendado que npm, ou pnpm, o mais popular atualmente, que consegue instalar as bibliotecas em um único lugar ao invés de cada projeto ter uma cópia. Cada ferramenta possui sua maneira própria de gerenciar os pacotes, as vezes criando arquivos adicionais para isso, no caso do npm, o arquivo package-lock.json.

Além de gerenciar pacotes, as ferramentas também possibilitam a execução de scripts pré determinados na seção **scripts** do package.json. O exemplo mais comum é `npm run start` para executar um projeto React e `npm run dev` para executar um projeto Next, porém também é possível adicionar scripts para padronizar a formatação do código, para realizar testes automatizados ou fazer o deploy do projeto.

#### NPX

Por fim, nas últimas versões do npm, a ferramenta **npx** (Node Package Execute) vem instalada em conjunto. O objetivo dela é facilitar a execução de pacotes sem a necessidade de instalá-los globalmente, bastando rodar o código desejado e então o pacote mais recente será baixado e executado.

Para fazer o deploy da versão mais atual de um projeto NextJS, o Librex, por exemplo, é utilizado o comando:

```bash
npx vercel --prod
```

### Módulos

Outra possibilidade oferecida pelos pacotes do Node é a divisão do código em vários arquivos. No desenvolvimento de sistemas relativamente grandes, é preciso separar o código em módulos, a fim de manter a organização e escalabilidade do código: escrever vários módulos de 20 linhas no lugar de um grande arquivo de 1000 linhas torna muito mais fácil de achar o que precisa, de adicionar e de remover códigos. E, na verdade, esses módulos que são exportados nos pacotes mencionados acima.

Para modularizar o código a principal questão é: como transmitir variáveis, funções, etc de um arquivo para outro? No Node, existem duas formas de fazer isso:

#### 1. module.exports / require

Sistema padrão de módulos do Node, por conta de retrocompatibilidade.

**module.exports**: É usado para exportar funções, objetos ou valores de um módulo para outro. Quando você define algo em module.exports, você está especificando o que o módulo exporta quando outro arquivo o importa usando require.

**require**: É usado para importar módulos em outros arquivos. Quando você usa require, você importa o que foi exportado em module.exports do módulo alvo.

```js
// file1.js
function sayHello() {
  console.log("Hello");
}

module.exports = sayHello;
```

```js
// file2.js
const sayHello = require("./file1");

sayHello();
```

#### 2. export / import

São usados no sistema de módulos ES6 (ECMAScript 2015), que é o padrão moderno de módulos em JavaScript. Este sistema é suportado nativamente nos navegadores modernos e também pode ser usado em Node e em React.

**export**: Utilizado para exportar funções, objetos ou valores de um módulo. Existem duas formas de exportar: exportações nomeadas (named exports) e exportação padrão (default export). É permita a exportação padrão de apenas um elemento.

**import**: Utilizado para importar funções, objetos ou valores de um módulo.

```js
// file3.js
// Named export
export function sayHello() {
  console.log("Hello");
}

// Default export
const greeting = "Hello";
export default greeting;
```

```js
// file4.js
import { sayHello } from "./file3";
sayHello();

import greeting from "./file3";
console.log(greeting);
```

Além da pequena diferença da sintaxe (ausência das chaves no import), a exportação padrão permite que um arquivo seja importado com nome diferente do que ele foi exportado no outro arquivo. Isso possui apenas alguns casos de uso, frequentemente apenas causando algumas dores de cabeça, ainda mais porque também é possível alterar o nome do elemento importado por nome (import alias). Outro problema com export default é a baixa compatibilidade com ferramentas de import automático, justamente por não ter um nome definido.

```js
// file5.js
function sayHello() {
  console.log("Hello");
}

// Também é possível utilizar named export após a definição
export sayHello;

// Também é possível utilizar export default na definição
export default greeting = "Hello";
```

```js
// file6.js
import { sayHello as hablaOla } from "./file5";
hablaOla();

import saudacion from "./file3";
console.log(saudacion);
```

Renomear um elemento importado no geral é útil quando há um conflito de nomes de varíaveis: o módulo que precisa importar já possui uma varíavel com o mesmo nome. Frequentemente o problema vai estar na nomeação nas variáveis, mas, se mesmo depois de analisar isso, o problema não for resolvido, o "apelido" é uma alternativa disponível.

## Conceitos Iniciais

### Frontend e Backend

Front-end se refere à parte visível de um aplicativo ou site com a qual os usuários interagem diretamente, envolvendo design, interatividade e experiência do usuário. Utiliza tecnologias como HTML, CSS e JavaScript. Enquanto isso, o Back-end é a parte não visível que lida com a lógica de negócios, processamento de dados e interações com bancos de dados, usando linguagens como Python, Java e plataformas como Node.js.

A arquitetura cliente-servidor é um modelo em que as funções são divididas entre clientes, que solicitam recursos, e servidores, que fornecem esses recursos. Dessa forma, o cliente envia pedidos (request) ao servidor, que os processa e retorna as respostas (response) adequadas, seguindo a arquitetura.

### JSON

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

### API

Além disso, uma parte crucial dessa relação são as APIs `Application Programming Interface (Interface de Programação de Aplicação)`, que define como os componentes front-end e back-end se comunicam. Através da API, o front-end faz solicitações específicas ao back-end, que responde com os dados ou ações necessárias. É possível fazer a abstração de uma API como o próprio servidor, seguindo determinados protocolos e convenções.

APIs são mecanismos que permitem que dois componentes de software se comuniquem usando um conjunto de definições e protocolos. Sendo o `protocolo HTTP` o principal protocolo de comunicação utilizado na web, que funciona por meio de **requisições** (requests) e **repostas** (responses).

No contexto de APIs, a palavra "Aplicação" se refere a qualquer tipo de software. A "Interface" pode ser definida como um contrato, um conjunto de regras, que devem ser seguidas para a comunicação efetiva entre softwares distintos.

### REST

REST(Representational State Transfer - Transferência Representacional de Estado) é um modelo de arquitetura e não uma linguagem ou tecnologia de programação, que fornece diretrizes para que os sistemas distribuídos se comuniquem diretamente usando os princípios e protocolos existentes da Web.
Os conceitos do REST foram submetidos à tese de doutorado de Roy Fielding nos anos 2000, onde o princípio fundamental é usar o protocolo HTTP para comunicação de dados.
A arquitetura REST é simples e fornece acesso aos recursos para que o cliente REST acesse e renderize os recursos no lado do cliente.
Na arquitetura REST a comunicação entre cliente e servidor ocorre através da troca de mensagens usando um padrão de solicitação-resposta. O cliente basicamente envia uma solicitação de serviço e o servidor retorna uma resposta.Para representação e troca de informações no padrão REST o formato mais utilizado atualmente é o JSON.

## Trabalhando com Backend

### Métodos HTTP

Em aplicação REST, os métodos mais utilizados são:

- O método `GET` é o método mais comum, indica que um recurso será recuperado do servidor. Por exemplo, quando um usuário solicita uma página web pelo navegador;<br>
  O método `POST` indica que um recurso será inserido ou criado no servidor, como um registro na base de dados ou um upload de arquivo, por exemplo;<br>
  O método `PUT` indica que um recurso será atualizado no servidor;<br>
  O método `DELETE` que como o próprio nome já diz, indica que um recurso pi coleçaão será removido do servidor;<br>

### Códigos de Respostas

Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. Os Códigos de Resposta HTTP mais utilizados são:

- 200 (OK), a solicitação foi bem-sucedida e a resposta contém os dados solicitados;<br>
- 201 (Created), a solicitação foi bem-sucedida e resultou na criação de um novo recurso;<br>
- 204 (No Content), este código significa que o servidor processou a solicitação com sucesso, mas não retornará nenhum conteúdo;<br>
- 400 (Bad Request), a solicitação foi malformada ou contém parâmetros inválidos;<br>
- 401 (Unauthorized), a solicitação requer autenticação, mas as credenciais fornecidas estão incorretas ou ausentes;<br>
- 404 (Not Found), o recurso solicitado não foi encontrado no servidor;<br>
- 500 (Internal Server Error), o servidor encontrou uma situação inesperada que o impediu de atender à solicitação;<br>

### Tipos de Parâmetros nas requisições REST

Há várias maneiras de fazer requisições HTTP do front end para o back end usando REST.
Os verbos são: Get, Put, Post, Delete sendo que alguns podem receber parâmetros na URL ou não. Existem três tipos de parâmetros, dois deles comumente utilizados no método GET e um no método no POST.

- Query Params (GET);
- Route Params (GET);
- Body Params (POST e PUT);

### Query params

Recebe os dados da requisição como parâmetro na URL.

Caso de uso: Filtros para fazer consultas na aplicação.

Pode conter um ou mais parâmetros:

Exemplos:

`http://minhaapi.com/banks?name=nubank`

No exemplo acima acesso o recurso (ou rota) banks, filtrando por name. Para inserir parâmetros é colocado um "?" após a rota e então adicionado a propriedade e valor: `name=nubank`.

### Route params

Recebe os dados da requisição na rota.

Caso de uso: Melhor maneira para buscar algo específico, deletar ou atualizar usando o identificador único, por exemplo:

`GET: https://api.github.com/users/380327`<br>
`PUT: https://api.github.com/users/380327`<br>
`DELETE: https://api.github.com/users/380327`<br>

### Body Params

Recebe os dados no corpo da requisição, em um objeto em JSON. Frequentemente Utilizado com os métodos `POST` e `PUT`.

```json
{
  "name": "Thiago",
  "age": 18,
  "email": "thiago@mail.com"
}
```

No exemplo acima ocorrem a busca, a atualização e o delete de um usuário do GitHub com id 380327.

### CRUD

CRUD é um acrônimo para `Create` (criar), `Read` (ler), `Update` (atualizar) e `Delete` (apagar), que se refere as quatro operações básicas que podem ser realizadas em uma aplicação web.<br>
Essas operações permitem que os usuários interajam com os dados armazenados em um sistema, podendo criar novos registros, ler informações existentes, atualizar registros existentes e excluir registros que não são mais necessários.<br>
Criar um CRUD significa desenvolver uma interface que permita ao usuário realizar essas operações de forma simples e intuitiva.<br>

## Exercício

Tomando como base o conteúdo da API de Tarefas apresentada na capacitação, o desafio consiste em criar uma API de um CRUD de Usuários. Cada usuário deve ter um id único, um email (não deve ser repetido), um campo nome e um campo senha. Após concluir o desafio em JavaScript, aplique às devidas refatorações migrando o código para TypeScript, aplicando as tipagens correspondentes a cada campo do usuário.

**Bonus**: Para fins de estudo, aplique um processo de criptografia de senha antes de ser persistida no banco de dados.

## Material para consulta e estudo

💙 [Playlist Conceitos sobre a WEB](https://www.youtube.com/playlist?list=PLPjSrtKJfMyfh-Pk-H-I_5nYAognbeGG7)

💚 [Playlist Node.js](https://www.youtube.com/playlist?list=PLPjSrtKJfMye2tETbbWSql4k_E4TFlQPT)

💜 [Introducao ao Insominia](https://youtu.be/gLpw0GSDYaw)

❤️ [Introducao a APIs](https://www.youtube.com/playlist?list=PLPjSrtKJfMyfaOviKmRvt9cQKdvcqcPUX)

💛 [Introducao ao TypeScript](https://www.youtube.com/playlist?list=PLPjSrtKJfMye8GirwVEfwLEGVkrDc92U2)

---
