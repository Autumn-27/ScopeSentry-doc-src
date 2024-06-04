---
title: Sensitive Information
author: Autumn
icon: ion:information-outline
createTime: 2024/06/04 23:27:07
permalink: /en/guide/sens/
---
![alt text](/images/sns-en.png)

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
|   url    |  url="http://example.com"  |            Retrieve URL             |
|  sname   | sname="twilio_account_sid" | Retrieve sensitive information name |
|   body   |   body="api-key-example"   |     Retrieve HTTP response body     |
|   info   |   info="api-key-example"   |   Retrieve sensitive information    |
| project  |    project="Hackerone"     |      Retrieve by project name       |