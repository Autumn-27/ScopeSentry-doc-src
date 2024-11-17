---
title: Writing Tutorials
author: Autumn
createTime: 2024/11/17 20:17:33
permalink: /en/guide/2ixl876k/
icon: mdi:cast-tutorial
---
## Plugin Market:

[Plugin Market](https://plugin.scope-sentry.top/)

## Plugin Template
```
git clone https://github.com/Autumn-27/ScopeSentry-Plugin-Template.git
```

The plugin template provides demos of the AssetHandle module and the SubdomainScan module

https://github.com/Autumn-27/ScopeSentry-Plugin-Template/tree/main/plugin/AssetHandle

https://github.com/Autumn-27/ScopeSentry-Plugin-Template/tree/main/plugin/SubdomainScan

## System module

The plugin system divides the entire process into 13 modules
```
"TargetHandler",
"SubdomainScan",
"SubdomainSecurity",
"AssetMapping",
"PortScanPreparation",
"PortScan",
"PortFingerprint",
"AssetHandle",
"URLScan",
"URLSecurity",
"WebCrawler",
"DirScan",
"VulnerabilityScan",
```

## Plugin file

Two files are required to import plugins

### info.json

> info.json
```
{
"help":"No parameters",
"parameter":"",
"name":"SubdomainScanDemo",
"module": "SubdomainScan",
"version":"v1.0",
"introduction":"Subdomain Scan Module demo/Demo of SubdomainScan module"
}
```
- help: parameter prompt information
- parameter: parameter
- name: plugin name
- module: module (module needs to be accurate)
- version: version
- introduction: plugin introduction

### plugin.go
> plugin.go (plugin source code)
```
package plugin

func GetName() string {
return ""
}

func Install() error {
return nil
}

func Check() error {
return nil
}

func Uninstall() error {
return nil
}

func Execute(input interface{}, op options.PluginOption) (interface{}, error) {
return nil, nil
}

```
#### Plugin coding requirements
1. The package name needs to be plugin
2. Five methods need to be provided, and the return value of GetName needs to be consistent with info.json
- GetName
- Install
- Check
- Uninstall
- Execute
3. When the system loads a plug-in, it executes the Install() and Check() methods, and when it uninstalls, it executes the Uninstall() method.
4. The Execute method is the actual function executed.
#### Execute method
The parameters of the Execute method are input interface{} and op options.PluginOption

PluginOption is defined in
```
https://github.com/Autumn-27/ScopeSentry-Plugin-Template/blob/a76ac430153faff262e3d9a7cc25d0d23bee5f9d/internal/options/plugin.go#L10
```

input is input

op.ResultFunc is output

Special modules include AssetHandle, PortScanPreparation, and PortFingerprint. Input is a reference. Modifying input directly is to modify the result.

Other modules call op.ResultFunc callback function to return the result after obtaining the result

## Built-in methods that plugins can call
Currently, due to the limitations of the plugin system, third-party libraries cannot be called, so some methods are built into the system for calling, as follows:
```
github.com/Autumn-27/ScopeSentry-Scan/pkg/logger
github.com/Autumn-27/ScopeSentry-Scan/pkg/utils
github.com/Autumn-27/ScopeSentry-Scan/internal/options
github.com/Autumn-27/ScopeSentry-Scan/internal/bigcache
github.com/Autumn-27/ScopeSentry-Scan/internal/config
github.com/Autumn-27/ScopeSentry-Scan/internal/contextmanager
github.com/Autumn-27/ScopeSentry-Scan/i nternal/global
github.com/Autumn-27/ScopeSentry-Scan/internal/interfaces
github.com/Autumn-27/ScopeSentry-Scan/internal/mongodb
github.com/Autumn-27/ScopeSentry-Scan/internal/notification
github.com/Autumn-27/ScopeSentry-Scan/internal/pool
github.com/Autumn-27/ScopeSentry-Scan/internal/redis
github.com/Autumn-27/ScopeSentry-Scan/internal/results
github.com/Autumn-27/ScopeSentry-Scan/internal/types
```

All the methods below the packages mentioned above can be called,

> The main ones used are as follows
logger: log package, log provides local printing and printing methods sent to redis, please refer to the source code for details

utils: the toolkit provides a variety of methods, get the current time, multiple command execution methods, send http requests, send dns requests

bigcache: memory-based cache management, cache can be used for deduplication

contextmanager: context manager, each task will create a context, the task suspension and deletion depends on this context management, when writing plug-ins, if you need to stop the function, you need to use this context.

global: store some global variables, including node name and other information

mongodb: mongodb connector

redis: redis connector

notification: used to send notifications

pool: coroutine pool management

results: result processing

types: structure

## Input and output of each module

### TargetHandler

This module mainly processes the original input target, such as:
[targetparser](https://github.com/Autumn-27/ScopeSentry-Scan/blob/1.5-restructure/modules/targethandler/targetparser/targetparser.go)

This plug-in will process the original target, see the code comments for details.

This module can expand the functions, such as the original input data is "Baidu", write a new plug-in to process the original target of the company name and call some APIs or other methods to obtain some domain names and other information of the target.

> input
```
string
```

> output
```
string
```

### SubdomainScan
This module is a subdomain scanning module, which can integrate any subdomain tool

> input
```
string
```

> output
```
types.SubdomainResult
```

### SubdomainSecurity
This module is a subdomain security detection module, which detects the scanned domain name and stores the result in SubdoaminTakerResult

> input
```
types.SubdomainResult
```

> output
```
types.SubTakeResult
```

### PortScanPreparation

This module mainly performs some processing before port scanning, and handles whether to skip port scanning. A simple CDN judgment is built in. If it is CDN, port scanning is skipped.

The input of this module is a reference, and DomainSkip will be modified directly

> input
```
*types.DomainSkip
```

> output
```
Modify the input directly
```

### PortScan
This module mainly performs port survival scanning

> input

```
types.DomainSkip
```

> output
```
types.PortAlive
```

### PortFingerprint
This module performs port fingerprinting on live ports. It also directly modifies the input. The Type attribute is divided into "http" and "other". The remaining attributes can refer to the information in the database.

> input
```
*types.AssetOther
```

> output
```
Modify the input directly
```

### AssetMapping
This module processes http assets

> input
```
types.AssetOther
```

> output
```
types.AssetHttp
```

### AssetHandle
This module processes scanned assets. The built-in plug-in calls the web fingerprint recognition to perform fingerprint recognition on http assets. It can be expanded to perform weak password scanning on non-http ports (currently there is no built-in plug-in).
Assets can also be tagged in this module.

> input
```
types.AssetOther or types.AssetHttp
```

> output
```
types.AssetOther or types.AssetHttp
```

### URLScan
This module discovers urls for http assets. At the same time, if the first parameter returned by the Execute method is a []string url list, it will be sent to the crawler module together

> input
```
types.AssetHttp
```

> output
```
types.UrlResult
```

### WebCrawler
This module is a crawler module. The built-in plug-in is the rad crawler. The input of this module is the url found by the previous url scan

> input
```
[]string
```

> output
```
types.CrawlerResult
```

### URLSecurity
This module processes the results of url scanning and crawler scanning, such as the built-in plug-in scanning for sensitive information leakage and using url as the target of page monitoring.

> input
```
types.CrawlerResult or types.UrlResult
```

> output
```
This module has no fixed output. If you want to store it in the database, you need to do it yourself in the Execute method
```

### DirScan
Directory scanning module

> input
```
types.AssetHttp
```

> output
```
types.DirResult
```

### VulnerabilityScan
Vulnerability scanning module

> input
```
types.AssetOther or types.AssetHttp
```

> output
```
types.VulnResult
```