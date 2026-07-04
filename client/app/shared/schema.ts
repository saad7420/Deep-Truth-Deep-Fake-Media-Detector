import { z } from "zod";

//
// ENUMS
//

export const MediaTypeSchema = z.enum([
  "image",
  "video",
  "audio",
]);

export const CaseStatusSchema = z.enum([
  "processing",
  "authentic",
  "manipulated",
  "inconclusive",
  "failed",
]);

//
// ANALYSIS RESULT
//

export const AnalysisResultSchema = z.object({
  id: z.string(),

  case_id: z.string(),

  model_name: z.string(),

  confidence: z.number(),

  label: z.string(),

  details: z.record(z.any()).optional(),

  created_at: z.string(),
});

//
// CASE SCHEMA
//

export const CaseSchema = z.object({
  id: z.string(),

  caseId: z.string(),

  title: z.string(),

  mediaType: MediaTypeSchema,

  status: CaseStatusSchema,

  riskScore: z.number(),

  syntheticLikelihood: z.number(),

  fileName: z.string().optional(),

  fileUrl: z.string().optional(),

  fileSize: z.number().optional(),

  userId: z.string().optional(),

  notes: z.string().optional(),

  createdAt: z.string().optional(),

  updatedAt: z.string().optional(),

  analysisResults: z.array(AnalysisResultSchema),
});

//
// CREATE CASE INPUT
//

export const CreateCaseSchema = z.object({
  title: z.string().min(1),

  mediaType: MediaTypeSchema,

  file: z.any(),

  userId: z.string().optional(),

  notes: z.string().optional(),
});

//
// DASHBOARD STATS
//

export const DashboardStatsSchema = z.object({
  totalCases: z.number(),

  authentic: z.number(),

  manipulated: z.number(),

  processing: z.number(),

  avgRiskScore: z.number(),
});

//
// TYPES
//

export type MediaType = z.infer<
  typeof MediaTypeSchema
>;

export type CaseStatus = z.infer<
  typeof CaseStatusSchema
>;

export type AnalysisResult = z.infer<
  typeof AnalysisResultSchema
>;

export type Case = z.infer<
  typeof CaseSchema
>;

export type CreateCaseRequest = z.infer<
  typeof CreateCaseSchema
>;

export type DashboardStats = z.infer<
  typeof DashboardStatsSchema
>;

//
// Visualization Structure
//

export type SpectralPoint = {
  frequency: number;
  magnitude: number;
  anomaly: boolean;
};