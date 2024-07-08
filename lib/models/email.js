import { Schema, model, models } from "mongoose";

const emailSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false, timestamps: true }
);

const Email = models.email || model("email", emailSchema);

export default Email;
