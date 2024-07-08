"use server";

import { NextResponse } from "next/server";

import Email from "@/lib/models/email";
import { connectDB } from "@/lib/config/db";

const db = async () => {
  await connectDB();
};

db();

export async function POST(request) {
  const formData = await request.formData();

  const emailData = {
    email: `${formData.get("email")}`,
  };

  await Email.create(emailData);

  return NextResponse.json({ success: true, message: "Email subscribed!!!" });
}

export async function GET(request) {
  const emails = await Email.find({});

  return NextResponse.json({ emails });
}

export async function DELETE(request) {
  const emailId = request.nextUrl.searchParams.get("id");

  await Email.findByIdAndDelete(emailId);

  return NextResponse.json({
    success: true,
    message: "Email deleted successfuly!!!",
  });
}
