import { ArrowRight, Filter } from "lucide-react";
import { heatmap } from "@/mock/data";
import { cn, riskLabel } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const tone = {
  low: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
  medium: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200",
  high: "bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-200 animate-pulse-soft"
};

export function RiskHeatmap() {
  return (
    <section className="rounded-3xl border border-white/70 bg-white/86 p-5 shadow-panel">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-sprout-600">昌平区学校心理健康风险热力图</p>
          <h2 className="mt-1 text-2xl font-black text-ink">北京市昌平区清河湾中学</h2>
          <p className="mt-2 text-sm text-slate-600">按年级与班级聚合展示，点击高关注班级进入工单与转介详情。</p>
        </div>
        <Button variant="secondary" icon={<Filter size={16} />}>筛选维度</Button>
      </div>

      <div className="mt-5 overflow-x-auto pb-2">
        <div className="min-w-[720px] space-y-3">
          {heatmap.map((row) => (
            <div key={row.grade} className="grid grid-cols-[72px_repeat(6,1fr)] gap-3">
              <div className="flex items-center text-sm font-bold text-slate-600">{row.grade}</div>
              {row.classes.map((cell) => (
                <button
                  key={`${row.grade}-${cell.name}`}
                  className={cn("group min-h-24 rounded-2xl border p-3 text-left transition", tone[cell.risk])}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-black">{cell.name}</span>
                    <ArrowRight className="opacity-0 transition group-hover:opacity-100" size={16} />
                  </div>
                  <div className="mt-4 text-2xl font-black">{cell.score}</div>
                  <div className="mt-1 text-xs">{riskLabel(cell.risk)} · {cell.count} 人需跟进</div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">绿色：常规守护</span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">黄色：重点关注</span>
        <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-700">红色：快速协同处置</span>
      </div>
    </section>
  );
}
