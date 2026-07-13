# 为什么要做这个项目

::: tip 💡 VibeCoding需要一些行业内的基本知识。这类知识对于从业者而言早已习以为常，如同日常吃饭喝水；可圈外人缺少专人引路，很难接触到这些内容。
:::

## 故事的起点

我个人是计算机科班出身。AI Agent大火之后，效率提高了很多——写代码、查文档、搭项目，交给 AI 做能给我省很多的时间。身边不少朋友没有计算机背景，用 AI 做简单的事效果也很好，写个脚本处理表格，搭个简单网页，做个 PPT，常感叹"AI 太厉害了"。

但一旦开始做更复杂的事情，例如做一个带登录和交互功能的动态网站，或写一个复杂数据处理的脚本，就出现了问题。AI 给了代码，但复制粘贴跑不起来；报错看不懂，只能把错误信息丢回给 AI，AI 改了再跑还是报错，来回几次也就放弃了；或者和AI反复对话，就是无法获得期望的产物，对话很多轮才能理清楚。**问卡在哪，说不清楚，只知道"AI 不好用了"。**

对此一开始我也不解。我做了简单的调研，发现问题不在 AI 身上，而是因为他们缺失了一些基本的概念和习惯。

> 这些东西写过代码的人天天用，却忘了这些也是曾经是需要学习的

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
    <span>AI 说"无法搜索"<br><em>不知道是因为原因无法连接互联网，明明浏览器可以上网</em></span>
  </div>
  <div class="pain-card">
    <span class="pain-icon">🧩</span>
    <span>AI 生成了大量垃圾文件<br><em>没有文件夹隔离意识，也没有清理AI生成的垃圾</em></span>
  </div>
</div>

> 如果你打算做个放手老板，你可以不用关注这些😌不过当前AI的能力还比较难以在没有人介入的情况下独立完成复杂任务。

> 如果你打算VibeCoding，缺少这些知识会导致和AI沟通费力。

## 缺一本术语词典和对计算机体系全貌的了解

::: info  **所有这些，背后是同一个问题——缺少对计算机体系的了解。** 
- 模型生成的代码有 bug，**看不出来**
- 电脑环境不对，缺依赖、版本冲突，**不知道怎么排查**
- 项目文件多了，不知道哪个是干什么的，**不敢改**
- AI 给了几个方案，**不知道哪个适合**
:::

正统学法从数据结构、操作系统、计算机网络、编译原理一路学下来，需要数学基础，需要大量时间，而且大部分内容写代码的时候用不上。

但有些东西**必须知道**：文件在电脑上怎么组织的，程序是怎么跑起来的，网络请求是怎么回事，Git 是干什么的。以及一些术语，缺少术语会让你和AI沟通费力

> 这些东西散落在各个课程里，**没有一本是专门写给用 AI 写代码的人看的**。

## 这个项目要做什么

不是所有知识点都覆盖，但主要的概念和关键环节，都能在这里找到。碰到问题，知道大概往哪个方向查。

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
