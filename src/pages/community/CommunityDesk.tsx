import { Building2, CalendarPlus, Map, School } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function CommunityDesk() {
  return (
    <div className="space-y-6 pb-24 lg:pb-8">
      <section className="rounded-3xl bg-white/78 p-6 shadow-soft">
        <p className="text-xs font-semibold text-sprout-600">社区服务站工作台</p>
        <h1 className="mt-2 text-3xl font-black text-ink">网格化任务与辖区联动</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">承接学校发现后的家庭沟通、社区活动与资源转介。</p>
      </section>
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          [Map, "今日网格任务", "18 项", "6 项与学校预警工单关联"],
          [CalendarPlus, "社区活动管理", "4 场", "正念团体、亲子沟通沙龙"],
          [School, "辖区学校联动", "12 所", "清河湾中学需重点跟进"]
        ].map(([Icon, title, value, desc]) => (
          <Card key={title as string}>
            <span className="grid size-12 place-items-center rounded-2xl bg-sprout-100 text-sprout-700"><Icon size={22} /></span>
            <h2 className="mt-4 text-xl font-black text-ink">{title as string}</h2>
            <div className="mt-3 text-3xl font-black text-sprout-700">{value as string}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{desc as string}</p>
          </Card>
        ))}
      </div>
      <Card>
        <div className="flex items-center gap-3">
          <Building2 className="text-sprout-600" />
          <h2 className="text-xl font-black text-ink">北京市昌平区回龙观社区服务站</h2>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {["家庭访谈预约", "医院绿色通道", "学校回访记录"].map((item, index) => (
            <div key={item} className="rounded-2xl bg-cream p-4">
              <div className="text-sm font-bold text-ink">{item}</div>
              <div className="mt-2 text-2xl font-black text-sprout-700">{[7, 3, 14][index]}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
