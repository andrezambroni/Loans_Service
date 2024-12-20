const { LoanOptions } = require("../services/loanService")

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

test("Cliente com salário entre R$ 3000 e R$ 5000, idade menor que 30 e localização SP", () => {
  const result = LoanOptions({
    age: 28,
    income: 4000,
    location: "SP",
    name: "Cliente B",
  })
  expect(result).toEqual({
    customer: "Cliente B",
    loans: [
      { type: "Pessoal", interest_rate: 4 },
      { type: "Garantia", interest_rate: 3 },
    ],
  })
})
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

test("Cliente com salário entre R$ 3000 e R$ 5000, idade menor que 30 e localização SP", () => {
  const result = LoanOptions({
    age: 28,
    income: 4000,
    location: "SP",
    name: "Cliente B",
  })
  expect(result).toEqual({
    customer: "Cliente B",
    loans: [
      { type: "Pessoal", interest_rate: 4 },
      { type: "Garantia", interest_rate: 3 },
    ],
  })
})

test("Cliente com salário igual ou superior a R$ 5000", () => {
  const result = LoanOptions({
    age: 35,
    income: 6000,
    location: "RJ",
    name: "Cliente C",
  })
  expect(result).toEqual({
    customer: "Cliente C",
    loans: [{ type: "Consignado", interest_rate: 2 }],
  })
})

test("Cliente com dados incompletos", () => {
  const result = LoanOptions({ age: 35, income: 6000, location: "RJ" })
  expect(result).toEqual({
    error: "Idade, salário, localização e nome são obrigatórios.",
  })
})

// Additional tests

test("Cliente com salário entre R$ 3000 e R$ 5000, idade maior que 30 e localização SP", () => {
  const result = LoanOptions({
    age: 35,
    income: 4000,
    location: "SP",
    name: "Cliente D",
  })
  expect(result).toEqual({
    customer: "Cliente D",
    loans: [],
  })
})

test("Cliente com salário entre R$ 3000 e R$ 5000, idade menor que 30 e localização RJ", () => {
  const result = LoanOptions({
    age: 28,
    income: 4000,
    location: "RJ",
    name: "Cliente E",
  })
  expect(result).toEqual({
    customer: "Cliente E",
    loans: [],
  })
})

test("Cliente com salário inferior a R$ 3000 e localização RJ", () => {
  const result = LoanOptions({
    age: 25,
    income: 2500,
    location: "RJ",
    name: "Cliente F",
  })
  expect(result).toEqual({
    customer: "Cliente F",
    loans: [
      { type: "Pessoal", interest_rate: 4 },
      { type: "Garantia", interest_rate: 3 },
    ],
  })
})

test("Cliente com salário igual a R$ 3000", () => {
  const result = LoanOptions({
    age: 30,
    income: 3000,
    location: "SP",
    name: "Cliente G",
  })
  expect(result).toEqual({
    customer: "Cliente G",
    loans: [
      { type: "Pessoal", interest_rate: 4 },
      { type: "Garantia", interest_rate: 3 },
    ],
  })
})
