import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const form = Object.fromEntries((await request.formData()).entries());
  console.log("New submission", form);
  return NextResponse.json({
    ok: true,
    message: "Submission received. Email notification hook ready.",
  });
}
