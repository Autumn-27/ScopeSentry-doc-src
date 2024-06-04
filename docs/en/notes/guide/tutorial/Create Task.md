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

### Task name
Customize the task name

### Target
One target per line, and the target with a wildcard is best placed at the bottom (to prevent inconsistent task allocation).

### Node selection

You can select the node to run the task. When you select a node by clicking `All`, a new node will automatically join this task when it is connected. Otherwise, the scanning task will only be performed in the selected node.

### Scheduled task

After selecting a scheduled task, the system will run the task periodically according to the scheduled time.

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