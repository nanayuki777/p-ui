import { CalendarDays, ChevronRight, Headphones, Mic2, PenLine, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Line, LineChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { moodTrend, radarData } from "@/mock/data";

const moods = ["很晴朗", "有点累", "平静", "想倾诉"];
const days = ["一", "二", "三", "四", "五", "六", "日"];

export default function StudentHome() {
  return (
    <div className="mx-auto max-w-5xl pb-24 lg:pb-8">
      <div className="grid gap-6 lg:grid-cols-[390px_1fr]">
        <section className="overflow-hidden rounded-[2rem] bg-white shadow-soft lg:sticky lg:top-24 lg:self-start">
          <div className="bg-gradient-to-br from-sprout-500 to-sprout-700 p-6 text-white">
            <p className="text-sm font-semibold text-sprout-50">心芽客学生端</p>
            <h1 className="mt-2 text-3xl font-black">小芽 A001，今天也在慢慢长大</h1>
            <p className="mt-3 text-sm leading-6 text-sprout-50">把心情放在这里，不需要解释得很完美。</p>
          </div>

          <div className="space-y-5 p-5">
            <Card className="bg-cream p-4 shadow-none">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-sprout-700">今日心晴</p>
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
            </Card>

            <Link to="/student/chat" className="block rounded-3xl bg-sprout-50 p-5 transition hover:bg-sprout-100">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-sprout-500 text-white">
                  <Mic2 size={22} />
                </span>
                <ChevronRight className="text-sprout-600" />
              </div>
              <h2 className="mt-4 text-2xl font-black text-ink">AI 树洞</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">可以打字，也可以说出来。这里先听你讲。</p>
            </Link>
          </div>
        </section>

        <div className="space-y-6">
          <section className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-honey/40 text-amber-700"><Play size={20} /></span>
                <div>
                  <p className="text-xs font-semibold text-sprout-600">今日推荐</p>
                  <h2 className="font-black text-ink">3 分钟考前呼吸练习</h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">适合晚自习前，帮大脑从紧绷回到可专注的状态。</p>
              <Button className="mt-5 w-full" icon={<Headphones size={16} />}>开始收听</Button>
            </Card>

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
