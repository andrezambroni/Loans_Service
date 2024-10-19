import { LoanOptions } from "../services/loanService.js"
import validateCustomerData from "../middlewares/validationMiddleware.js"

let loans = [] // Simulando um banco de dados em memória

export function createLoan(req, res) {
  let body = ""
  req.on("data", (chunk) => {
    body += chunk.toString()
  })
  req.on("end", () => {
    req.body = JSON.parse(body)
    validateCustomerData(req, res, () => {
      const response = LoanOptions(req.body)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(response))
    })
  })
}

export function createLoanRecord(req, res) {
  let body = ""
  req.on("data", (chunk) => {
    body += chunk.toString()
  })
  req.on("end", () => {
    const loan = JSON.parse(body)
    loan.id = loans.length + 1 // Simulando um ID único
    loans.push(loan)
    res.writeHead(201, { "Content-Type": "application/json" })
    res.end(JSON.stringify(loan))
  })
}

export function updateLoanRecord(req, res) {
  let body = ""
  req.on("data", (chunk) => {
    body += chunk.toString()
  })
  req.on("end", () => {
    const updatedLoan = JSON.parse(body)
    const { id } = req.params
    const index = loans.findIndex((loan) => loan.id == id)
    if (index !== -1) {
      loans[index] = { ...loans[index], ...updatedLoan }
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(loans[index]))
    } else {
      res.writeHead(404, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ error: "Loan not found" }))
    }
  })
}

export function patchLoanRecord(req, res) {
  let body = ""
  req.on("data", (chunk) => {
    body += chunk.toString()
  })
  req.on("end", () => {
    const partialUpdate = JSON.parse(body)
    const { id } = req.params
    const index = loans.findIndex((loan) => loan.id == id)
    if (index !== -1) {
      loans[index] = { ...loans[index], ...partialUpdate }
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(loans[index]))
    } else {
      res.writeHead(404, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ error: "Loan not found" }))
    }
  })
}

export function deleteLoanRecord(req, res) {
  const { id } = req.params
  const index = loans.findIndex((loan) => loan.id == id)
  if (index !== -1) {
    const deletedLoan = loans.splice(index, 1)
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(deletedLoan[0]))
  } else {
    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ error: "Loan not found" }))
  }
}

export function getLoanRecord(req, res) {
  const { id } = req.params
  const loan = loans.find((loan) => loan.id == id)
  if (loan) {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(loan))
  } else {
    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ error: "Loan not found" }))
  }
}

export function getAllLoanRecords(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify(loans))
}
