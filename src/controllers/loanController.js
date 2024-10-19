import { determineLoanOptions } from "../utils/loanUtils.js"
import validateCustomerData from "../middlewares/validationMiddleware.js"
import { Database } from "../database/database.js"

const db = new Database()

// createLoan: Determina os tipos de empréstimo disponíveis para um usuário e retorna essa informação.

export function createLoan(req, res) {
  let body = ""
  req.on("data", (chunk) => {
    body += chunk.toString()
  })
  req.on("end", () => {
    req.body = JSON.parse(body)
    validateCustomerData(req, res, () => {
      const response = determineLoanOptions(req.body)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(response))
    })
  })
}
// createLoanRecord: Cria um novo registro de empréstimo no banco de dados.

export function createLoanRecord(req, res) {
  let body = ""
  req.on("data", (chunk) => {
    body += chunk.toString()
  })
  req.on("end", () => {
    const loan = JSON.parse(body)
    loan.id = Date.now() // Simulando um ID único
    db.insert("loans", loan)
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
    db.update("loans", id, updatedLoan)
    const loan = db.select("loans", { id })[0]
    if (loan) {
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(loan))
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
    db.update("loans", id, partialUpdate)
    const loan = db.select("loans", { id })[0]
    if (loan) {
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(loan))
    } else {
      res.writeHead(404, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ error: "Loan not found" }))
    }
  })
}

export function deleteLoanRecord(req, res) {
  const { id } = req.params
  db.delete("loans", id)
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify({ message: "Loan deleted" }))
}

export function getLoanRecord(req, res) {
  const { id } = req.params
  const loan = db.select("loans", { id })[0]
  if (loan) {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(loan))
  } else {
    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ error: "Loan not found" }))
  }
}

export function getAllLoanRecords(req, res) {
  const loans = db.select("loans")
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify(loans))
}
