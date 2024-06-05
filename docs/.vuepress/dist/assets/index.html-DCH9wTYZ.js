import{_ as t,a as e,b as n,c as s}from"./slack-CDTqI4rm.js";import{_ as a,o,c as i,e as r}from"./app-B_xEVcCV.js";const p="/images/system-config-cn.png",c="/images/node-config-cn.png",l={},d=r('<h2 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置"><span>系统配置</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>导航：配置-&gt;系统配置-&gt;系统配置</li><li>通过此配置将会覆盖所有的扫描节点配置！</li><li>默认系统配置适合CPU:2线程、2G内存，可根据自己的系统进行配置。同时支持在节点处自定义配置各个节点的扫描线程。</li></ul></div><p><img src="'+p+'" alt="alt text"></p><p><strong>时区</strong>：设置时区</p><p><strong>最大任务数量</strong>： 一个目标（URL、IP）为一个任务</p><p><strong>目录扫描并发数</strong>：设置目录扫描的并发限制</p><p><strong>端口扫描并发数</strong>：设置端口扫描的并发限制</p><p><strong>爬虫并行数</strong>：设置爬虫的并发数，爬虫采用rad工具，并行数代表最多起几个rad进行，由于爬虫较为耗费内存，请根据系统配置</p><p><strong>URL爬取线程数</strong>: 运行URL爬取的线程数。</p><p><strong>最大URL获取数量</strong>： 单个目标URL的最大获取数量防止CPU过度消耗（实际测试会比这个数量要大）。</p><h2 id="节点配置" tabindex="-1"><a class="header-anchor" href="#节点配置"><span>节点配置</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>导航：节点管理-&gt;选择对应节点-&gt;设置</li><li>通过此配置覆盖选择节点的扫描配置！</li></ul></div><p><img src="'+c+'" alt="alt text"></p><p><strong>最大任务数量</strong>： 一个<strong>目标</strong>（URL、IP）为一个任务</p><p><strong>目录扫描并发数</strong>：设置目录扫描的并发限制</p><p><strong>端口扫描并发数</strong>：设置端口扫描的并发限制</p><p><strong>爬虫并行数</strong>：设置爬虫的并发数，爬虫采用rad工具，并行数代表最多起几个rad进行，由于爬虫较为耗费内存，请根据系统配置</p><p><strong>URL爬取线程数</strong>: 运行URL爬取的线程数。</p><p><strong>最大URL获取数量</strong>： 单个目标URL的最大获取数量防止CPU过度消耗（实际测试会比这个数量要大）。</p><p><strong>状态</strong>：状态为关闭时，扫描任务不会使用该节点。</p><h2 id="通知配置" tabindex="-1"><a class="header-anchor" href="#通知配置"><span>通知配置</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>导航：配置-&gt;系统配置-&gt;通知配置</p></div><p><img src="'+t+'" alt="alt text"></p><h3 id="新增通知接口" tabindex="-1"><a class="header-anchor" href="#新增通知接口"><span>新增通知接口</span></a></h3><p><em>msg</em>为消息参数的位置</p><p>例子： 钉钉： <img src="'+e+'" alt="alt text"> 选择自定义关键词 <img src="'+n+'" alt="alt text"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>{&quot;at&quot;:{&quot;atUserIds&quot;:[&quot;014728255240768602&quot;],&quot;isAtAll&quot;:false},&quot;text&quot;:{&quot;content&quot;:&quot;ScoSen*msg*&quot;},&quot;msgtype&quot;:&quot;text&quot;}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Slack: <img src="'+s+'" alt="alt text"></p><h2 id="subfinder配置" tabindex="-1"><a class="header-anchor" href="#subfinder配置"><span>subfinder配置</span></a></h2><p>参考https://github.com/projectdiscovery/subfinder 将配置文件填入文本框中</p><h2 id="rad配置" tabindex="-1"><a class="header-anchor" href="#rad配置"><span>rad配置</span></a></h2><p>参考https://github.com/chaitin/rad 将配置文件填入文本框中</p>',32),g=[d];function m(h,u){return o(),i("div",null,g)}const w=a(l,[["render",m],["__file","index.html.vue"]]),_=JSON.parse(`{"path":"/guide/system-config/","title":"系统配置","lang":"zh-CN","frontmatter":{"title":"系统配置","author":"Autumn","icon":"icon-park-outline:config","createTime":"2024/05/28 22:55:29","permalink":"/guide/system-config/","description":"系统配置 提示 导航：配置->系统配置->系统配置 通过此配置将会覆盖所有的扫描节点配置！ 默认系统配置适合CPU:2线程、2G内存，可根据自己的系统进行配置。同时支持在节点处自定义配置各个节点的扫描线程。 alt text 时区：设置时区 最大任务数量： 一个目标（URL、IP）为一个任务 目录扫描并发数：设置目录扫描的并发限制 端口扫描并发数：设置...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.scope-sentry.top/en/guide/system-config/"}],["meta",{"property":"og:url","content":"https://www.scope-sentry.top/guide/system-config/"}],["meta",{"property":"og:site_name","content":"ScopeSentry"}],["meta",{"property":"og:title","content":"系统配置"}],["meta",{"property":"og:description","content":"系统配置 提示 导航：配置->系统配置->系统配置 通过此配置将会覆盖所有的扫描节点配置！ 默认系统配置适合CPU:2线程、2G内存，可根据自己的系统进行配置。同时支持在节点处自定义配置各个节点的扫描线程。 alt text 时区：设置时区 最大任务数量： 一个目标（URL、IP）为一个任务 目录扫描并发数：设置目录扫描的并发限制 端口扫描并发数：设置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.scope-sentry.top/images/system-config-cn.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-04T15:58:05.000Z"}],["meta",{"property":"article:author","content":"Autumn"}],["meta",{"property":"article:modified_time","content":"2024-06-04T15:58:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统配置\\",\\"image\\":[\\"https://www.scope-sentry.top/images/system-config-cn.png\\",\\"https://www.scope-sentry.top/images/node-config-cn.png\\",\\"https://www.scope-sentry.top/images/webhook-cn.png\\",\\"https://www.scope-sentry.top/images/dingding.png\\",\\"https://www.scope-sentry.top/images/dingding2.png\\",\\"https://www.scope-sentry.top/images/slack.png\\"],\\"dateModified\\":\\"2024-06-04T15:58:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Autumn\\"}]}"]]},"headers":[{"level":2,"title":"系统配置","slug":"系统配置","link":"#系统配置","children":[]},{"level":2,"title":"节点配置","slug":"节点配置","link":"#节点配置","children":[]},{"level":2,"title":"通知配置","slug":"通知配置","link":"#通知配置","children":[{"level":3,"title":"新增通知接口","slug":"新增通知接口","link":"#新增通知接口","children":[]}]},{"level":2,"title":"subfinder配置","slug":"subfinder配置","link":"#subfinder配置","children":[]},{"level":2,"title":"rad配置","slug":"rad配置","link":"#rad配置","children":[]}],"readingTime":{"minutes":1.97,"words":591},"git":{"updatedTime":1717516685000,"contributors":[{"name":"Autumn.home","email":"autumn@home.com","commits":4}]},"autoDesc":true,"filePathRelative":"notes/guide/使用教程/系统配置.md"}`);export{w as comp,_ as data};
