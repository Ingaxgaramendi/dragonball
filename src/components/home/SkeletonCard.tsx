import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
      <Skeleton className="h-40 w-full bg-white/5 rounded-none" />
      <div className="p-4 space-y-3">
        <div className="space-y-1.5">
          <Skeleton className="h-3.5 w-28 bg-white/5" />
          <Skeleton className="h-3 w-20 bg-white/5" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Skeleton className="h-10 bg-white/5 rounded-lg" />
          <Skeleton className="h-10 bg-white/5 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
