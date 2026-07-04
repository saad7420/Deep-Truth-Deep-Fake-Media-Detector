import { z } from "zod";

/* =========================
   TYPES
========================= */

export const CaseSchema = z.object({
  id: z.number(),
  caseId: z.string(),
  title: z.string(),
  mediaType: z.enum(["audio", "video", "image"]),
  fileName: z.string(),
  fileUrl: z.string(),
  userId: z.string(),
  status: z.enum([ "processing","authentic","manipulated","inconclusive"]),
  riskScore: z.number(),
  syntheticLikelihood: z.number(),
  createdAt: z.string().optional(),
});

export type CaseResponse = z.infer<typeof CaseSchema>;
export type CasesListResponse = CaseResponse[];

export const CreateCaseSchema = z.object({
  title: z.string(),
  mediaType: z.enum(["audio", "video", "image"]),
  caseId: z.string(),
  fileName: z.string(),
  fileUrl: z.string(),
  userId: z.string(),
  status: z.enum(["processing","authentic","manipulated","inconclusive"]),
  riskScore: z.number(),
  syntheticLikelihood: z.number(),
});

export type CreateCaseRequest = z.infer<typeof CreateCaseSchema>;

/* =========================
   API ROUTES
========================= */

export const api = {
  cases: {
    list: {
      path: "/api/cases",
      method: "GET",
      responses: {
        200: z.array(CaseSchema),
      },
    },

    get: {
      path: "/api/cases/{case_id}",
      method: "GET",
      responses: {
        200: CaseSchema,
      },
    },

    create: {
      path: "/api/cases",
      method: "POST",
      responses: {
        201: CaseSchema,
        400: z.object({
          message: z.string(),
        }),
      },
    },

    process: {
      path: "/api/cases/{case_id}/process",
      method: "POST",
      responses: {
        200: CaseSchema,
      },
    },
  },

  auth: {
    user: {
      path: "/api/auth/user",
      method: "GET",
    },
  },
};

/* =========================
   URL BUILDER
========================= */

export function buildUrl(
  path: string,
  params?: Record<string, string | number>
) {
  let url = path;

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, String(value));
    });
  }

  return url;
}