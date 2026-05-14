import { BotMessageSquare, CalendarCheck, HeartHandshake, PlayCircle, RotateCw, Send, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { parentCourses } from "@/mock/data";

export default function ParentHome() {
  return (
    <div className="space-y-6 pb-24 lg:pb-8">
      <section className="grid gap-5 lg:grid-cols-[1fr_380px]">
        <div className="rounded-3xl bg-white/78 p-6 shadow-soft">
          <p className="text-xs font-semibold text-sprout-600">家长端 App</p>
          <h1 className="mt-2 text-3xl font-black text-ink">孩子状态概览</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            仅展示脱敏聚合趋势，不呈现对话原文。帮助家长看见孩子近期节律，并获得可执行的陪伴建议。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["本周沟通舒适度", "76", "+6"],
              ["睡眠节律", "稳定", "连续 5 天"],
              ["陪伴建议", "3 条", "AI 今日更新"]
            ].map(([label, value, sub]) => (
              <Card key={label} className="bg-white p-4">
                <div className="text-sm font-semibold text-slate-500">{label}</div>
                <div className="mt-3 text-3xl font-black text-ink">{value}</div>
                <div className="mt-2 text-xs font-bold text-sprout-600">{sub}</div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-cream">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl bg-sprout-500 text-white"><HeartHandshake size={22} /></span>
            <div>
              <p className="text-xs font-semibold text-sprout-700">今日陪伴建议</p>
              <h2 className="text-xl font-black text-ink">先复述，再建议</h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">当孩子表达“我不想学了”时，可以先说“你今天真的很累”，让孩子先感到被理解。</p>
          <Button className="mt-5 w-full" icon={<UsersRound size={16} />}>生成家庭会议指南</Button>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
        <Card>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-sprout-600">家长智慧课堂</p>
              <h2 className="text-xl font-black text-ink">科普文章与课程资源</h2>
            </div>
            <Button variant="secondary">12-15岁</Button>
          </div>
          <div className="space-y-3">
            {parentCourses.map((course) => (
              <article key={course.title} className="grid gap-4 rounded-2xl border border-sprout-100 bg-white p-4 md:grid-cols-[96px_1fr_auto]">
                <div className="grid aspect-video place-items-center rounded-2xl bg-sprout-100 text-sprout-700">
                  <PlayCircle size={28} />
                </div>
                <div>
                  <h3 className="font-black text-ink">{course.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{course.age} · {course.minutes} 分钟 · 可对接慕课/学堂在线</p>
                  <div className="mt-3 h-2 rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-sprout-500" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
                <Button variant="secondary">继续</Button>
              </article>
            ))}
          </div>
        </Card>

        <div className="space-y-5">
          <Card>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-sprout-100 text-sprout-700"><BotMessageSquare size={21} /></span>
              <div>
                <p className="text-xs font-semibold text-sprout-600">亲子沟通小助手</p>
                <h2 className="text-xl font-black text-ink">问 AI 怎么开口</h2>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-cream p-4 text-sm leading-6 text-slate-600">
              孩子说“别管我”，我该怎么回应？
            </div>
            <div className="mt-3 rounded-2xl bg-sprout-50 p-4 text-sm leading-6 text-slate-700">
              可以先把控制感降下来：“好，我先不追问。你需要我在门外等你，还是晚点再聊？”
            </div>
            <Button className="mt-4 w-full" icon={<Send size={16} />}>继续提问</Button>
          </Card>

          <Card>
            <p className="text-xs font-semibold text-sprout-600">亲子工具</p>
            <h2 className="text-xl font-black text-ink">共情卡牌</h2>
            <div className="mt-5 rounded-3xl bg-gradient-to-br from-sprout-500 to-sprout-700 p-6 text-white shadow-panel">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/18 px-3 py-1 text-xs font-bold">翻到一张</span>
                <RotateCw size={20} />
              </div>
              <h3 className="mt-16 text-2xl font-black">“我想先听你说完。”</h3>
              <p className="mt-3 text-sm leading-6 text-sprout-50">适合在孩子沉默或顶撞时使用，帮助对话降温。</p>
            </div>
            <div className="mt-4 rounded-2xl bg-cream p-4">
              <div className="flex items-center gap-2 font-black text-ink"><CalendarCheck size={18} /> 家庭咨询预约</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">周五 19:30 可预约家庭咨询：刘静 / 国家二级心理咨询师，支持家长与孩子共同参与。</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
