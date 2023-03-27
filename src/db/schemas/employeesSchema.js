import { Schema } from "mongoose"

const EmployeesSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
})

export default EmployeesSchema
