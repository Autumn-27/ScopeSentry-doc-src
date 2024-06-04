---
title: URL
author: Autumn
icon: formkit:url
createTime: 2024/06/04 23:26:50
permalink: /en/guide/url/
---
![alt text](/images/url-en.png)
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
|   url    |    url="http://example.com"     |       Retrieve URL       |
|  input   |       input="example.com"       |     searchHelp.inpur     |
|  source  | source="exapmle.com/example.js" |   Retrieve URL source    |
|   type   |        type="linkfinder"        |    Retrieve URL type     |
| project  |       project="Hackerone"       | Retrieve by project name |