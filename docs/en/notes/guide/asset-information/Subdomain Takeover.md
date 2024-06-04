---
title: Subdomain Takeover
author: Automn
icon: oui:docked-takeover
createTime: 2024/06/04 23:26:42
permalink: /en/guide/subt/
---
![alt text](/images/subt-en.png)

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
|  domain  |    domain="example.com"    |       Retrieve domain       |
|   type   |        type="CNAME"        |    Retrieve record type     |
|  value   | value="exapmle.github.com" |  searchHelp.subdoaminValue  |
| response |  response="404 Not Found"  | Retrieve HTTP response body |
| project  |    project="Hackerone"     |  Retrieve by project name   |