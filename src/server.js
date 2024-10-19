import http from "http"
import { reqLoan } from "./services/loanService.js"

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/customer-loans") {
    let body = ""
    req.on("data", (chunk) => {
      body += chunk.toString()
    })
    req.on("end", () => {
      const customerData = JSON.parse(body)
      const response = reqLoan(customerData)
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(response))
    })
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("Not Found")
  }
})

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/")
})
