import mongoose from "mongoose";

// Customer schema
const customerSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  email: { type: String },
});

export default mongoose.model("Customer", customerSchema);
