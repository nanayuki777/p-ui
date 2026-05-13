import { AlertCircle, CheckCircle2, Clock3, FileText } from "lucide-react";
import { referralSteps, workOrders } from "@/mock/data";
import { cn, riskClass, riskLabel } from "@/lib/utils";
import { Card } from "@/components/ui/Card";

export function WorkOrderPanel() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
      <Card>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-sprout-600">预警工单系统</p>
            <h2 className="text-xl font-black text-ink">待处置工单</h2>
          </div>
          <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">红码 2</span>
        </div>

        <div className="space-y-3">
          {workOrders.map((order) => (
            <article key={order.id} className={cn("rounded-2xl border bg-white p-4", order.risk === "high" && "border-rose-200")}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-sprout-600" />
                    <h3 className="font-black text-ink">{order.student} · {order.className}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{order.reason}</p>
                </div>
                <span className={cn("rounded-full border px-3 py-1 text-xs font-bold", riskClass(order.risk))}>
                  {riskLabel(order.risk)}
                </span>
              </div>
              <div className="mt-3 grid gap-2 text-xs text-slate-500 sm:grid-cols-3">
                <span>{order.id}</span>
                <span>{order.owner}</span>
                <span>{order.updatedAt}</span>
              </div>
            </article>
          ))}
        </div>
      </Card>

      <Card className="border-rose-100">
        <div className="mb-5 flex items-start gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-rose-100 text-rose-600">
            <AlertCircle size={20} />
          </span>
          <div>
            <p className="text-xs font-semibold text-rose-600">四级转介 SOP</p>
            <h2 className="text-xl font-black text-ink">W-202605-071 处置追踪</h2>
            <p className="mt-1 text-sm text-slate-600">学校、社区、医院与家庭支持同步留痕。</p>
          </div>
        </div>

        <div className="space-y-4">
          {referralSteps.map((step, index) => (
            <div key={step.title} className="grid grid-cols-[36px_1fr] gap-3">
              <div className="flex flex-col items-center">
                <span className={cn("grid size-9 place-items-center rounded-full", step.done ? "bg-sprout-500 text-white" : "bg-slate-100 text-slate-400")}>
                  {step.done ? <CheckCircle2 size={18} /> : <Clock3 size={18} />}
                </span>
                {index < referralSteps.length - 1 && <span className="mt-2 h-12 w-px bg-sprout-200" />}
              </div>
              <div className="pb-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-black text-ink">{step.title}</h3>
                  <span className="text-xs font-semibold text-slate-500">{step.time}</span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
