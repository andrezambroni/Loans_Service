<h1 align="center" style="font-weight: bold;">Loans_Service 💻</h1>

<p align="center">
 <a href="#sobre">Descrição do Projeto</a> •
 <a href="#started">Como executar</a> • 
 <a href="#endpoints">API Endpoints</a> •
 <a href="#testes">Testes</a>
</p>

<p align="border">
<h2 id="sobre">❔Sobre o projeto </h2>

- Loans_Service é um serviço de API para gerenciar empréstimos. Ele permite criar, atualizar, deletar e consultar registros de empréstimos.
- Construído com Node.js e Express.
- Para facilitar o gerenciamento de empréstimos de clientes.
</p>

<h2 id="started">🚀 Como executar</h2>

O projeto será executado na porta 3000

<h3>📝 Pré-requisitos</h3>

- Node.js
- npm 

### Etapas

```bash
# Instalar dependências
npm init -y

# Executar o servidor
npm run dev

```

<h2 id="endpoints"> 📍API EndPoints </h2>

## Endpoint: /customer-loans

### Método: POST

### Descrição:
Este endpoint determina quais modalidades de empréstimo uma pessoa tem acesso com base em sua idade, salário e localização.

### Parâmetros de Entrada:

- `age` (number): Idade do cliente.
- `income` (number): Salário do cliente.
- `location` (string): Localização do cliente (por exemplo, "SP").
- `name` (string): Nome do cliente.

### Possíveis Retornos:

#### Sucesso (HTTP 200):
```json
{
  "customer": "Nome do Cliente",
  "loans": [
    { "type": "Pessoal", "interest_rate": 4 },
    { "type": "Garantia", "interest_rate": 3 }
  ]
}
```


## Erro de Validação (HTTP 400):

{
  "error": "Idade, salário, localização e nome são obrigatórios."
}

### Endpoint: /loans
Método: POST   
Descrição:
Este endpoint cria um novo registro de empréstimo.

Parâmetros de Entrada:   
type (string): Tipo de empréstimo (por exemplo, "Pessoal").   
interest_rate (number): Taxa de juros do empréstimo.   
amount (number): Quantia do empréstimo.   
duration (number): Duração do empréstimo em meses.

Possíveis Retornos:   
Sucesso (HTTP 201):    
```json
{
  "id": 123456789,
  "type": "Pessoal",
  "interest_rate": 4,
  "amount": 10000,
  "duration": 12
}
```

Endpoint: /loans/:id   
Método: PUT   
Descrição: Este endpoint atualiza um registro de empréstimo existente.

Parâmetros de Entrada:
id (number): ID do empréstimo.   
type (string): Tipo de empréstimo (por exemplo, "Pessoal").   
interest_rate (number): Taxa de juros do empréstimo.   
amount (number): Quantia do empréstimo.   
duration (number): Duração do empréstimo em meses.   

Possíveis Retornos:

Sucesso (HTTP 200):
```json
{
  "id": 123456789,
  "type": "Pessoal",
  "interest_rate": 3.5,
  "amount": 10000,
  "duration": 24
}
```
```json
Erro (HTTP 404):
{
  "error": "Loan not found"
}
```
Endpoint: /loans/:id   
Método: PATCH   
Descrição: Este endpoint atualiza parcialmente um registro de empréstimo existente.   

Parâmetros de Entrada: id (number): ID do empréstimo.   
Campos parciais a serem atualizados (por exemplo, interest_rate).   
Possíveis Retornos:   

```json
Sucesso (HTTP 200):
{
  "id": 123456789,
  "type": "Pessoal",
  "interest_rate": 3.5,
  "amount": 10000,
  "duration": 12
}
```
```json
Erro (HTTP 404):

{
  "error": "Loan not found"
}
```

Endpoint: /loans/:id   
Método: DELETE   
Descrição: Este endpoint deleta um registro de empréstimo existente.

Parâmetros de Entrada: id (number): ID do empréstimo.   
Possíveis Retornos: Sucesso (HTTP 200):   
```json
{
  "message": "Loan deleted"
}
```
```json
Erro (HTTP 404):
{
  "error": "Loan not found"
}
```
Endpoint: /loans/:id   
Método: GET   
Descrição: Este endpoint retorna um registro de empréstimo existente.   

Parâmetros de Entrada: id (number): ID do empréstimo.   
Possíveis Retornos: Sucesso (HTTP 200):   
```json
{
  "id": 123456789,
  "type": "Pessoal",
  "interest_rate": 4,
  "amount": 10000,
  "duration": 12
}
```
```json
Erro (HTTP 404):
{
  "error": "Loan not found"
}
```

Endpoint: /loans   
Método: GET   
Descrição: Este endpoint retorna todos os registros de empréstimo.   

Possíveis Retornos: Sucesso (HTTP 200):
```json
[
  {
    "id": 123456789,
    "type": "Pessoal",
    "interest_rate": 4,
    "amount": 10000,
    "duration": 12
  },
  {
    "id": 987654321,
    "type": "Garantia",
    "interest_rate": 3,
    "amount": 5000,
    "duration": 6
  }
]
```

<h2 id="testes">🧪 Testes</h2>
Para executar os testes, você pode usar o comando:
- npm test

## Exemplos de Testes

Cliente com salário inferior a R$ 3000
```json
test("Cliente com salário inferior a R$ 3000", () => {
  const result = LoanOptions({
    age: 25,
    income: 2500,
    location: "SP",
    name: "Cliente A",
  })
  expect(result).toEqual({
    customer: "Cliente A",
    loans: [
      { type: "Pessoal", interest_rate: 4 },
      { type: "Garantia", interest_rate: 3 },
    ],
  })
})
```
