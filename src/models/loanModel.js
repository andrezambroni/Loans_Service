// Este arquivo pode ser usado para definir modelos de dados se necessário


// Definir modelos de dados para empréstimos e clientes.
// Estruturas de dados para representar empréstimos e clientes.
// Funções para validar e manipular esses dados.

// Modelo de dados para um empréstimo
export class Loan {
  constructor(type, interestRate) {
    this.type = type;
    this.interestRate = interestRate;
  }
}

// Modelo de dados para um cliente
export class Customer {
  constructor(age, income, location, name) {
    this.age = age;
    this.income = income;
    this.location = location;
    this.name = name;
  }

  isValid() {
    return (
      typeof this.age === 'number' &&
      typeof this.income === 'number' &&
      typeof this.location === 'string' &&
      typeof this.name === 'string'
    );
  }
}