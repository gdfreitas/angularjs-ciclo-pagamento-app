# Aplicação Stack MEAN

Construindo uma aplicação utilizando o agregado de tecnologias da stack MEAN para aprendizagem.

# BACKEND

## Resources

Recursos disponíveis para consulta, criação, alteração e remoção de ciclos de pagamento. Consulta de quantidade de ciclos para paginação e consulta de sumário para os widgets de dashboard.

`GET`      @ /api/billingCycles <br />
`GET`      @ /api/billingCycles/{id} <br />
`POST`     @ /api/billingCycles <br />
`PUT`      @ /api/billingCycles/{id} <br />
`DELETE`   @ /api/billingCycles/{id} <br />
`GET`      @ /api/billingCycles/count <br />
`GET`      @ /api/billingCycles/summary <br />

## Dependências

[MongoDB](https://docs.mongodb.com/) - base de dados NoSQL, alta performance, sem esquemas e orientado à documentos. <br />
[NodeJS](https://nodejs.org/en/docs/) - interpretador de código javascript no lado servidor.<br />
[Express](http://expressjs.com/en/4x/api.html) - servidor web não organizado e minimalista para NodeJS<br />
[express-query-init](https://www.npmjs.com/package/express-query-int) - middleware auxiliar para fazer o parse de query parameters numéricos<br />
[mongoose](http://mongoosejs.com/docs/guide.html) - api de mapeamento dos objetos javascript para documentos (ODM - Object Data Mapping) e sistemas de conversão de tipos, validaÇão, criação de consultas e hooks para lógicas de negócio.<br />
[mongoose-paginate](https://github.com/edwardhotchkiss/mongoose-paginate) - auxiliar para montar paginações em consultas ao banco de dados.<br />
[noderestful](https://github.com/baugarten/node-restful) - biblioteca para auxiliar na criação de rotas para recursos no padrão REST no servidor `express`.<br />
[Lodash](https://lodash.com/docs/) - biblioteca contendo inúmeros métodos que auxiliam na manipulação de arrays, objetos, strings, etc em javascript.<br />
[body-parser](https://github.com/expressjs/body-parser) - middleware para fazer o parse do body das requests.<br /><br />
[pm2](http://pm2.keymetrics.io/) - gerenciador de processos para aplicações NodeJ. Gerenciamento de memória, de cores, quedas na aplicação, etc.<br />

## Configuração
### Criar arquivo `.env` com a secret key

```
module.exports = {
  authSecret: 'chaveSecretaMuitoLoucaCheiaDeCaracteresLerDocumentacao'
}
```

# FRONTEND

# Dependências

[angular 1x](https://docs.angularjs.org/api) - framework para criação de SPA (single-page applications)<br />
[angular-animate](https://docs.angularjs.org/guide/animations) - biblioteca nativa do angularjs para implementação de animações via css<br />
[angular-toastr](https://github.com/Foxandxss/angular-toastr) - implementação para angular da biblioteca de notificações `toastr`<br />
[angular-ui-router](https://ui-router.github.io/ng1/) - controle de rotas baseados em estados.<br />
[gulp](https://github.com/gulpjs/gulp/blob/master/docs/API.md) - automatizador de tarefas, orquestra todo o build da aplicação<br />
[gulp-append](https://www.npmjs.com/package/gulp-append) - utlitário para adicionar dados à um arquivo<br />
[gulp-babel](https://github.com/babel/gulp-babel) - integração do babel com o gulp<br />
[gulp-concat](https://www.npmjs.com/package/gulp-concat) - concatena arquivos<br />
[gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) - minifíca html<br />
[gulp-less](https://www.npmjs.com/package/gulp-less) - transforma arquivos less em css<br />
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - minifica arquivos js<br />
[gulp-uglifycss](https://www.npmjs.com/package/gulp-uglifycss) - minifica arquivos css<br />
[gulp-util](https://github.com/gulpjs/gulp-util) - funções utilitárias para gulp<br />
[gulp-watch](https://www.npmjs.com/package/gulp-watch) - observa alterações em arquivos<br />
[gulp-webserver](https://github.com/schickling/gulp-webserver) - cria um servidor<br />
[run-sequence](https://www.npmjs.com/package/run-sequence) - executa tasks do gulp em uma sequência<br />
[babel-core](https://babeljs.io/docs/core-packages/) - transpiler de sintáxes (jsx), ES6, ES7, etc para javascript suportado nos browsers atuais.<br />
[babel-preset-env](https://github.com/babel/babel-preset-env/) - plugin para compilar varios presets antigos (Ex: ES6 (ES2015) para ES5)<br />
[admin-lte](https://adminlte.io/docs/2.4/layout) - tema opensource para dashboards, utiliza bootstrap 3 e provê bastante componentes para utilização no layout.<br />
[font-awesome](http://fontawesome.io/icons/) - biblioteca de ícones<br />
[Lodash](https://lodash.com/docs/) - biblioteca contendo inúmeros métodos que auxiliam na manipulação de arrays, objetos, strings, etc em javascript.<br />

# Rodando a aplicação
`mongod` inicializar o banco de dados mongoDB

`./backend npm run prod && pm2 monit` inicializar api de backend e abrir monitoração realtime do pm2

`./frontend npm run prod` gerar os arquivos estáticos na pasta `./public` 

# Extras

[JsonWebToken implementation for node.js](https://github.com/auth0/node-jsonwebtoken)<br />
[What are requirements for HMAC secret key?](https://security.stackexchange.com/questions/95972/what-are-requirements-for-hmac-secret-key)<br />
[Conhecendo o JWT na teoria e na prática](https://imasters.com.br/desenvolvimento/json-web-token-conhecendo-o-jwt-na-teoria-e-na-pratica/?trace=1519021197&source=single)<br />
[Introdução ao mongoose](http://nodebr.com/nodejs-e-mongodb-introducao-ao-mongoose/)<br />
[Curso Stack Mean @Udemy](https://www.udemy.com/mean-primeira-aplicacao-do-zero)
