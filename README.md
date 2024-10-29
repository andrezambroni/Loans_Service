# Loans_Service

Loans_Service é um serviço de API para gerenciar empréstimos. Ele permite criar, atualizar, deletar e consultar registros de empréstimos.

## Estrutura do Projeto




O servidor estará disponível em http://localhost:3000.

# Endpoints

## Criar Empréstimo
### POST /customer-loans
### POST /loans

## Atualizar Empréstimo
### PUT /loans/:id
### PATCH /loans/:id

## Deletar Empréstimo
### DELETE /loans/:id

## Consultar Empréstimo
### GET /loans/:id
### GET /loans


## Descrição dos Diretórios e Arquivos

- **API_DOCUMENTATION.md**: Contém a documentação detalhada da API, incluindo exemplos de uso e descrições dos endpoints.
- **package.json**: Arquivo de configuração do npm que lista as dependências do projeto e scripts de execução.
- **README.md**: Arquivo de documentação principal do projeto, com informações sobre instalação, uso e contribuição.
- **src/**: Diretório principal do código-fonte do projeto.
  - **controllers/**: Contém os controladores que lidam com as requisições HTTP e enviam respostas.
    - **loanController.js**: Controlador específico para operações relacionadas a empréstimos.
  - **database/**: Contém a configuração e os arquivos do banco de dados.
    - **database.js**: Configuração da conexão com o banco de dados.
    - **db.json**: Arquivo JSON que simula um banco de dados.
  - **middlewares/**: Contém middlewares para validação e outras funções intermediárias.
    - **validationMiddleware.js**: Middleware para validação de dados das requisições.
  - **models/**: Contém os modelos que representam as entidades do banco de dados.
    - **loanModel.js**: Modelo específico para a entidade de empréstimos.
  - **routes/**: Contém a definição das rotas da API.
    - **loanRoutes.js**: Rotas específicas para operações de empréstimos.
  - **server.js**: Arquivo principal que inicializa o servidor e configura as rotas.
  - **services/**: Contém os serviços que implementam a lógica de negócios.
    - **loanService.js**: Serviço específico para operações de empréstimos.
  - **test/**: Contém os testes unitários e de integração.
    - **loanService.test.js**: Testes para o serviço de empréstimos.
  - **utils/**: Contém utilitários e funções auxiliares.
    - **loanUtils.js**: Funções utilitárias para operações de empréstimos.