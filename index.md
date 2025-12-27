---
layout: default
title: "教程目录"
---

<!-- 顶部内容 -->
<header>
  <a href="https://www.youtube.com/@%E7%A7%91%E6%8A%80%E5%B0%8FV">科技小V YouTube 频道入口</a>
</header>

<h1>教程目录</h1>

<!-- 教程目录列表 -->
<ul>
  {% assign tutorials = site.pages | where: "category", "tutorial" %}
  {% for page in tutorials %}
    {% if page.title and page.url != "/" %}
      <li><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

<!-- 底部内容 -->
<footer>
  <p>科技小V · 教程中心</p>
</footer>
