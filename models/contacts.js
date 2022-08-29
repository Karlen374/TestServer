import mongoose from "mongoose";

const Contact = new mongoose.Schema({
  name: { type: String, required: true },
  surName: { type: String, required: true },
  age: { type: Number, required:true },
  gender: { type: String, required: true },
  city: { type: String, required: true },
  number: { type: String, required: true },
  authorId: { type: String, required: true },
  _id: { type: String, required: true }
}, { versionKey: false })

export default mongoose.model('Contact',Contact)