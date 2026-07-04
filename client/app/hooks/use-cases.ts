"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl, type CreateCaseRequest, type CaseResponse, type CasesListResponse } from "@/app/shared/routes";
import { useToast } from "@/app/hooks/use-toast";
import { isUnauthorizedError, redirectToLogin } from "@/app/lib/auth-utils";

export function useCases() {
  const { toast } = useToast();
  return useQuery({
    queryKey: [api.cases.list.path],
    queryFn: async () => {
      const res = await fetch(api.cases.list.path, { credentials: "include" });
      if (res.status === 401) {
        throw new Error("401: Unauthorized");
      }
      if (!res.ok) throw new Error("Failed to fetch cases");
      return api.cases.list.responses[200].parse(await res.json());
    },
    retry: (failureCount, error) => {
      if (isUnauthorizedError(error)) return false;
      return failureCount < 3;
    },
  });
}

export function useCase(id: number) {
  return useQuery({
    queryKey: [api.cases.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.cases.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 401) throw new Error("401: Unauthorized");
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch case");
      return api.cases.get.responses[200].parse(await res.json());
    },
    // Poll while processing
    refetchInterval: (query) => {
      const data = query.state.data as CaseResponse | undefined;
      return data?.status === 'processing' ? 2000 : false;
    },
  });
}

export function useCreateCase() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateCaseRequest) => {
      const res = await fetch(api.cases.create.path, {
        method: api.cases.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: "include",
      });
      
      if (res.status === 401) throw new Error("401: Unauthorized");
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.cases.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to create case');
      }
      return api.cases.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.cases.list.path] });
      toast({
        title: "Case Created",
        description: "Media uploaded and queued for forensic analysis.",
      });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        redirectToLogin(toast);
      } else {
        toast({
          title: "Upload Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    },
  });
}

export function useProcessCase() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: number) => {
      const url = buildUrl(api.cases.process.path, { case_id: id });
      const res = await fetch(url, { 
        method: api.cases.process.method,
        credentials: "include" 
      });
      
      if (res.status === 401) throw new Error("401: Unauthorized");
      if (!res.ok) throw new Error('Failed to start processing');
      return api.cases.process.responses[200].parse(await res.json());
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [api.cases.get.path, data.id] });
      queryClient.invalidateQueries({ queryKey: [api.cases.list.path] });
    },
    onError: (error) => {
      if (isUnauthorizedError(error)) {
        redirectToLogin(toast);
      } else {
        toast({
          title: "Processing Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  });
}
