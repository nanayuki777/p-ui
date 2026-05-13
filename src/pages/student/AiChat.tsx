import { ArrowLeft, Mic, Send, SmilePlus, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const messages = [
  { from: "ai", text: "晚上好，小芽。我在这里。今天有什么想先放下的吗？" },
  { from: "me", text: "今天数学小测没考好，感觉努力也没用。" },
  { from: "ai", text: "听起来你很挫败，也有一点委屈。我们先不急着评价结果，能不能告诉我：最难受的是分数，还是担心别人怎么看？" },
  { from: "me", text: "可能是怕妈妈失望。" },
  { from: "ai", text: "谢谢你愿意说出来。我们可以一起写一句比较容易开口的话，先把“我需要被理解”表达出来。" }
];

export default function AiChat() {
  return (
    <div className="mx-auto max-w-[430px] pb-24">
      <section className="min-h-[calc(100vh-128px)] overflow-hidden rounded-[2rem] bg-white shadow-soft">
        <header className="flex items-center justify-between border-b border-sprout-100 bg-cream px-4 py-4">
          <Link to="/student" className="grid size-10 place-items-center rounded-2xl bg-white text-sprout-700">
            <ArrowLeft size={20} />
          </Link>
          <div className="text-center">
            <h1 className="font-black text-ink">AI 树洞</h1>
            <p className="text-xs text-slate-500">只陪伴，不评判</p>
          </div>
          <button className="grid size-10 place-items-center rounded-2xl bg-sprout-100 text-sprout-700">
            <Volume2 size={19} />
          </button>
        </header>

        <div className="scrollbar-thin flex h-[620px] flex-col gap-4 overflow-y-auto bg-gradient-to-b from-white to-sprout-50/80 p-4">
          <div className="mx-auto rounded-full bg-sprout-100 px-4 py-2 text-xs font-semibold text-sprout-700">2026年5月13日 20:18</div>
          {messages.map((message, index) => (
            <div key={`${message.from}-${index}`} className={`flex ${message.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[78%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-panel ${message.from === "me" ? "rounded-br-md bg-sprout-500 text-white" : "rounded-bl-md bg-white text-slate-700"}`}>
                {message.text}
              </div>
            </div>
          ))}

          <div className="rounded-3xl bg-cream p-4">
            <p className="text-sm font-bold text-ink">可以试着这样说</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">“妈妈，我知道你在意我的学习。我也很难过，今晚想先被抱一下，明天再一起看错题。”</p>
          </div>
        </div>

        <footer className="border-t border-sprout-100 bg-white p-3">
          <div className="flex items-center gap-2 rounded-2xl bg-sprout-50 p-2">
            <button className="grid size-10 place-items-center rounded-xl bg-white text-sprout-700"><SmilePlus size={19} /></button>
            <input className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none" placeholder="写一点想说的话..." />
            <button className="grid size-10 place-items-center rounded-xl bg-white text-sprout-700"><Mic size={19} /></button>
            <Button className="size-10 rounded-xl p-0" icon={<Send size={17} />} aria-label="发送" />
          </div>
        </footer>
      </section>
    </div>
  );
}
