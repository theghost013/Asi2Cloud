import EmployeesModel from "../db/models/employeesModel.js"

const formatEmployee = (employee) => {
  return {
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    emailId: employee.emailId,
  }
}

const employees = ({ app }) => {
  app.get("/api/v1/employees", async (req, res) => {
    const employees = await EmployeesModel.find()
    let formatedEmployees = []
    employees.forEach((employee) => {
      formatedEmployees.push(formatEmployee(employee))
    })
    res.send(formatedEmployees)
  })

  app.get("/api/v1/employees/:id", async (req, res) => {
    const { id } = req.params
    const employee = await EmployeesModel.find({ id: id })
    res.send(formatEmployee(employee))
  })

  app.post("/api/v1/employees", async (req, res) => {
    const newEmployee = req.body
    const lastEmployee = await EmployeesModel.find({}).sort({ id: -1 })

    let lastId = 0

    if (lastEmployee.length === 0) {
      lastId = 0
    } else {
      lastId = lastEmployee[0].id
    }

    newEmployee.id = lastId + 1

    EmployeesModel.create(newEmployee)
    res.send(newEmployee)
  })
}

export default employees
