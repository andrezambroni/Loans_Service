import http from "http"
import { loanRoutes } from "./routes/loanRoutes.js"

const server = http.createServer((req, res) => {
  const route = loanRoutes.find(
    (r) =>
      r.method === req.method &&
      new RegExp(`^${r.path.replace(/:\w+/g, "\\w+")}$`).test(req.url)
  )

  if (route) {
    const match = req.url.match(
      new RegExp(`^${route.path.replace(/:\w+/g, "(\\w+)")}$`)
    )
    if (match) {
      req.params = {}
      const paramNames = route.path.match(/:(\w+)/g)
      if (paramNames) {
        paramNames.forEach((name, index) => {
          req.params[name.substring(1)] = match[index + 1]
        })
      }
    }
    route.controller(req, res)
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("Not Found")
  }
})

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/")
})
