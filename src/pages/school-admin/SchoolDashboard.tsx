import { Activity, Clock, Download, GraduationCap, ShieldCheck, Users } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Button } from "@/components/ui/Button";
import { Card, SectionTitle } from "@/components/ui/Card";
import { RiskHeatmap } from "@/components/widgets/RiskHeatmap";
import { WorkOrderPanel } from "@/components/widgets/WorkOrderPanel";
import { kpis, trendData } from "@/mock/data";

const icons = [ShieldCheck, Users, Activity, Clock];

export default function SchoolDashboard() {
  return (
    <div className="space-y-6 pb-24 lg:pb-8">
      <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="rounded-3xl bg-white/72 p-6 shadow-soft">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <SectionTitle
              eyebrow="学校 / 教育局管理后台"
              title="心理健康协同守护数据概览"
              desc="面向政府采购与校级管理场景，聚合测评、干预、转介和服务资源，用数据帮助学校更早发现、更快响应。"
            />
            <Button icon={<Download size={16} />}>下载月报</Button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {kpis.map((item, index) => {
              const Icon = icons[index];
              return (
                <Card key={item.label} className="bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-500">{item.label}</span>
                    <span className="grid size-10 place-items-center rounded-2xl bg-sprout-100 text-sprout-700">
                      <Icon size={19} />
                    </span>
                  </div>
                  <div className="mt-4 text-3xl font-black text-ink">{item.value}</div>
                  <div className="mt-2 text-xs font-bold text-sprout-600">近 30 天 {item.delta}</div>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="bg-sprout-700 p-6 text-white">
          <p className="text-sm font-semibold text-sprout-100">今日联动状态</p>
          <h2 className="mt-2 text-3xl font-black">12 所学校在线</h2>
          <p className="mt-3 text-sm leading-6 text-sprout-50">昌平区学校、社区服务站与合作医院已完成今日数据同步，红色工单平均响应时间 26 分钟。</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/14 p-4">
              <div className="text-2xl font-black">98.4%</div>
              <div className="text-xs text-sprout-50">数据上报率</div>
            </div>
            <div className="rounded-2xl bg-white/14 p-4">
              <div className="text-2xl font-black">43</div>
              <div className="text-xs text-sprout-50">今日服务人次</div>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
        <Card className="h-[330px]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-sprout-600">风险趋势</p>
              <h2 className="text-xl font-black text-ink">近六个月预警与干预趋势</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="82%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="high" name="红色预警" stroke="#E86D6D" strokeWidth={4} dot={{ r: 4, fill: "#E86D6D" }} />
              <Line type="monotone" dataKey="medium" name="黄色关注" stroke="#F2B84B" strokeWidth={4} dot={{ r: 4, fill: "#F2B84B" }} />
              <Line type="monotone" dataKey="intervention" name="已干预" stroke="#7FB069" strokeWidth={4} dot={{ r: 4, fill: "#7FB069" }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="h-[330px]">
          <p className="text-xs font-semibold text-sprout-600">测评管理</p>
          <h2 className="text-xl font-black text-ink">本轮测评进度</h2>
          <div className="mt-6 space-y-5">
            {[
              ["初一年级", "94%", "bg-sprout-500"],
              ["初二年级", "89%", "bg-amber-400"],
              ["初三年级", "96%", "bg-sprout-500"]
            ].map(([name, value, color]) => (
              <div key={name}>
                <div className="mb-2 flex justify-between text-sm font-semibold text-slate-600">
                  <span>{name}</span>
                  <span>{value}</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${color}`} style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-7 w-full" icon={<GraduationCap size={16} />}>发起新测评</Button>
        </Card>
      </section>

      <RiskHeatmap />
      <WorkOrderPanel />
    </div>
  );
}
