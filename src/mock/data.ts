export type RiskLevel = "low" | "medium" | "high";

export const kpis = [
  { label: "测评覆盖率", value: "92.6%", delta: "+8.4%", tone: "green" },
  { label: "高风险人数", value: "18", delta: "-5 人", tone: "red" },
  { label: "已干预人数", value: "146", delta: "+31", tone: "yellow" },
  { label: "服务时长", value: "1,286h", delta: "+18.7%", tone: "green" }
];

export const trendData = [
  { month: "12月", low: 636, medium: 82, high: 21, intervention: 41 },
  { month: "1月", low: 648, medium: 79, high: 19, intervention: 54 },
  { month: "2月", low: 621, medium: 96, high: 24, intervention: 63 },
  { month: "3月", low: 667, medium: 74, high: 18, intervention: 86 },
  { month: "4月", low: 681, medium: 69, high: 16, intervention: 113 },
  { month: "5月", low: 694, medium: 64, high: 18, intervention: 146 }
];

export const heatmap = [
  { grade: "初一", classes: [
    { name: "1班", risk: "low", score: 18, count: 1 },
    { name: "2班", risk: "low", score: 22, count: 1 },
    { name: "3班", risk: "medium", score: 49, count: 4 },
    { name: "4班", risk: "low", score: 28, count: 2 },
    { name: "5班", risk: "medium", score: 53, count: 5 },
    { name: "6班", risk: "low", score: 17, count: 0 }
  ] },
  { grade: "初二", classes: [
    { name: "1班", risk: "low", score: 26, count: 2 },
    { name: "2班", risk: "medium", score: 58, count: 6 },
    { name: "3班", risk: "high", score: 84, count: 3 },
    { name: "4班", risk: "medium", score: 61, count: 5 },
    { name: "5班", risk: "low", score: 30, count: 2 },
    { name: "6班", risk: "low", score: 19, count: 1 }
  ] },
  { grade: "初三", classes: [
    { name: "1班", risk: "medium", score: 55, count: 5 },
    { name: "2班", risk: "high", score: 91, count: 4 },
    { name: "3班", risk: "medium", score: 64, count: 7 },
    { name: "4班", risk: "low", score: 33, count: 2 },
    { name: "5班", risk: "medium", score: 51, count: 4 },
    { name: "6班", risk: "low", score: 25, count: 1 }
  ] }
] satisfies Array<{ grade: string; classes: Array<{ name: string; risk: RiskLevel; score: number; count: number }> }>;

export const workOrders = [
  {
    id: "W-202605-071",
    student: "小芽 A017",
    school: "北京市昌平区清河湾中学",
    className: "初二 3班",
    risk: "high" as RiskLevel,
    reason: "近两周测评睡眠维度显著下滑，班主任观察到持续回避社交。",
    owner: "校心理教师 陈老师",
    updatedAt: "2026-05-12 16:40",
    status: "社区跟进中"
  },
  {
    id: "W-202605-064",
    student: "小芽 A029",
    school: "北京市昌平区育新中学",
    className: "初三 2班",
    risk: "high" as RiskLevel,
    reason: "PHQ-A 分数连续两次高于阈值，家长端反馈亲子冲突增多。",
    owner: "区级督导 李老师",
    updatedAt: "2026-05-11 10:15",
    status: "医院转介评估"
  },
  {
    id: "W-202605-058",
    student: "小芽 A041",
    school: "北京市昌平区北苑中学",
    className: "初二 4班",
    risk: "medium" as RiskLevel,
    reason: "考试周压力自评升高，情绪日记关键词出现疲惫与担心。",
    owner: "班主任 王老师",
    updatedAt: "2026-05-09 14:20",
    status: "学校干预中"
  }
];

export const referralSteps = [
  { title: "学校发现", desc: "班主任复核 + 心理教师初筛", time: "05-12 09:30", done: true },
  { title: "社区跟进", desc: "社区服务站完成家庭沟通预约", time: "05-12 16:40", done: true },
  { title: "医院转诊", desc: "等待三甲医院绿色通道评估", time: "预计 05-14", done: false },
  { title: "家庭支持", desc: "同步家长课堂与亲子沟通建议", time: "持续跟进", done: false }
];

export const moodTrend = [
  { day: "周一", energy: 64 },
  { day: "周二", energy: 58 },
  { day: "周三", energy: 72 },
  { day: "周四", energy: 69 },
  { day: "周五", energy: 78 },
  { day: "周六", energy: 83 },
  { day: "周日", energy: 76 }
];

export const radarData = [
  { subject: "睡眠", value: 68 },
  { subject: "专注", value: 74 },
  { subject: "表达", value: 81 },
  { subject: "同伴", value: 70 },
  { subject: "压力调节", value: 62 }
];

export const parentCourses = [
  { title: "初中生考试周沟通课", age: "12-15岁", minutes: 18, progress: 72 },
  { title: "把说教变成倾听：亲子沟通科普", age: "10-14岁", minutes: 22, progress: 36 },
  { title: "学堂在线资源：积极心理学导读", age: "13-17岁", minutes: 16, progress: 0 }
];
