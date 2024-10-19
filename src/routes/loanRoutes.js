import {
  createLoan,
  createLoanRecord,
  updateLoanRecord,
  patchLoanRecord,
  deleteLoanRecord,
  getLoanRecord,
  getAllLoanRecords,
} from "../controllers/loanController.js"

export const loanRoutes = [
  {
    method: "POST",
    path: "/customer-loans",
    controller: createLoan,
  },
  {
    method: "POST",
    path: "/loans",
    controller: createLoanRecord,
  },
  {
    method: "PUT",
    path: "/loans/:id",
    controller: updateLoanRecord,
  },
  {
    method: "PATCH",
    path: "/loans/:id",
    controller: patchLoanRecord,
  },
  {
    method: "DELETE",
    path: "/loans/:id",
    controller: deleteLoanRecord,
  },
  {
    method: "GET",
    path: "/loans/:id",
    controller: getLoanRecord,
  },
  {
    method: "GET",
    path: "/loans",
    controller: getAllLoanRecords,
  },
]
