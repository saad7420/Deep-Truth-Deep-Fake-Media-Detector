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
   GET SINGLE CASE
========================= */

export async function GET(
  req: Request,
  { params }: { params: { case_id: string } }
) {
  const id = Number(params.case_id);

  const found = cases.find((c) => c.id === id);

  if (!found) {
    return NextResponse.json(
      {
        message: "Case not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(found);
}

/* =========================
   PATCH CASE
========================= */

export async function PATCH(
  req: Request,
  { params }: { params: { case_id: string } }
) {
  const id = Number(params.case_id);

  const body = await req.json();

  const index = cases.findIndex((c) => c.id === id);

  if (index === -1) {
    return NextResponse.json(
      {
        message: "Case not found",
      },
      {
        status: 404,
      }
    );
  }

  cases[index] = {
    ...cases[index],
    ...body,
  };

  return NextResponse.json(cases[index]);
}

/* =========================
   DELETE CASE
========================= */

export async function DELETE(
  req: Request,
  { params }: { params: { case_id: string } }
) {
  const id = Number(params.case_id);

  cases = cases.filter((c) => c.id !== id);

  return NextResponse.json({
    success: true,
  });
}