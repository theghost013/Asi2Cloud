import mongoose from "mongoose"
// import Inc from "mongoose-sequence"
// const AutoIncrement = Inc(mongoose)
import EmployeesSchema from "../schemas/employeesSchema.js"

// EmployeesSchema.plugin(AutoIncrement, { field: "id" })
const EmployeesModel = mongoose.model("Employees", EmployeesSchema)

export default EmployeesModel
