# camp-api
NESTJS
O Nest é uma estrutura para a criação de API, eficientes e escalaveis. Utilizando o JavaScript econstruido com o suporte TypeScript, permite que os desenvolvedores combinem elementos de OOP(Programação Orientada a Objetos), FP (Programação Funcional) e FRP (Programação REativa Funcional)

Fornecendo um arquitetura de API pronta para o uso, o Nest facilita que desenvolvedores e equipes criem APIs altamente testaveis, escalaveis, pouco acopladas e de facil manutenção.

COMANDOS UTILIZADOS

$ npm i -g @nestjs/cli
$ nest new project-name

*Implementação do banco e dados PostgreSQL
Postgres é um sistema de gerenciamento de banco de dados objeto-relacional (ORDBMS). Sua função principal é armazenar dados de forma segura, para depois recupera-las conforme for solicitado por outros aplicativos de softaware. Voltado para lidar desde cargas muito muito grandes de trabalho a pequenos aplicativos, lidando com consultas SQL complexas, usando metodos de indexação. Suas maiores funçoes são visualizaçoes e materialiazaçoes atualiazaveis, chave estrangeira, suporta funçoes e procedimentos armazenados e outras expansibilidades, e possui grande numero de extensoes.

Iniciando uma instancia do Postgres no Docker 

-Docker é um conjunto de produtos de plataforma que usa virtualização de sistema operacional para entregar pacotes chamados conteineres. Esses containeres serao isolados uns dos outros, agrupando seus proprios softwares, bibliotecas e arquivos de configuração.

COMANDO UTIIZADO
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres



*Autenticação
A abordagem adotada para esse projeto foi escolhida seguindo a documentação do Nest.js. O Passport é uma biblioteca de autenticação node.js que garante sucesso em aplicativos de produção.
Usando o @nestjs/passport módulo se executa uma serie de etapas:

- Autenticação do Usuario vericando suas credenciais como; nomeUsuario, senha e Jason Web Token.
- Gerencia o estado Autenticado
- Anexa informaçoes sobre o usuario autenticado como o Request que é usado para manipular rotas.

O passaport é composto por uma rica variedade de estrategia de autenticação, construindo etapas variadas em forma de padrão.

Nesse Modulo foi implementado uma solução completa de autenticação para o serviço de API RESTfull. Usando a estrategia do Passport para personalizar o esquema de autenticação utilizado. 

MODELO DE AUTENTICAÇÃO PARA O USUARIO
Detalhando os requisitos, o cliente da Aplicação, vai começar autenticando como o nome de usuario e senha. Uma vez autenticado, o servidor emitirá um JWT que pode ser enviado como Token, comprovando assim a autenticação, criando uma rota protegida, e acessivel somente para as validaçoes que contenham o JWT.

Em meio as estrategias que o Passport fornece, temos a passport-local que implementa o mecanismo de autenticação por meio do usuario/senha.

COMANDOS UTILIZADOS:
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local

IMPLEMENTANDO A ESTRATEGIA PASSPORT

O recurso de autenticação é pensando como uma miniestrutura em si. Abstraindo o processo em algumas etapas que sera personalizado com base no que for implementado na aplicação. Essa estrutura sera configurada fornecendo parametros de personalização como os objetos JSON.

IMPLEMENTANDO PASSAPORT JWT

Para proteger os endepoints é necessario que o JWT esteja valido na solicitação, atendendo os requisitos:

- Permitir a autenticação do usuario com email/senha, retornando um JWT para uso em chamadas subsequentes nos endpoints protegidos da API. 
-Criar rotas protegidas na API com o JWT valido como token.