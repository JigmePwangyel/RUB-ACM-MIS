import { Schema, model, models } from "mongoose";

const FinancialSchema = new Schema(
  {
    amount: {
      type: Number,
      default: 0,
      required: [true, "Amount is required"],
    },
    type: {
      type: String,
      enum: ["Income", "Expense"],
      required: [true, "Type is required"],
    },
    description: {
      type: String,
      required: false,
    },
    items: [
      {
        type: String,
        required: false,
      },
    ],
    eventID: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "events",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "members",
    },
  },
  { timestamps: true }
);

const financials = models.financials || model("financials", FinancialSchema);
export default financials;
