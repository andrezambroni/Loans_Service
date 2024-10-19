// Este arquivo pode ser usado para adicionar funções utilitárias se necessário
// Adicionar funções utilitárias que podem ser reutilizadas em diferentes partes do projeto.

//Funções para calcular taxas de juros.
//Funções para formatar dados de empréstimos.
//Qualquer outra lógica que possa ser reutilizada.


// Função para calcular a taxa de juros com base no tipo de empréstimo
export function calculateInterestRate(type) {
  const interestRates = {
    Pessoal: 4,
    Garantia: 3,
    Consignado: 2
  };
  return interestRates[type] || 0;
}

// Função para formatar a resposta do empréstimo
export function formatLoanResponse(customer, loans) {
  return {
    customer,
    loans
  };
}