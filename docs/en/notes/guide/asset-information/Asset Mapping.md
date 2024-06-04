---
title: Asset Mapping
author: Autumn
icon: oui:index-mapping
createTime: 2024/06/04 23:26:23
permalink: /en/guide/asset/
---

![alt text](/images/asset-en.png)

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
|     app      |       app="Nginx"        |             Retrieve specified component              |
|     body     | body="bootstrap.min.css" |              Retrieve HTTP response body              |
|    header    |   header="rememberMe"    |             Retrieve HTTP request header              |
|    title     |  title="admin console"   |                 Detect website title                  |
|  statuscode  |    statuscode=="403"     | Retrieve response code, fuzzy search is not supported |
|     icon     |     icon="54256234"      |             Retrieve by website icon hash             |
|      ip      |     ip="192.168.2.1"     |                      Retrieve IP                      |
|     port     |       port="3306"        |                     Retrieve port                     |
|    domain    |   domain="example.com"   |                    Retrieve domain                    |
| project |       project="Hackerone"       | Retrieve by project name |
