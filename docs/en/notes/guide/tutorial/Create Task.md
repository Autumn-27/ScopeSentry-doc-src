---
title: Create Task
author: Autumn
icon: emojione:eye
createTime: 2024/06/04 23:17:53
permalink: /en/guide/task/
---

![alt text](/images/create-task-en.png)

## Scanning task
:::tip
During the scanning task, if the node is offline (docker will automatically restart), the program will automatically create a task to allow the node to continue running the unfinished task.
:::

### Target source

**1. Normal**

One target per line, targets with wildcards are best placed at the bottom (to prevent inconsistent task allocation).

Supports the following formats

192.168.1.1-192.168.1.253

192.168.1.1/24

example.com

CIDR:192.168.0.0/18 (This method will put the network segment in one node for scanning, and the fast scanning will survive.)

CMP:xxx Company (Company Name)

ICP: Beijing ICP Certificate xxxx No. (ICP Registration No.)

APP:xxx (APP Name)

APP-ID:com.xx.xx (app package name)

**2. From Project**

After creating a project, if you need to run the project, create a task from the task here, select From Project, which will put the target in the project into the task.

**3. From Asset**

The search statement can search for data in the asset, and can also filter according to the project. You can search on the asset page, view the search data, and create a task after confirming that it is the data that needs to be run.

**4. From the root domain**

Supports search statements and filter items, and scans the searched root domain.

**5. From the subdomain**

Supports search statements and filter items, and scans the searched subdomain.

### Node selection

You can select the node to run the task. If you select Automatically join, the task will be automatically added when a new node is connected. Otherwise, the scan task will only be performed in the selected node.

### Scheduled tasks

After selecting a scheduled task, the system will run the task periodically according to the scheduled time.

Currently supports daily, N days, N hours, weekly, monthly

### Deduplication

When selecting subdomain deduplication scanning, the historical subdomain will be searched in the database. If it already exists, it will not be scanned.

When selecting port deduplication, only the ports where the target has no assets will be scanned during the port scanning process.

### Subdomain Scanning

#### Subfinder
Refer to https://github.com/projectdiscovery/subfinder

#### Ksubdomain
Stateless subdomain blasting, refer to https://github.com/boy-hack/ksubdomain

The subdomain dictionary is the subdomain dictionary in the dictionary management.

### Port Scanning
Select the port created in the port scanning dictionary to scan and perform port fingerprinting.

### Directory Scanning
The directory scanning dictionary is set in the dictionary management

### URL
Discover more URLs from the target

### Scanning for sensitive information
:::tip
Scanning for sensitive information will take up more CPU resources (may cause the program to run slowly depending on the number of URLs crawled, if possible, please change to a machine with a larger CPU), please configure it reasonably (or enable a small number of sensitive information rules). If you have a good optimization method, please contact me~~
:::
Depends on URL scanning, sensitive information scanning can only be performed after URL scanning is enabled

### waybackuri
Refer to https://github.com/tomnomnom/waybackurls

Discover more URLs

### Page monitoring
ALL: All discovered URLs will be monitored for changes

JS: Only monitor changes in the content of JS URLs

### Crawler
If URL scanning is enabled, the crawler input will be added to the URL scan results. (It consumes more memory and CPU, please configure parallel threads according to the system.)

Crawler configuration is in rad.

### Vulnerability scanning
In the vulnerability scanning list, the first one is ALL POC. After selecting ALL POC, all POCs will be run.

## Scheduled tasks

Scheduled tasks are divided into three types:
- Page monitoring
- Scan type (select scheduled task when creating a scan task, and the task will be synchronized to the scheduled task list)
- Project type (select scheduled task on the project page, and it will be synchronized to the scheduled task list)

### Page monitoring
On the configuration page, you can select the node to run page monitoring.

On the data page, you can add and delete the monitoring URL list.

## Other types
For the other two types of scheduled tasks, you can view the task progress, and the task progress will be cleared each time the scheduled task starts.