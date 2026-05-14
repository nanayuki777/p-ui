# 心芽客前端启动说明

这是一份给非技术同学看的启动文档。照着做，就可以在自己的电脑上打开“心芽客”前端演示页面。

## 一、这个项目是什么

这是“心芽客 XinYaKe - 青少年心理健康协同守护平台”的前端界面原型。

已经包含这些页面：

- 学校管理后台：数据概览、风险热力图、预警工单、四级转介 SOP
- 学生端：心情打卡、AI 树洞、AI 艺术疗愈师、AI 释梦师、今日推荐、情绪日记
- 家长端：孩子状态概览、家长课堂、亲子沟通 AI 小助手、亲子工具、家庭咨询预约
- 社区服务站工作台
- 心理咨询师工作台

## 二、启动前需要准备什么

电脑需要安装 **Node.js**。

### 1. 下载 Node.js

打开官网：

https://nodejs.org/

建议下载 **LTS 长期支持版**。

安装时一直点击“下一步”即可，不需要特别修改选项。

### 2. 检查是否安装成功

安装完成后，打开电脑的命令行工具：

- Windows：按 `Win + R`，输入 `cmd`，回车
- macOS：打开“终端”

输入：

```bash
node -v
```

如果出现类似下面的版本号，就说明成功：

```bash
v20.11.0
```

再输入：

```bash
npm -v
```

如果也出现版本号，就可以继续。

## 三、第一次启动项目

### 1. 进入项目文件夹

假设项目文件夹叫 `p-ui`，先进入这个文件夹。

Windows 示例：

```bash
cd E:\claude code\ui
```

如果你把项目放在桌面，路径可能类似：

```bash
cd C:\Users\你的用户名\Desktop\p-ui
```

注意：`cd` 后面要换成你自己电脑上真实的项目路径。

### 2. 安装依赖

第一次运行前，需要安装项目依赖。

在项目文件夹里执行：

```bash
npm install
```

这一步可能需要几分钟。看到没有报红色错误，并且命令行回到可输入状态，就可以继续。

### 3. 启动前端

执行：

```bash
npm run dev -- --port 5188
```

如果启动成功，会看到类似：

```bash
Local: http://localhost:5188/
```

这时不要关闭这个命令行窗口。它相当于这个前端项目的“运行开关”。

## 四、怎么访问页面

打开浏览器，输入下面的地址。

### 学校管理后台

```text
http://localhost:5188/school
```

这是答辩演示最核心的后台页面。

### 学生端首页

```text
http://localhost:5188/student
```

### AI 树洞对话页

```text
http://localhost:5188/student/chat
```

### 家长端

```text
http://localhost:5188/parent
```

### 社区服务站工作台

```text
http://localhost:5188/community
```

### 心理咨询师工作台

```text
http://localhost:5188/counselor
```

## 五、答辩推荐演示顺序

建议按下面顺序演示：

1. 打开学校后台：

```text
http://localhost:5188/school
```

讲解内容：

- 测评覆盖率、高风险人数、已干预人数、服务时长
- 平台公司 + 学校采购、公益筛查 + 增值服务的运营模式
- 风险热力图中的绿色、黄色、红色班级
- 红色预警工单
- 四级转介 SOP：学校发现 → 社区跟进 → 医院转诊 → 家庭支持

2. 打开学生端：

```text
http://localhost:5188/student
```

讲解内容：

- 学生端不展示“风险等级”
- 用“心晴”“能量值”等更柔和的表达
- 中小学生没有个人手机时，可通过校园平板、心理角设备、班会大屏或家长协助访问
- 心情打卡、AI 心晴画像、AI 艺术疗愈师、AI 释梦师、情绪日记

3. 打开 AI 树洞：

```text
http://localhost:5188/student/chat
```

讲解内容：

- 温暖陪伴式对话
- 支持文字和语音入口
- 支持知心姐姐、学习压力教练、艺术疗愈师、释梦师等人设
- 不评判、不监视

4. 打开家长端：

```text
http://localhost:5188/parent
```

讲解内容：

- 家长只能看到脱敏后的聚合信息
- 不展示孩子的具体聊天内容
- 亲子沟通 AI 小助手
- 家长课堂、亲子工具、家庭咨询预约

## 六、如果打不开怎么办

### 情况 1：浏览器显示无法访问

先确认命令行窗口里项目还在运行。

如果命令行窗口被关掉了，重新进入项目文件夹，执行：

```bash
npm run dev -- --port 5188
```

### 情况 2：提示端口被占用

如果看到类似 `port already in use`，说明 `5188` 被别的软件占用了。

可以换一个端口，例如：

```bash
npm run dev -- --port 5199
```

然后访问地址也要改成：

```text
http://localhost:5199/school
```

其他页面同理，把 `5188` 换成 `5199`。

### 情况 3：npm install 很慢

可能是网络问题。可以换网络，或者使用国内 npm 镜像：

```bash
npm config set registry https://registry.npmmirror.com
npm install
```

### 情况 4：页面打开了但样式不对

先停止当前服务：

在命令行窗口按：

```text
Ctrl + C
```

然后重新执行：

```bash
npm run dev -- --port 5188
```

再刷新浏览器页面。

## 七、如何生成可部署版本

如果需要生成部署用文件，执行：

```bash
npm run build
```

成功后会生成一个 `dist` 文件夹。

这个 `dist` 文件夹就是静态网站文件，可以上传到：

- Vercel
- 腾讯云 EdgeOne Pages
- 阿里云 OSS 静态网站
- 腾讯云 COS 静态网站

## 八、Vercel 部署配置

如果用 Vercel 部署，配置如下：

- Application Preset / Framework Preset：`Vite`
- Install Command：`npm install`
- Build Command：`npm run build`
- Output Directory：`dist`

项目里已经包含 `vercel.json`，可以支持刷新 `/student/chat` 这类前端路由。

## 九、常用命令速查

安装依赖：

```bash
npm install
```

启动本地演示：

```bash
npm run dev -- --port 5188
```

生成部署版本：

```bash
npm run build
```

停止本地演示：

```text
Ctrl + C
```

## 十、最简单的一句话版本

第一次拿到项目后，在项目文件夹里依次执行：

```bash
npm install
npm run dev -- --port 5188
```

然后打开：

```text
http://localhost:5188/school
```
