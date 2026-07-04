import { NextResponse } from "next/server";

let cases = [
  {
    id: 1,
    caseId: "CASE-1001",
    title: "Deepfake Interview",
    mediaType: "video",
    fileName: "video.mp4",
    fileUrl: "/uploads/video.mp4",
    userId: "current-user",
    status: "processing",
    riskScore: 0,
    syntheticLikelihood: 0,
    createdAt: new Date().toISOString(),
  },
];

/* =========================
   GET ALL CASES
========================= */

export async function GET() {
  return NextResponse.json(cases);
}

/* =========================
   CREATE CASE
========================= */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newCase = {
      id: cases.length + 1,
      ...body,
      createdAt: new Date().toISOString(),
    };

    cases.unshift(newCase);

    return NextResponse.json(newCase, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create case",
      },
      {
        status: 400,
      }
    );
  }
}