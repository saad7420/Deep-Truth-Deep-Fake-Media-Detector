import { z } from "zod";

/* =========================
   CONFIG
========================= */

const API_BASE = "http://localhost:8000";

/* =========================
   TYPES
========================= */

export const CaseSchema = z.object({
  id: z.number(),
  caseId: z.string(),
  title: z.string().optional(),
  mediaType: z.enum(["audio", "video", "image"]).optional(),
  fileName: z.string(),
  fileUrl: z.string(),
  userId: z.string(),
  status: z.enum([
    "processing",
    "authentic",
    "manipulated",
    "inconclusive",
  ]),
  riskScore: z.number(),
  syntheticLikelihood: z.number(),
  createdAt: z.string().optional(),
});

export type CaseResponse = z.infer<typeof CaseSchema>;

/* =========================
   HELPER
========================= */

function buildUrl(path: string, params?: Record<string, string>) {
  let url = path;

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, value);
    });
  }

  return `${API_BASE}${url}`;
}

async function apiFetch<T>(url: string, schema: z.ZodSchema<T>) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("API error");
  }

  const data = await res.json();
  return schema.parse(data);
}

/* =========================
   CASES API
========================= */

export const CasesAPI = {
  // GET all cases
  list: async () => {
    return apiFetch(
      buildUrl("/api/cases"),
      z.array(CaseSchema)
    );
  },

  // GET single case
  get: async (caseId: string) => {
    return apiFetch(
      buildUrl("/api/cases/{case_id}", { case_id: caseId }),
      CaseSchema
    );
  },

  // CREATE (upload)
  create: async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(buildUrl("/api/cases"), {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Upload failed");
    }

    const data = await res.json();
    return CaseSchema.parse(data);
  },
};