---
title: Subdomains
author: Autumn
icon: material-symbols:domain
createTime: 2024/06/04 23:26:34
permalink: /en/guide/subdomain/
---
![alt text](/images/subdomain-en.png)
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
|    ip    |      ip="192.168.2.1"      |        Retrieve IP        |
|  domain  |    domain="example.com"    |      Retrieve domain      |
|   type   |        type="CNAME"        |   Retrieve record type    |
|  value   | value="allcdn.example.com" | searchHelp.subdoaminValue |
| project  |    project="Hackerone"     | Retrieve by project name  |