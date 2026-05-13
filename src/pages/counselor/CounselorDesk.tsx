import { ClipboardList, FilePenLine, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function CounselorDesk() {
  return (
    <div className="space-y-6 pb-24 lg:pb-8">
      <section className="rounded-3xl bg-white/78 p-6 shadow-soft">
        <p className="text-xs font-semibold text-sprout-600">心理咨询师工作台</p>
        <h1 className="mt-2 text-3xl font-black text-ink">预约、记录与督导协同</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">面向线下服务团队，支持咨询记录标准化沉淀与必要时的督导申请。</p>
      </section>
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          [UserCheck, "今日预约", "8 人", "2 人为学校转介"],
          [FilePenLine, "待补咨询记录", "5 份", "最长延迟 18 小时"],
          [ClipboardList, "督导申请", "2 条", "红色工单联合会诊"]
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
        <h2 className="text-xl font-black text-ink">下一场咨询</h2>
        <p className="mt-2 text-sm text-slate-600">小芽 A017 · 2026-05-14 15:30 · 昌平区青少年心理服务中心 2 号咨询室</p>
        <Button className="mt-5">进入咨询记录</Button>
      </Card>
    </div>
  );
}
