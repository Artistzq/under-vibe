# 为什么要做这个项目

::: tip 💡 VibeCoding需要一些行业内的基本知识。这类知识对于从业者而言早已习以为常，如同日常吃饭喝水；可圈外人缺少专人引路，很难接触到这些内容。
:::

## 故事的起点

我是计算机科班出身。AI 起来之后，效率翻了一倍——写代码、查文档、搭项目，大半交给 AI 做。

身边不少朋友没有计算机背景，用 AI 做简单的事效果很好，写个脚本处理表格，搭个网页，做个 PPT，常感叹"AI 太厉害了"。

::: warning ⚠️ 但一旦开始做更复杂的东西
比如带登录和数据库的网站，就出问题了。AI 给了代码，复制粘贴跑不起来，报错看不懂，只能把错误信息丢回给 AI，AI 改了再跑还是报错，来回几次也就放弃了。

**问卡在哪，说不清楚，只知道"AI 不好用了"。**
:::

我翻了他们的聊天记录，问题不在 AI 身上：

<div class="pain-grid">
  <div class="pain-card">
    <span class="pain-icon">🔌</span>
    <span>AI 说"先装个 Node.js"<br><em>不知道 Node.js 是什么</em></span>
  </div>
  <div class="pain-card">
    <span class="pain-icon">📁</span>
    <span>AI 说"cd 到项目目录"<br><em>不知道 cd 是什么意思</em></span>
  </div>
  <div class="pain-card">
    <span class="pain-icon">🚪</span>
    <span>AI 说"这个端口被占用了"<br><em>想的是端口是什么</em></span>
  </div>
  <div class="pain-card">
    <span class="pain-icon">🧩</span>
    <span>项目文件一多，改这个忘了改那个<br><em>越改越乱</em></span>
  </div>
</div>

> 写过代码的人天天用这些东西，**忘了它们曾经是需要学的**。

## 缺一张地图

你知道目的地，但不知道路怎么走。AI 是司机，司机说"前面左转走三环"，不知道三环是什么。

不只是命令和终端的问题：

::: info 🗺️ 背后是同一个问题
- 模型生成的代码有 bug，**看不出来**
- 电脑环境不对，缺依赖、版本冲突，**不知道怎么排查**
- 项目文件多了，不知道哪个是干什么的，**不敢改**
- AI 给了几个方案，**不知道哪个适合**

**所有这些，背后是同一个问题——对计算机世界没有一张地图。**
:::

正统学法从数据结构、操作系统、计算机网络、编译原理一路学下来，需要数学基础，需要大量时间，而且大部分内容写代码的时候用不上。

但有些东西**必须知道**：文件在电脑上怎么组织的，程序是怎么跑起来的，网络请求是怎么回事，Git 是干什么的。

> 这些东西散落在各个课程里，**没有一本是专门写给用 AI 写代码的人看的**。

## 这个项目要做什么

建一张地图。不是每个地方都去，但主要的路标和关键区域，都能在上面找到。碰到问题，知道大概往哪个方向查。

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
      <p>不讲原理，讲用法。碰到问题知道往哪查</p>
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

读完不会变成程序员。但跟 AI 合作的时候，会少很多"卡住了不知道怎么办"的时刻：

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
