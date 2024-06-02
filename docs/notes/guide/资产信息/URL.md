---
title: URL
author: Autumn
icon: formkit:url
createTime: 2024/06/02 22:39:06
permalink: /guide/url/
---
![alt text](/images/url-cn.png)
## 语法
:::tip
关键字需要用双引号包裹
:::

### 运算符

|     运算符              |                  含义 |
| :----------------------: | :-----------------------: |
| =                            | 匹配，表示查询包含关键词资产。 |
|       !=       | 剔除，表示剔除包含关键词资产。 |
|       ==       | 精准匹配，表示仅查询关键词资产。 |
| && | 与条件 |
| \|\| | 或条件 |
| () | 括号内容优先级最高 |



### 关键字

| 关键字  |              示例               |       说明       |
| :-----: | :-----------------------------: | :--------------: |
|   url   |    url="http://example.com"     |     检索URL      |
|  input  |       input="example.com"       |    检索输入源    |
| source  | source="exapmle.com/example.js" |   检索URL来源    |
|  type   |        type="linkfinder"        |   检索URL类型    |
| project |       project="Hackerone"       | 根据项目名称检索 |