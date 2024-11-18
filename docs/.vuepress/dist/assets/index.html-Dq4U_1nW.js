import{_ as e,o as n,c as t,e as a}from"./app-ByAcYPQL.js";const i="/images/create-task-en.png",s={},r=a('<p><img src="'+i+'" alt="alt text"></p><h2 id="scanning-task" tabindex="-1"><a class="header-anchor" href="#scanning-task"><span>Scanning task</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>During the scanning task, if the node is offline (docker will automatically restart), the program will automatically create a task to allow the node to continue running the unfinished task.</p></div><h3 id="task-name" tabindex="-1"><a class="header-anchor" href="#task-name"><span>Task name</span></a></h3><p>Customize the task name</p><h3 id="target" tabindex="-1"><a class="header-anchor" href="#target"><span>Target</span></a></h3><p>One target per line, and the target with a wildcard is best placed at the bottom (to prevent inconsistent task allocation).</p><h3 id="node-selection" tabindex="-1"><a class="header-anchor" href="#node-selection"><span>Node selection</span></a></h3><p>You can select the node to run the task. When you select a node by clicking <code>All</code>, a new node will automatically join this task when it is connected. Otherwise, the scanning task will only be performed in the selected node.</p><h3 id="scheduled-task" tabindex="-1"><a class="header-anchor" href="#scheduled-task"><span>Scheduled task</span></a></h3><p>After selecting a scheduled task, the system will run the task periodically according to the scheduled time.</p><h3 id="deduplication" tabindex="-1"><a class="header-anchor" href="#deduplication"><span>Deduplication</span></a></h3><p>When selecting subdomain deduplication scanning, the historical subdomain will be searched in the database. If it already exists, it will not be scanned.</p><p>When selecting port deduplication, only the ports where the target has no assets will be scanned during the port scanning process.</p><h3 id="subdomain-scanning" tabindex="-1"><a class="header-anchor" href="#subdomain-scanning"><span>Subdomain Scanning</span></a></h3><h4 id="subfinder" tabindex="-1"><a class="header-anchor" href="#subfinder"><span>Subfinder</span></a></h4><p>Refer to https://github.com/projectdiscovery/subfinder</p><h4 id="ksubdomain" tabindex="-1"><a class="header-anchor" href="#ksubdomain"><span>Ksubdomain</span></a></h4><p>Stateless subdomain blasting, refer to https://github.com/boy-hack/ksubdomain</p><p>The subdomain dictionary is the subdomain dictionary in the dictionary management.</p><h3 id="port-scanning" tabindex="-1"><a class="header-anchor" href="#port-scanning"><span>Port Scanning</span></a></h3><p>Select the port created in the port scanning dictionary to scan and perform port fingerprinting.</p><h3 id="directory-scanning" tabindex="-1"><a class="header-anchor" href="#directory-scanning"><span>Directory Scanning</span></a></h3><p>The directory scanning dictionary is set in the dictionary management</p><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>URL</span></a></h3><p>Discover more URLs from the target</p><h3 id="scanning-for-sensitive-information" tabindex="-1"><a class="header-anchor" href="#scanning-for-sensitive-information"><span>Scanning for sensitive information</span></a></h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Scanning for sensitive information will take up more CPU resources (may cause the program to run slowly depending on the number of URLs crawled, if possible, please change to a machine with a larger CPU), please configure it reasonably (or enable a small number of sensitive information rules). If you have a good optimization method, please contact me~~</p></div><p>Depends on URL scanning, sensitive information scanning can only be performed after URL scanning is enabled</p><h3 id="waybackuri" tabindex="-1"><a class="header-anchor" href="#waybackuri"><span>waybackuri</span></a></h3><p>Refer to https://github.com/tomnomnom/waybackurls</p><p>Discover more URLs</p><h3 id="page-monitoring" tabindex="-1"><a class="header-anchor" href="#page-monitoring"><span>Page monitoring</span></a></h3><p>ALL: All discovered URLs will be monitored for changes</p><p>JS: Only monitor changes in the content of JS URLs</p><h3 id="crawler" tabindex="-1"><a class="header-anchor" href="#crawler"><span>Crawler</span></a></h3><p>If URL scanning is enabled, the crawler input will be added to the URL scan results. (It consumes more memory and CPU, please configure parallel threads according to the system.)</p><p>Crawler configuration is in rad.</p><h3 id="vulnerability-scanning" tabindex="-1"><a class="header-anchor" href="#vulnerability-scanning"><span>Vulnerability scanning</span></a></h3><p>In the vulnerability scanning list, the first one is ALL POC. After selecting ALL POC, all POCs will be run.</p><h2 id="scheduled-tasks" tabindex="-1"><a class="header-anchor" href="#scheduled-tasks"><span>Scheduled tasks</span></a></h2><p>Scheduled tasks are divided into three types:</p><ul><li>Page monitoring</li><li>Scan type (select scheduled task when creating a scan task, and the task will be synchronized to the scheduled task list)</li><li>Project type (select scheduled task on the project page, and it will be synchronized to the scheduled task list)</li></ul><h3 id="page-monitoring-1" tabindex="-1"><a class="header-anchor" href="#page-monitoring-1"><span>Page monitoring</span></a></h3><p>On the configuration page, you can select the node to run page monitoring.</p><p>On the data page, you can add and delete the monitoring URL list.</p><h2 id="other-types" tabindex="-1"><a class="header-anchor" href="#other-types"><span>Other types</span></a></h2><p>For the other two types of scheduled tasks, you can view the task progress, and the task progress will be cleared each time the scheduled task starts.</p>',48),o=[r];function l(c,d){return n(),t("div",null,o)}const p=e(s,[["render",l],["__file","index.html.vue"]]),g=JSON.parse(`{"path":"/en/guide/task/","title":"Create Task","lang":"en-US","frontmatter":{"title":"Create Task","author":"Autumn","icon":"emojione:eye","createTime":"2024/06/04 23:17:53","permalink":"/en/guide/task/","description":"alt text Scanning task Tips During the scanning task, if the node is offline (docker will automatically restart), the program will automatically create a task to allow the node ...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.scope-sentry.top/guide/task/"}],["meta",{"property":"og:url","content":"https://www.scope-sentry.top/en/guide/task/"}],["meta",{"property":"og:site_name","content":"ScopeSentry"}],["meta",{"property":"og:title","content":"Create Task"}],["meta",{"property":"og:description","content":"alt text Scanning task Tips During the scanning task, if the node is offline (docker will automatically restart), the program will automatically create a task to allow the node ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.scope-sentry.top/images/create-task-en.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-04T15:58:05.000Z"}],["meta",{"property":"article:author","content":"Autumn"}],["meta",{"property":"article:modified_time","content":"2024-06-04T15:58:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Create Task\\",\\"image\\":[\\"https://www.scope-sentry.top/images/create-task-en.png\\"],\\"dateModified\\":\\"2024-06-04T15:58:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Autumn\\"}]}"]]},"headers":[{"level":2,"title":"Scanning task","slug":"scanning-task","link":"#scanning-task","children":[{"level":3,"title":"Task name","slug":"task-name","link":"#task-name","children":[]},{"level":3,"title":"Target","slug":"target","link":"#target","children":[]},{"level":3,"title":"Node selection","slug":"node-selection","link":"#node-selection","children":[]},{"level":3,"title":"Scheduled task","slug":"scheduled-task","link":"#scheduled-task","children":[]},{"level":3,"title":"Deduplication","slug":"deduplication","link":"#deduplication","children":[]},{"level":3,"title":"Subdomain Scanning","slug":"subdomain-scanning","link":"#subdomain-scanning","children":[]},{"level":3,"title":"Port Scanning","slug":"port-scanning","link":"#port-scanning","children":[]},{"level":3,"title":"Directory Scanning","slug":"directory-scanning","link":"#directory-scanning","children":[]},{"level":3,"title":"URL","slug":"url","link":"#url","children":[]},{"level":3,"title":"Scanning for sensitive information","slug":"scanning-for-sensitive-information","link":"#scanning-for-sensitive-information","children":[]},{"level":3,"title":"waybackuri","slug":"waybackuri","link":"#waybackuri","children":[]},{"level":3,"title":"Page monitoring","slug":"page-monitoring","link":"#page-monitoring","children":[]},{"level":3,"title":"Crawler","slug":"crawler","link":"#crawler","children":[]},{"level":3,"title":"Vulnerability scanning","slug":"vulnerability-scanning","link":"#vulnerability-scanning","children":[]}]},{"level":2,"title":"Scheduled tasks","slug":"scheduled-tasks","link":"#scheduled-tasks","children":[{"level":3,"title":"Page monitoring","slug":"page-monitoring-1","link":"#page-monitoring-1","children":[]}]},{"level":2,"title":"Other types","slug":"other-types","link":"#other-types","children":[]}],"readingTime":{"minutes":1.76,"words":527},"git":{"updatedTime":1717516685000,"contributors":[{"name":"Autumn.home","email":"autumn@home.com","commits":1}]},"autoDesc":true,"filePathRelative":"en/notes/guide/tutorial/Create Task.md","categoryList":[{"type":10000,"name":"notes"},{"type":10001,"name":"guide"},{"type":10005,"name":"tutorial"}]}`);export{p as comp,g as data};
