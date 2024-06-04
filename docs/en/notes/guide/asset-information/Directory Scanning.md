---
title: Directory Scanning
author: Autumn
icon: octicon:file-directory-fill-24
createTime: 2024/06/04 23:27:14
permalink: /en/guide/dir/
---
![alt text](/images/dir-en.png)

## Syntax
:::tip
Keywords need to be enclosed in double quotes
:::

### Operator

|     Operator  |             Meaning |
| :----------------------: | :-----------------------: |
|      =       | Match, indicating that the query contains keyword assets. |
|      !=      | Eliminate means to eliminate assets containing keywords.  |
|      ==      |    Exact matching means querying only keyword assets.     |
|      &&      |                      and conditions                       |
|     \|\|     |                       or condition                        |
|      ()      |     The content in brackets has the highest priority      |


### **Keywords**
| Keywords     |         Example          |       Expla              |
| :----------: | :----------------------: | :----------------------: |
|    url     |    url="http://example.com"    |          检索URL           |
| statuscode |       statuscode=="200"        | 检索响应码，不支持模糊查找 |
|  redirect  | redirect="https://example.com" |        检索跳转链接        |
| project |       project="Hackerone"       | Retrieve by project name |