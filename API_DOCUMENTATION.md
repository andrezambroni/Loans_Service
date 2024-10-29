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

## Erro de Validação (HTTP 400):

{
  "error": "Idade, salário, localização e nome são obrigatórios."
}

Endpoint: /loans
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
{
  "id": 123456789,
  "type": "Pessoal",
  "interest_rate": 4,
  "amount": 10000,
  "duration": 12
}

Endpoint: /loans/:id
Método: PUT
Descrição:
Este endpoint atualiza um registro de empréstimo existente.

Parâmetros de Entrada:
id (number): ID do empréstimo.
type (string): Tipo de empréstimo (por exemplo, "Pessoal").
interest_rate (number): Taxa de juros do empréstimo.
amount (number): Quantia do empréstimo.
duration (number): Duração do empréstimo em meses.
Possíveis Retornos:
Sucesso (HTTP 200):
{
  "id": 123456789,
  "type": "Pessoal",
  "interest_rate": 3.5,
  "amount": 10000,
  "duration": 24
}
Erro (HTTP 404):
{
  "error": "Loan not found"
}
Endpoint: /loans/:id
Método: PATCH
Descrição:
Este endpoint atualiza parcialmente um registro de empréstimo existente.

Parâmetros de Entrada:
id (number): ID do empréstimo.
Campos parciais a serem atualizados (por exemplo, interest_rate).
Possíveis Retornos:

Sucesso (HTTP 200):
{
  "id": 123456789,
  "type": "Pessoal",
  "interest_rate": 3.5,
  "amount": 10000,
  "duration": 12
}

Erro (HTTP 404):


{
  "error": "Loan not found"
}

Endpoint: /loans/:id
Método: DELETE
Descrição:
Este endpoint deleta um registro de empréstimo existente.

Parâmetros de Entrada:
id (number): ID do empréstimo.
Possíveis Retornos:
Sucesso (HTTP 200):
{
  "message": "Loan deleted"
}

Erro (HTTP 404):
{
  "error": "Loan not found"
}

Endpoint: /loans/:id
Método: GET
Descrição:
Este endpoint retorna um registro de empréstimo existente.

Parâmetros de Entrada:
id (number): ID do empréstimo.
Possíveis Retornos:
Sucesso (HTTP 200):
{
  "id": 123456789,
  "type": "Pessoal",
  "interest_rate": 4,
  "amount": 10000,
  "duration": 12
}

Erro (HTTP 404):
{
  "error": "Loan not found"
}

Endpoint: /loans
Método: GET
Descrição:
Este endpoint retorna todos os registros de empréstimo.

Possíveis Retornos:
Sucesso (HTTP 200):
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