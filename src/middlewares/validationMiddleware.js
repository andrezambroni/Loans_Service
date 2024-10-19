// Este arquivo pode ser usado para adicionar validações de entrada se necessário
function validateCustomerData(req, res, next) {
  const { age, income, location, name } = req.body

  if (
    age === undefined ||
    income === undefined ||
    location === undefined ||
    name === undefined
  ) {
    return res
      .status(400)
      .json({ error: "Idade, salário, localização e nome são obrigatórios." })
  }

  if (
    typeof age !== "number" ||
    typeof income !== "number" ||
    typeof location !== "string" ||
    typeof name !== "string"
  ) {
    return res
      .status(400)
      .json({
        error:
          "Tipos de dados inválidos. Idade e salário devem ser números. Localização e nome devem ser strings.",
      })
  }

  next()
}

export default validateCustomerData