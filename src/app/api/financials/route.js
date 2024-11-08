import { connectToDB } from "../../../utils/database";
import financials from "../../../models/financials";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const { ObjectId } = mongoose.Types;

//Add a finance record
export const POST = async (req) => {
  try {
    const {
      userId,
      amount,
      type,
      category,
      description = "",
      eventID = null,
    } = await req.json();

    // Connect to the database
    await connectToDB();

    const createdBy = userId; // We extract the user ID from token/session.

    // Create new financial record
    const newFinRecord = new financials({
      amount,
      type,
      category,
      description,
      eventID, // Optional field; it can be `null`
      createdBy, // Automatically set from authenticated user
    });

    const savedFinancial = await newFinRecord.save();

    // Return the newly created financial record as JSON
    return new Response(JSON.stringify(savedFinancial), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
        message: "Error adding finance record",
      }),
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
  } catch (error) {}
};
