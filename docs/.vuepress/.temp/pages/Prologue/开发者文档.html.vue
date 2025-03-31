<template><div><h1 id="开发者须知" tabindex="-1"><a class="header-anchor" href="#开发者须知"><span>开发者须知</span></a></h1>
<h2 id="commit-规范" tabindex="-1"><a class="header-anchor" href="#commit-规范"><span>commit 规范</span></a></h2>
<p>为保证 commit 的可追溯性和统一性，要求所有开发者 commit message 遵循同一套规约</p>
<p>前缀请遵循如下规则(套用软件开发过程)</p>
<ul>
<li>修订: fix，修复</li>
<li>内容新增: feat，新增</li>
<li>内容更新；update，内容新增</li>
<li>章节结构调整: refactor</li>
<li>目录、内容风格变更: style</li>
<li>流水线变更: ci</li>
</ul>
<p>例</p>
<p>纠正错别字和语句不通顺时：<code v-pre>fix: typo correction in chapter n</code>,“修复：第n章节的拼写修复”</p>
<p>新增食堂攻略时：<code v-pre>feat: third canteen food guide</code>,<code v-pre>update: third canteen food guide</code>,“新增：第三食堂美食指南”</p>
<h2 id="分支与合并请求" tabindex="-1"><a class="header-anchor" href="#分支与合并请求"><span>分支与合并请求</span></a></h2>
<p>提交代码时，<span style="color: red">禁止</span>在主分支上直接 Push ，请单独拉取分支提交 merge request 合并</p>
<p>分支名称也请遵循如下规范</p>
<ul>
<li>修订: fix</li>
<li>内容新增: feature</li>
<li>章节结构调整: refactor</li>
<li>流水线变更: ci</li>
</ul>
<p>例</p>
<p>纠正错别字和语句不通顺时：<code v-pre>fix-typo-correction</code>，“修复-错别字“</p>
<p>新增食堂攻略时：<code v-pre>feature-third-canteen-guide</code>，“更新-第三食堂内容”</p>
<p>相比于 commit ，更加简短</p>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2>
<pre>
> .github
    > workflows         // ci
> docs                  // 所有文档，子文件夹与目录章节一一对应
    > Prologue          // 序章
    > AdmissionGuide    // 入学之前
    > BeforeAdmission   // 入学指南
    > HalfCooked        // 5分熟
    > Veteran           // 老生入门
    > static            // 静态资源文件
</pre>
<h2 id="ci-cd流程" tabindex="-1"><a class="header-anchor" href="#ci-cd流程"><span>CI/CD流程</span></a></h2>
<p><a href="https://github.com/SUEP-Plus/SUEP-Book/actions" target="_blank" rel="noopener noreferrer">Github actions</a><br>
分支 gh-pages 为静态部署的页面文件</p>
</div></template>


