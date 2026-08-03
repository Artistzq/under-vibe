# 为什么要做这个项目

::: tip 💡 VibeCoding 需要一些行业内默认懂的基本知识。这类知识对从业者而言早已习以为常，如同日常吃饭喝水；可圈外人缺少专人引路，很难接触到这些内容。
:::

## 故事的起点

我个人是计算机科班出身。AI Agent 大火之后，效率提高了很多——写代码、查文档、搭项目，交给 AI 做能给我省很多时间。身边不少朋友没有计算机背景，用 AI 做简单的事效果也很好：写个脚本处理表格，搭个简单网页，做个 PPT，常感叹"AI 太厉害了"。

但一旦开始做更复杂的事情，例如做一个带登录和交互功能的动态网站，或写一个复杂数据处理的脚本，就出现了问题。AI 给了代码，但复制粘贴跑不起来；报错看不懂，只能把错误信息丢回给 AI，改了再跑还是报错，来回几次也就放弃了；或者和 AI 反复对话，就是得不到想要的结果，聊了很多轮才勉强说清楚。**问卡在哪，他说不清楚，只知道"AI 不好用了"。**

一开始我也不解。我做了些调研，发现问题不在 AI 身上，而是他们缺失了一些基本的概念和习惯。

> 这些东西写过代码的人天天用，却忘了当年自己也是从头学起的

<div class="pain-grid">
  <div class="pain-card">
    <span class="pain-icon">🔌</span>
    <span>AI 说"缺少环境变量"<br><em>不知道环境变量是什么</em></span>
  </div>
  <div class="pain-card">
    <span class="pain-icon">📁</span>
    <span>AI 说"执行以下命令可以启动"<br><em>不知道执行命令是什么意思</em></span>
  </div>
  <div class="pain-card">
    <span class="pain-icon">🚪</span>
    <span>AI 说"无法搜索"<br><em>不知道为什么连不上互联网，明明浏览器可以上网</em></span>
  </div>
  <div class="pain-card">
    <span class="pain-icon">🧩</span>
    <span>AI 生成了大量垃圾文件<br><em>没有文件夹隔离意识，也没有清理 AI 生成的垃圾</em></span>
  </div>
</div>

> 如果你打算做个放手老板，你可以不用关注这些 😌 不过以当前 AI 的能力，还很难在没有人介入的情况下独立完成复杂任务。

> 如果你打算认真 VibeCoding，缺少这些知识，和 AI 沟通会非常费力。

## 缺的是一本术语词典，和对计算机体系全貌的了解

::: info **所有这些，背后是同一个问题——缺少对计算机体系的了解。**
- 模型生成的代码有 bug，**看不出来**
- 电脑环境不对，缺依赖、版本冲突，**不知道怎么排查**
- 项目文件多了，不知道哪个是干什么的，**不敢改**
- AI 给了几个方案，**不知道哪个适合**
:::

正统学法从数据结构、操作系统、计算机网络、编译原理一路学下来，需要数学基础，需要大量时间，而且大部分内容写代码的时候根本用不上。

但有些东西**必须知道**：文件在电脑上怎么组织的，程序是怎么跑起来的，网络请求是怎么回事，Git 是干什么的。还有那些反复出现的术语——缺了它们，和 AI 沟通会特别费力。

> 这些东西散落在各个课程里，**没有一本是专门写给用 AI 写代码的人看的**。

## 这个项目要做什么

不是所有知识点都覆盖，但主要的概念和关键环节，都能在这里找到。碰到问题，知道大概该往哪个方向查。

<div class="roadmap">
  <div class="roadmap-step">
    <span class="roadmap-num">01</span>
    <div class="roadmap-body">
      <strong>从终端和文件系统开始</strong>
      <p>打开电脑就能跟着做的第一步</p>
    </div>
  </div>
  <div class="roadmap-step">
    <span class="roadmap-num">02</span>
    <div class="roadmap-body">
      <strong>讲清楚那些"没人解释的词"</strong>
      <p>依赖、环境、端口——AI 教程里反复出现但从来不解释的东西</p>
    </div>
  </div>
  <div class="roadmap-step">
    <span class="roadmap-num">03</span>
    <div class="roadmap-body">
      <strong>Git、网络基础、一点 AI 原理</strong>
      <p>知道工具怎么协作，数据怎么传输</p>
    </div>
  </div>
  <div class="roadmap-step">
    <span class="roadmap-num">04</span>
    <div class="roadmap-body">
      <strong>每条知识围绕一个具体场景</strong>
      <p>先知道怎么用，再知道为什么。碰到问题知道往哪查</p>
    </div>
  </div>
</div>

::: danger ❌ 这个项目不是什么
- **不是**编程入门教程——不教写代码
- **不是**计算机专业课——不讲操作系统内核和编译原理
- **不是** AI 教程——不教调模型做训练
:::

::: tip ✅ 这个项目是什么
它是那些**写代码的人觉得肯定知道，但没人告诉你的事**。
:::

## 读完会怎样

读完不会让你变成程序员。但跟 AI 合作的时候，会少很多"卡住了不知道怎么办"的时刻：

<div class="outcome-grid">
  <div class="outcome-card">
    <span class="outcome-check">✓</span>
    <span>知道 AI 让"打开终端"是什么意思</span>
  </div>
  <div class="outcome-card">
    <span class="outcome-check">✓</span>
    <span>能看懂项目里那些文件大概是干什么的</span>
  </div>
  <div class="outcome-card">
    <span class="outcome-check">✓</span>
    <span>报错的时候大概知道往哪个方向查</span>
  </div>
</div>

**剩下的事，交给 AI。**

## 📖 本章术语

| 术语 | 一句话解释 |
|------|-----------|
| **VibeCoding** | 让 AI 帮你写代码的开发方式，你和 AI 像"搭子"一样协作 |
| **终端（Terminal）** | 用文字输入命令操控电脑的窗口 |
| **环境变量** | 程序运行时读到的全局设置，比如 API Key 就放在这里 |
| **依赖（Dependency）** | 你的项目运行所依赖的别人写好的代码库 |
| **端口（Port）** | 程序对外提供服务时占用的"门牌号" |
| **Git** | 给代码做版本管理的工具，能后悔、能备份 |
