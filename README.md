# Montador de tabelas

## Requisitos

- [ ] [NodeJS LTS](https://nodejs.org/en)
- [ ] [NextJS v14](https://nextjs.org/)

## Instalação

Para poder instalar ele localmente precisamos apenas executar os comandos de instalação padrão do NodeJS com qualquer gerenciador de pacote:

```shell
> $ pnpm i
# ou
> $ npm i
# ou
> $ yarn
```

## Executando o projeto

Para a execução do projeto, é tão simples quanto a instalação, você precisará executar apenas um comando com qualquer gerenciador de pacote de sua preferência (o mesmo que foi utilizado na instalação):

```shell
> $ pnpm dev
# ou
> $ npm run dev
# ou
> $ yarn dev
```

Depois do comando executado, você poderá acessar o projeto [Montador de tabelas](http://localhost:3000)

## Documentação do Montador de tabelas

O projeto consiste em um frontend simples onde há uma tabela onde o usuário poderá trocar o título da tabela e das colunas, e quando passado para o modo preview irá mostrar como a tabela ficaria preenchida com dados

<video controls src="./docs/demonstration.mp4"></video>

Ele foi construído com NextJs & ReactJS na sua ultima versão e Jest para os testes. Foi decidido uma estrutura simples para poder realizar a organização de arquivos:

#### 📂 Components

Essa pasta é responsável por guardar todos os componentes que são utilizados na aplicação, além dos componentes que são instalados pela biblioteca ShadCn UI (semelhante a material ui, porém com uma outra estratégia/abordagem)

#### 📂 Context

Responsável por guardar o contexto da aplicação, com os estados compartilhados entre os componentes e algumas funções para manipular esses estados.

#### 📂 Hooks

Armazena os hooks que foram criados na aplicação, no caso está armazenando um hook para ajudar no acesso ao contexto.

#### 📂 Lib

Onde está as configurações para a biblioteca ShadCn

#### 📂 Utils

Alguns utilitários utilizados/funções na aplicação
