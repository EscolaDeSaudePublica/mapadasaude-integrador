# Integrador do Mapas da Saúde

<p align="center">
    <img alt="company" src="https://img.shields.io/static/v1?label=company&message=ESP&color=13ad47&labelColor=0A1033">
    <img alt="license" src="https://img.shields.io/static/v1?label=license&message=GPL&color=13ad47&labelColor=0A1033">
    <img alt="stack" src="https://img.shields.io/static/v1?label=stack&message=node&color=13ad47&labelColor=0A1033">
    <img alt="stack" src="https://img.shields.io/static/v1?label=stack&message=typescript&color=3178c6&labelColor=0A1033">
</p>

## 📄 Introdução

Atualmente, o [Mapas da Sáude](https://link) necessita buscar as informações de algumas _APIs_ esternas para popular a sua base de dados. Por esse motivo, é necessário a implementação de alguma ferramenta para suprir essa demanda.

Objetivo desse projeto:

> Uma aplicação para que possibilite buscar dados/informações de fontes externas para criar/atualizar os dados do **Mapas da Saúde**.

## 🛠️ Arquitetura

Arquiterura do projeto

![cover](.github/arquitetura.png?style=flat)

## 🧰 Ferramentas utilizadas

- [VS Code](https://code.visualstudio.com/) - IDE de desenvolvimento
- [Insomnia](https://insomnia.rest/) - client REST
- [Docker](https://www.docker.com/) - gerenciardor de contêineres
- [Docker Compose](https://docs.docker.com/compose/) - ferramenta para definir e executar aplicativos Docker de vários contêineres

## 🖥 Tecnologias utilizadas

- [Node](https://nodejs.org/en/) - runtime JavaScript desenvolvido com o Chrome's V8 JavaScript engine.
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - linguagem de programação
- [Typescript](https://www.typescriptlang.org/) - superset para o Javascript
- [Jest](https://jestjs.io/pt-BR/) - framework de Testes em JavaScript com um foco na simplicidade
- [Yarn](https://classic.yarnpkg.com/en/) - gerenciador de dependências
- [Eslint](https://eslint.org/) - linter
- [Prettier](https://prettier.io/) - formatador de código

## 🔧 Configurando o projeto

Comandos necessários para a instalação do projeto:

```bash
# baixar o projeto
git clone https://github.com/EscolaDeSaudePublica/mapadasaude-integrador.git

# entrar na pasta do projeto
cd mapadasaude-integrador

# instalar as dependências do projeto usando yarn
yarn isntall

# instalar as dependências do projeto usando npm (opcional, recomendamos usar o yarn)
npm isntall

# criando aquivo de variáveis de hambiente
cp .exemple.env .env
```

Agora, será necessário editar as variáveis de hambiente que estão no arquivo `.env` criado no passo anterior.

Variáveis de hambiente:

- `MAPAS_URL` - URL da API do Mapas da Saúde
- `MAPAS_JWT` - Token de autenticação do Mapas da Saúde
- `SACS_URL` - URL da API do SACS
- `SACS_JWT` - Token de autenticação do SACS

> Essas variáveis estarão sendo inseridas de acordo com a necessidade do projeto.

Feito isso, agora está na hora de coloca o projeto para funcionar usando o `docker compose`:

```bash
# instalando o container usando docker compose
docker-compose up
```

Se tudo tiver ocorrendo corretamente, será exibita a segunte mensagem:

```bash
🔥 is alive 🔥
```

Outros comando auxiliáres:

```bash
# rodar testes
yarn test

# iniciar o projeto em modo desenvolvimento
yarn dev

# build do projeto
yarn build

# iniciar projeto sem usar o docker (necessário comando anterior)
yarn start

```
