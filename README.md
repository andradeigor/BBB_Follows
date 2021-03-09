# BBB Follows
![demonstration](https://media.giphy.com/media/WxJlZCf6OyNK7FBB7p/giphy.gif)
## Tabela de conteúdos

<!--ts-->
   * [Sobre](#sobre)
   * [Pré-requisitos](#pré-requisitos)
   * [Como usar](#como-usar)
      * [Crawler](#rodando-o-crawler)
      * [Back End](#rodando-o-back-end)
      * [Front End](#rodando-o-front-end)
   * [Tecnologias](#tecnologias)
<!--te-->

## Sobre
Este projeto Full Stack tem como objetivo a criação de um crawler que irá percorrer
perfils determinados no Instagram( no caso de participantes do BBB ) e atualizar em
uma página em tempo real o número de seguidores nelas presente.

## Pré-requisitos

Para realizar o teste do projeto, é preciso ter as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Reac.js](https://reactjs.org/). 
Bem como um editor de texto como o [VSCode](https://code.visualstudio.com/)

## Como Usar:

### Rodando o Crawler

```bash
# Clone este repositório
$ git clone <https://github.com/BBB_Follows>

# Acesse a pasta do projeto no terminal/cmd
$ cd BBB_Follows

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ npm install

# Crie um arquivo .env
$ touch .env  

# Adicione a ele as credenciais de login e senha 
# e a porta que o backend irá rodar com as alias de:
 INSTAUSER
 INSTASENHA
 PORT
# Execute crawler
$ node crawler.js

# O Crawler irá iniciar, logar no instagram 
# e começar a percorrer os perfils
```
![demonstration](https://media.giphy.com/media/bOInJcMLu8xyaZhQF3/giphy.gif)

### Rodando o Back End

```bash

# Rode o servidor 
$ node index.js

# O servidor inciará na porta adicionada ao arquivo .env 
# - acesse <http://localhost:PORT>
```
### Rodando o Front End

```bash

# Acesse a pasta do Front End
$ cd ../web

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O Front End inciará na porta:3000 - acesse <http://localhost:3000>
```
![demonstration](https://media.giphy.com/media/WxJlZCf6OyNK7FBB7p/giphy.gif)
## Tecnologias

* ReactJS
* MaterialUI/Core
* MaterialUI/Icons
* React-CountUp
* Axios
* NodeJS
* Dotenv
* Cors
* Express
* Puppeteer