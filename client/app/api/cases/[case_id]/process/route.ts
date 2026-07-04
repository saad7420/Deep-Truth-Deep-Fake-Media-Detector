import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { case_id: string } }
) {
  return NextResponse.json({
    id: Number(params.case_id),
    status: "processing",
  });
}