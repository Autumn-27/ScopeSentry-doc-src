---
title: Crawler
author: Autumn
icon: game-icons:spider-web
createTime: 2024/06/04 23:26:55
permalink: /en/guide/craw/
---

![alt text](/images/craw-en.png)

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
|   url    | url="http://example.com" |    Retrieve URL    |
|  method  |      method="POST"       |  Retrieve Method   |
|   body   |  body="username=admin"   | Retrieve POST data |
| project |       project="Hackerone"       | Retrieve by project name |




