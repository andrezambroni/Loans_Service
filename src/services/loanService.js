export function reqLoan({ age, income, location, name }) {
  if (
    age === undefined ||
    income === undefined ||
    location === undefined ||
    name === undefined
  ) {
    return {
      error: "Idade, salário, localização e nome são obrigatórios.",
    }
  }

  let loans = []

  if (income <= 3000) {
    loans = [
      ...loans,
      { type: "Pessoal", interest_rate: 4 },
      { type: "Garantia", interest_rate: 3 },
    ]
  } else if (income > 3000 && income <= 5000 && age < 30 && location === "SP") {
    loans = [
      ...loans,
      { type: "Pessoal", interest_rate: 4 },
      { type: "Garantia", interest_rate: 3 },
    ]
  }

  if (income >= 5000) {
    loans = [...loans, { type: "Consignado", interest_rate: 2 }]
  }

  return {
    customer: name,
    loans: loans,
  }
}
