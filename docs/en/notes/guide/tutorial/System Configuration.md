---
title: System Configuration
author: Autumn
icon: icon-park-outline:config
createTime: 2024/06/04 22:46:39
permalink: /en/guide/system-config/
---

## System Configuration

:::tip
- Navigation: Configuration->System Configuration->System Configuration
- This configuration will overwrite all scanning node configurations!
- The default system configuration is suitable for CPU: 2 threads, 2G memory, which can be configured according to your own system. It also supports custom configuration of scanning threads of each node at the node.
:::
![alt text](/images/system-config-en.png)

**Time Zone**: Set the time zone

**Maximum number of tasks**: One target (URL, IP) is one task

**Directory Scan Concurrency**: Set the concurrency limit for directory scanning

**Port Scan Concurrency**: Set the concurrency limit for port scanning

**Crawler Parallel Number**: Set the crawler concurrency. The crawler uses the rad tool. The parallel number represents the maximum number of rads. Since the crawler consumes more memory, please configure it according to the system

**Number of URL crawling threads**: The number of threads running URL crawling.

**Maximum number of URL acquisitions**: The maximum number of acquisitions for a single target URL to prevent excessive CPU consumption (the actual test will be larger than this number).

## Node Configuration
:::tip
- Navigation: Node Management->Select the corresponding node->Set
- Overwrite the scanning configuration of the selected node through this configuration!
:::
![alt text](/images/node-config-en.png)

**Maximum number of tasks**: One **target** (URL, IP) is one task

**Directory scan concurrency**: Set the directory scan concurrency limit

**Port scan concurrency**: Set the port scan concurrency limit

**Crawler parallel number**: Set the crawler concurrency. The crawler uses the rad tool. The parallel number represents the maximum number of rads. Since the crawler consumes more memory, please configure it according to the system

**Number of URL crawling threads**: The number of threads running URL crawling.

**Maximum number of URL acquisitions**: The maximum number of acquisitions for a single target URL to prevent excessive CPU consumption (the actual test will be larger than this number).

**Status**: When the status is Off, the scan task will not use the node.

## Notification configuration
:::tip
Navigation: Configuration->System Configuration->Notification Configuration
:::
![alt text](/images/webhook-cn.png)

### Add notification interface
*msg* is the location of the message parameter

Example:
Dingding:
![alt text](/images/dingding.png)
Select custom keywords
![alt text](/images/dingding2.png)

```
{"at":{"atUserIds":["014728255240768602"],"isAtAll":false},"text":{"content":"ScoSen*msg*"},"msgtype":"text"}
```

Slack:
![alt text](/images/slack.png)

## subfinder configuration
Refer to https://github.com/projectdiscovery/subfinder
Fill in the configuration file in the text box

## rad configuration
Refer to https://github.com/chaitin/rad
Fill in the configuration file in the text box