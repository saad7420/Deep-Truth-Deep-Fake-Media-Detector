import { cn } from "@/app/lib/utils";
import { Activity, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

type Status = 'processing' | 'authentic' | 'manipulated';

export function StatusBadge({ status, className }: { status: string, className?: string }) {
  const config = {
    processing: {
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      icon: Loader2,
      label: "ANALYZING",
      animate: true
    },
    authentic: {
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      icon: CheckCircle2,
      label: "AUTHENTIC",
      animate: false
    },
    manipulated: {
      color: "bg-red-500/10 text-red-400 border-red-500/20",
      icon: AlertTriangle,
      label: "MANIPULATED",
      animate: false
    }
  };

  const current = config[status as Status] || config.processing;
  const Icon = current.icon;

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-medium uppercase tracking-wider",
      current.color,
      className
    )}>
      <Icon className={cn("w-3.5 h-3.5", current.animate && "animate-spin")} />
      {current.label}
    </div>
  );
}
