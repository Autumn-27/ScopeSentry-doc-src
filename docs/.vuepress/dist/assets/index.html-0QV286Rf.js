import{_ as i}from"./plugin-cn-BOLOsel9.js";import{a as l,b as n,c as s,d as r,_ as p}from"./project-server-Q5MsyZ92.js";import{_ as o}from"./sns-cn-BKzKS_9T.js";import{_ as c}from"./url-cn-BA9OjS49.js";import{_ as h}from"./dir-cn-B7GZEEFW.js";import{_ as d,r as m,o as g,c as _,a as e,b as u,d as f,e as t}from"./app-Bcaz0a9_.js";const w={},b=t('<h2 id="_2024-12-15-1-5-4" tabindex="-1"><a class="header-anchor" href="#_2024-12-15-1-5-4"><span>2024.12.15-1.5.4</span></a></h2><p>1.修复bug 2.修改部分模块数据流动逻辑 3.增加截图变更历史</p><h2 id="_2024-12-8-1-5-3" tabindex="-1"><a class="header-anchor" href="#_2024-12-8-1-5-3"><span>2024.12.8-1.5.3</span></a></h2><p>1.修复多个bug 2.漏洞结果关联poc 3.poc增加tag标签，可根据tag标签分类选择</p><h2 id="_2024-12-1-1-5-2" tabindex="-1"><a class="header-anchor" href="#_2024-12-1-1-5-2"><span>2024.12.1-1.5.2</span></a></h2><p>1.优化扫描性能 2.修复poc危险等级显示问题 3.修复导出数据导致内存消耗过大 4.修复httpx导致panic 5.增加全局变量，插件可以使用全局变量初始化一些数据。</p><h2 id="_2024-11-24-1-5-1" tabindex="-1"><a class="header-anchor" href="#_2024-11-24-1-5-1"><span>2024.11.24-1.5.1</span></a></h2><p>增加： 端口目标、url目标处理、ipv6处理</p><p>修复： 1.项目聚合字段问题 2.导出字段问题 3.上下文管理问题 4.wayback内存占用过大 5.fingerprintx端口转换支持ipv6 6.插件报错导致程序一直重启 7.根域名获取错误</p><h2 id="_2024-11-19-1-5" tabindex="-1"><a class="header-anchor" href="#_2024-11-19-1-5"><span>2024.11.19-1.5</span></a></h2><ol><li>插件系统上线，支持自定义插件，扫描任务更改为通过扫描模板进行扫描。</li><li>资产测绘支持截图，以及资产变更历史</li><li>所有资产可以打标签</li><li>漏洞扫描支持自定义等级</li><li>漏洞、敏感信息增加结果状态</li><li>内置插件跳过cdn的端口扫描</li><li>页面监控增加相似度计算，diff工具</li><li>字典自定义</li><li>性能优化</li><li>自定义显示列</li><li>修复若干bug</li></ol><h3 id="插件市场" tabindex="-1"><a class="header-anchor" href="#插件市场"><span>插件市场</span></a></h3>',12),x={href:"https://plugin.scope-sentry.top/",target:"_blank",rel:"noopener noreferrer"},y=t('<h3 id="插件系统" tabindex="-1"><a class="header-anchor" href="#插件系统"><span>插件系统</span></a></h3><p><img src="'+i+'" alt="alt text"></p><h2 id="_2024-7-21-1-4" tabindex="-1"><a class="header-anchor" href="#_2024-7-21-1-4"><span>2024.7.21-1.4</span></a></h2><ol><li>资产聚合功能</li><li>修改docker-compose配置文件</li><li>增加删除资产功能</li><li>支持删除任务同时删除该任务的资产</li><li>支持根据任务名称搜索</li><li>优化部分Mongodb语句</li><li>优化目录扫描功能</li><li>端口扫描更换rustscan(可全端口扫描)</li><li>优化交互逻辑</li><li>url（增加存活扫描）、目录扫描增加状态码、响应长度，状态码可筛选，长度可排序。</li><li>敏感信息聚合（URL聚合、敏感信息名称聚合）</li><li>poc批量导入</li><li>关闭部分敏感信息检测规则（如果有添加有自定义的规则，建议做好备份防止被覆盖。）</li><li>节点名称支持设置为空，在web界面进行更改。</li><li>目录扫描字典、子域名字典改为文件存储。</li></ol><h3 id="新增" tabindex="-1"><a class="header-anchor" href="#新增"><span>新增</span></a></h3><ul><li>项目资产聚合</li></ul><h4 id="面板-概况" tabindex="-1"><a class="header-anchor" href="#面板-概况"><span>面板-概况</span></a></h4><p><img src="'+l+'" alt="alt text"></p><h4 id="子域名" tabindex="-1"><a class="header-anchor" href="#子域名"><span>子域名</span></a></h4><p><img src="'+n+'" alt="alt text"></p><h4 id="端口" tabindex="-1"><a class="header-anchor" href="#端口"><span>端口</span></a></h4><p><img src="'+s+'" alt="alt text"></p><h4 id="服务" tabindex="-1"><a class="header-anchor" href="#服务"><span>服务</span></a></h4><p><img src="'+r+'" alt="alt text"></p><h3 id="优化" tabindex="-1"><a class="header-anchor" href="#优化"><span>优化</span></a></h3><ul><li>优化交互逻辑</li></ul><h4 id="快捷语法搜索" tabindex="-1"><a class="header-anchor" href="#快捷语法搜索"><span>快捷语法搜索：</span></a></h4><p><img src="'+p+'" alt="alt text"></p><h4 id="敏感信息聚合" tabindex="-1"><a class="header-anchor" href="#敏感信息聚合"><span>敏感信息聚合</span></a></h4><p><img src="'+o+'" alt="alt text"></p><h4 id="增加筛选、排序" tabindex="-1"><a class="header-anchor" href="#增加筛选、排序"><span>增加筛选、排序</span></a></h4><p><img src="'+c+'" alt="alt text"></p><p><img src="'+h+'" alt="alt text"></p><h2 id="_2024-6-18-1-3" tabindex="-1"><a class="header-anchor" href="#_2024-6-18-1-3"><span>2024.6.18-1.3</span></a></h2><ol><li>增加资产导出功能</li><li>修复首页阻塞bug</li><li>修复扫描端bug，更改部分逻辑</li><li>更新系统完善</li><li>更换获取工具地址</li><li>修复节点任务添加bug</li></ol><h2 id="_2024-6-12-1-2" tabindex="-1"><a class="header-anchor" href="#_2024-6-12-1-2"><span>2024.6.12-1.2</span></a></h2><ol><li>修复bug</li><li>新增单机部署配置文件</li></ol><h2 id="_2024-6-5-1-0" tabindex="-1"><a class="header-anchor" href="#_2024-6-5-1-0"><span>2024.6.5-1.0</span></a></h2><ol><li>发版</li></ol>',29);function k(v,N){const a=m("ExternalLinkIcon");return g(),_("div",null,[b,e("p",null,[e("a",x,[u("插件市场"),f(a)])]),y])}const P=d(w,[["render",k],["__file","index.html.vue"]]),S=JSON.parse(`{"path":"/guide/update-history/","title":"更新记录","lang":"zh-CN","frontmatter":{"title":"更新记录","author":"Autumn","icon":"carbon:update-now","createTime":"2024/05/19 18:01:05","permalink":"/guide/update-history/","description":"2024.12.15-1.5.4 1.修复bug 2.修改部分模块数据流动逻辑 3.增加截图变更历史 2024.12.8-1.5.3 1.修复多个bug 2.漏洞结果关联poc 3.poc增加tag标签，可根据tag标签分类选择 2024.12.1-1.5.2 1.优化扫描性能 2.修复poc危险等级显示问题 3.修复导出数据导致内存消耗过大 4.修复...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'dark';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.scope-sentry.top/guide/update-history/"}],["meta",{"property":"og:site_name","content":"ScopeSentry"}],["meta",{"property":"og:title","content":"更新记录"}],["meta",{"property":"og:description","content":"2024.12.15-1.5.4 1.修复bug 2.修改部分模块数据流动逻辑 3.增加截图变更历史 2024.12.8-1.5.3 1.修复多个bug 2.漏洞结果关联poc 3.poc增加tag标签，可根据tag标签分类选择 2024.12.1-1.5.2 1.优化扫描性能 2.修复poc危险等级显示问题 3.修复导出数据导致内存消耗过大 4.修复..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.scope-sentry.top/images/plugin-cn.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-15T13:45:14.000Z"}],["meta",{"property":"article:author","content":"Autumn"}],["meta",{"property":"article:modified_time","content":"2024-12-15T13:45:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更新记录\\",\\"image\\":[\\"https://www.scope-sentry.top/images/plugin-cn.png\\",\\"https://www.scope-sentry.top/images/project-dsh.png\\",\\"https://www.scope-sentry.top/images/project-subdomain.png\\",\\"https://www.scope-sentry.top/images/project-port.png\\",\\"https://www.scope-sentry.top/images/project-server.png\\",\\"https://www.scope-sentry.top/images/search.gif\\",\\"https://www.scope-sentry.top/images/sns-cn.png\\",\\"https://www.scope-sentry.top/images/url-cn.png\\",\\"https://www.scope-sentry.top/images/dir-cn.png\\"],\\"dateModified\\":\\"2024-12-15T13:45:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Autumn\\"}]}"]]},"headers":[{"level":2,"title":"2024.12.15-1.5.4","slug":"_2024-12-15-1-5-4","link":"#_2024-12-15-1-5-4","children":[]},{"level":2,"title":"2024.12.8-1.5.3","slug":"_2024-12-8-1-5-3","link":"#_2024-12-8-1-5-3","children":[]},{"level":2,"title":"2024.12.1-1.5.2","slug":"_2024-12-1-1-5-2","link":"#_2024-12-1-1-5-2","children":[]},{"level":2,"title":"2024.11.24-1.5.1","slug":"_2024-11-24-1-5-1","link":"#_2024-11-24-1-5-1","children":[]},{"level":2,"title":"2024.11.19-1.5","slug":"_2024-11-19-1-5","link":"#_2024-11-19-1-5","children":[{"level":3,"title":"插件市场","slug":"插件市场","link":"#插件市场","children":[]},{"level":3,"title":"插件系统","slug":"插件系统","link":"#插件系统","children":[]}]},{"level":2,"title":"2024.7.21-1.4","slug":"_2024-7-21-1-4","link":"#_2024-7-21-1-4","children":[{"level":3,"title":"新增","slug":"新增","link":"#新增","children":[]},{"level":3,"title":"优化","slug":"优化","link":"#优化","children":[]}]},{"level":2,"title":"2024.6.18-1.3","slug":"_2024-6-18-1-3","link":"#_2024-6-18-1-3","children":[]},{"level":2,"title":"2024.6.12-1.2","slug":"_2024-6-12-1-2","link":"#_2024-6-12-1-2","children":[]},{"level":2,"title":"2024.6.5-1.0","slug":"_2024-6-5-1-0","link":"#_2024-6-5-1-0","children":[]}],"readingTime":{"minutes":2.53,"words":758},"git":{"updatedTime":1734270314000,"contributors":[{"name":"Autumn.home","email":"autumn@home.com","commits":11}]},"autoDesc":true,"filePathRelative":"notes/guide/更新记录.md"}`);export{P as comp,S as data};
