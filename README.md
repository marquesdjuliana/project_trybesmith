
**Olá, olá!** Bem-vinda(o) ao repositório do projeto **Trybesmith** !

Este projeto fez parte das avaliações do módulo de Backend da Trybe, consiste na criação de uma API para uma loja de itens medievais, como espadas personalizadas, utilizando Typescript e Sequelize.

## Funcionalidades

O projeto da Loja de Itens Medievais oferece as seguintes funcionalidades:
- *Cadastro de Produtos*: um endpoint para o cadastro de produtos com testes abrangendo essa funcionalidade. Os produtos são salvos na tabela `products` do banco de dados.
- *Listagem de Produtos*: um endpoint para a listagem de produtos e testes que garantem seu correto funcionamento.
- *Listagem de Pedidos*: um endpoint para listar todos os pedidos, incluindo os IDs dos produtos associados a eles.
- *Login de Pessoas Usuárias*: um endpoint para o login de pessoas usuárias com validação dos campos `username` e `password` no banco de dados. Geração de um token JWT em caso de sucesso no login.
- *Validações de Produtos*: implementação de validações relacionadas ao cadastro de produtos.


## Habilidades Desenvolvidas

**Hard Skills** desenvolvidas:

- Docker e Docker Compose
- Node.js
- npm
- Outras dependências listadas no arquivo `package.json`

**Soft Skills** desenvolvidas:

Além das habilidades técnicas, este projeto também foi uma oportunidade para desenvolver habilidades de soft skills, como:

Adaptabilidade: Ao enfrentar desafios e mudanças no decorrer do projeto, a capacidade de se adaptar a novas circunstâncias e aceitar a flexibilidade foi uma habilidade essencial.
Organização e Gerenciamento de Tarefas: A capacidade de gerenciar tarefas, definir prioridades e manter um fluxo de trabalho organizado foi crucial para a conclusão bem-sucedida do projeto.

## Instalação
Se deseja experimentar o projeto em sua máquina local, siga estas etapas:

1. Clone o repositório:
```sh
git clone git@github.com:marquesdjuliana/project_trybesmith.git
```
2. Entre na pasta do repositório:
```sh
cd project_trybesmith 
```
3. Rode os serviços app-trybesmith e db com o comando:
```sh
docker-compose up -d --build
```
Esses serviços irão inicializar um container chamado trybesmith_api e outro chamado trybesmith_db.

4. Use o comando para entrar no container:
```sh
docker exec -it trybesmith_api bash
```

**# :construction: README em construção! :construction:**
Sinta-se à vontade para explorar este projeto, acompanhar meu crescimento e contribuir, se desejar. Se você tiver alguma sugestão, feedback ou quiser trocar conhecimentos, será um prazer conectar com você no LinkedIn!


