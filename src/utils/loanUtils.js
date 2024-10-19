// Função para calcular a taxa de juros com base no tipo de empréstimo
export function calculateInterestRate(type) {
  const interestRates = {
    Pessoal: 4,
    Garantia: 3,
    Consignado: 2,
  }
  return interestRates[type] || 0
}

// Função para formatar a resposta do empréstimo
export function formatLoanResponse(customer, loans) {
  return {
    customer,
    loans,
  }
}

// Função para determinar o tipo de empréstimo e calcular a taxa de juros
export function determineLoanOptions({ age, income, location, name }) {
  let loans = []

  if (income <= 3000) {
    loans.push({
      type: "Pessoal",
      interest_rate: calculateInterestRate("Pessoal"),
      message: `Empréstimo Pessoal com taxa de juros de 4%`,
    })
    loans.push({
      type: "Garantia",
      interest_rate: calculateInterestRate("Garantia"),
      message: `Empréstimo com Garantia com taxa de juros de 3%`,
    })
  } else if (income > 3000 && income <= 5000 && age < 30 && location === "SP") {
    loans.push({
      type: "Pessoal",
      interest_rate: calculateInterestRate("Pessoal"),
      message: `Empréstimo Pessoal com taxa de juros de 4%`,
    })
    loans.push({
      type: "Garantia",
      interest_rate: calculateInterestRate("Garantia"),
      message: `Empréstimo com Garantia com taxa de juros de 3%`,
    })
  }

  if (income >= 5000) {
    loans.push({
      type: "Consignado",
      interest_rate: calculateInterestRate("Consignado"),
      message: `Empréstimo Consignado com taxa de juros de 2%`,
    })
  }

  return formatLoanResponse(name, loans)
}
