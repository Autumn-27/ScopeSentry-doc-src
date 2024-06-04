---
title: Page Monitoring
author: Automt
icon: material-symbols:screenshot-monitor-outline-sharp
createTime: 2024/06/04 23:27:28
permalink: /en/guide/pagem/
---
![alt text](/images/page-en.png)

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
|   url    |   url="http://example.com"    |       Retrieve URL        |
|   hash   |    hash="234658675623543"     |  Retrieve response hash   |
| matched  | matched="https://example.com" | Retrieve matched content  |
|   diff   |        diff="example"         |   Retrieve diff content   |
| response |        response="root"        | Retrieve response content |