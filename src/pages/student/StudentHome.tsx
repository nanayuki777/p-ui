import {
  Bot,
  CalendarDays,
  ChevronRight,
  Headphones,
  Mic2,
  MoonStar,
  Palette,
  PenLine,
  Play,
  School,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Line, LineChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { moodTrend, radarData } from "@/mock/data";

const moods = ["很晴朗", "有点累", "平静", "想倾诉"];
const days = ["一", "二", "三", "四", "五", "六", "日"];

const aiPicks = [
  {
    icon: Palette,
    title: "AI 艺术疗愈师",
    desc: "画一幅今天的心情，AI 生成色彩情绪图和温柔反馈。",
    tone: "bg-rose-50 text-rose-600"
  },
  {
    icon: MoonStar,
    title: "AI 释梦师",
    desc: "描述昨晚的梦，AI 帮你整理梦里的情绪线索。",
    tone: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Headphones,
    title: "AI 正念教练",
    desc: "根据心情打卡推荐 3 分钟呼吸或放松练习。",
    tone: "bg-amber-50 text-amber-700"
  }
];

export default function StudentHome() {
  return (
    <div className="mx-auto max-w-5xl pb-24 lg:pb-8">
      <div className="grid gap-6 lg:grid-cols-[390px_1fr]">
        <section className="overflow-hidden rounded-[2rem] bg-white shadow-soft lg:sticky lg:top-24 lg:self-start">
          <div className="bg-gradient-to-br from-sprout-500 to-sprout-700 p-6 text-white">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-sprout-50">心芽客学生端</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/16 px-3 py-1 text-xs font-bold">
                <School size={14} />
                校园平板可用
              </span>
            </div>
            <h1 className="mt-2 text-3xl font-black">小芽 A001，今天也在慢慢长大</h1>
            <p className="mt-3 text-sm leading-6 text-sprout-50">适配学校心理角设备、班会平板和家长协助访问，不依赖学生个人手机。</p>
          </div>

          <div className="space-y-5 p-5">
            <Card className="bg-cream p-4 shadow-none">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-sprout-700">今日心晴 · AI 生成画像</p>
                  <h2 className="mt-1 text-xl font-black text-ink">选择一个靠近你的词</h2>
                </div>
                <Sparkles className="text-honey" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {moods.map((mood, index) => (
                  <button key={mood} className={`rounded-2xl px-3 py-3 text-sm font-bold ${index === 0 ? "bg-sprout-500 text-white" : "bg-white text-slate-600"}`}>
                    {mood}
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-white p-3">
                <p className="text-xs font-bold text-sprout-700">AI 读到的变化</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">本周“压力”词频下降，“同伴支持”上升，系统建议今晚试试轻音乐写作业。</p>
              </div>
            </Card>

            <Link to="/student/chat" className="block rounded-3xl bg-sprout-50 p-5 transition hover:bg-sprout-100">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-sprout-500 text-white">
                  <Mic2 size={22} />
                </span>
                <ChevronRight className="text-sprout-600" />
              </div>
              <h2 className="mt-4 text-2xl font-black text-ink">AI 树洞</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">可切换“知心姐姐、学习压力教练、艺术疗愈师、释梦师”等陪伴人设。</p>
            </Link>
          </div>
        </section>

        <div className="space-y-6">
          <section className="grid gap-4 md:grid-cols-3">
            {aiPicks.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <span className={`grid size-11 place-items-center rounded-2xl ${item.tone}`}>
                    <Icon size={20} />
                  </span>
                  <p className="mt-4 text-xs font-semibold text-sprout-600">今日 AI 推荐</p>
                  <h2 className="mt-1 font-black text-ink">{item.title}</h2>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">{item.desc}</p>
                  <Button className="mt-4 w-full" variant="secondary" icon={<Play size={16} />}>开始体验</Button>
                </Card>
              );
            })}
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-sprout-100 text-sprout-700"><PenLine size={20} /></span>
                <div>
                  <p className="text-xs font-semibold text-sprout-600">情绪日记</p>
                  <h2 className="font-black text-ink">记录一个小片段</h2>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-7 gap-2">
                {days.map((day, index) => (
                  <div key={day} className={`rounded-2xl py-3 text-center text-sm font-black ${index === 4 ? "bg-sprout-500 text-white" : "bg-sprout-50 text-sprout-700"}`}>
                    {day}
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-2xl bg-cream p-3 text-sm leading-6 text-slate-600">今天写下：“被同桌提醒作业时有点烦，但后来一起改完题感觉好多了。”</p>
            </Card>

            <Card>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-honey/40 text-amber-700"><Bot size={20} /></span>
                <div>
                  <p className="text-xs font-semibold text-sprout-600">科普与课程</p>
                  <h2 className="font-black text-ink">AI 推荐学习资源</h2>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {["青春期情绪小百科 · 科普文章", "学堂在线：压力调节微课", "大学生慕课：积极心理学导读"].map((item) => (
                  <div key={item} className="rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
            <Card className="h-[310px]">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-sprout-600">心理成长画像</p>
                  <h2 className="text-xl font-black text-ink">本周能量值</h2>
                </div>
                <CalendarDays className="text-sprout-600" />
              </div>
              <ResponsiveContainer width="100%" height="82%">
                <LineChart data={moodTrend}>
                  <XAxis dataKey="day" tickLine={false} axisLine={false} />
                  <YAxis hide domain={[40, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="energy" name="能量值" stroke="#7FB069" strokeWidth={4} dot={{ r: 5, fill: "#7FB069" }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="h-[310px]">
              <p className="text-xs font-semibold text-sprout-600">小测评反馈</p>
              <h2 className="text-xl font-black text-ink">我的调节力花瓣</h2>
              <ResponsiveContainer width="100%" height="82%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#DDE8D4" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "#52605A", fontSize: 12 }} />
                  <Radar dataKey="value" stroke="#7FB069" fill="#7FB069" fillOpacity={0.35} />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
