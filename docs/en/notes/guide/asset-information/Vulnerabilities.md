---
title: Vulnerabilities
author: Autumn
icon: tdesign:bug
createTime: 2024/06/04 23:27:21
permalink: /en/guide/vul/
---
![alt text](/images/vul-en.png)
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
|   url    |    url="http://example.com"     |        Retrieve URL         |
| vulname  | vulname="nginxwebui-runcmd-rce" | Retrieve vulnerability name |
|  level   |           level="info           |     Retrieve vuln level     |
| matched  |  matched="https://example.com"  |  Retrieve matched content   |
| request  |      request="cmd=whoami"       |  Retrieve request content   |
| response |         response="root"         |  Retrieve response content  |
| project  |       project="Hackerone"       |  Retrieve by project name   |