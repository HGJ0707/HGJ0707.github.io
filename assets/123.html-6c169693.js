import{_ as e,o as i,c as a,a as d}from"./app-c8ea5739.js";const n={},s=d(`<h3 id="linux-命令课上案例" tabindex="-1"><a class="header-anchor" href="#linux-命令课上案例" aria-hidden="true">#</a> Linux 命令课上案例</h3><h4 id="案例1-ls-pwd-cd-touch-mkdir-cp-mv-rm" tabindex="-1"><a class="header-anchor" href="#案例1-ls-pwd-cd-touch-mkdir-cp-mv-rm" aria-hidden="true">#</a> 案例1: ls/pwd/cd/touch/mkdir/cp/mv/rm</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01.查看当前路径位置
02.查看当前目录下有哪些文件和文件夹
03.创建 adir,bdir,cdir 三个文件夹(创建一个文件夹/创建多个文件夹)
04.切换到 adir 目录下
05.创建文件 aa (创建一个文件)
06.切换到 admin 目录下(绝对路径/相对路径)
07.创建文件 file 并重命名为 aa
08.复制文件 aa 到 adir 目录下(要求提示是否覆盖)
09.复制文件夹 bdir 到 cdir 目录下
10.移动文件 aa 到 bdir 目录下
11.创建 bb,cc 两个文件(创建多个文件)
12.删除 bb 文件
13.删除 adir 文件夹
14.删除当前目录下所有文件和文件夹
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例2-cat-more-grep-重定向-管道符-clear" tabindex="-1"><a class="header-anchor" href="#案例2-cat-more-grep-重定向-管道符-clear" aria-hidden="true">#</a> 案例2: cat/more/grep/重定向/管道符/clear</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 将根目录下所有文件的详细信息输出到 demo 文件中(包含隐藏文件)
02. 直接查看 demo 文件的内容
03. 将 /usr/bin 目录下所有文件的详细信息追加到 demo 文件中
04. 以分屏的形式查看 demo 文件的内容
05. 查找 demo 文件内容中包含 mysql 的信息
06. 在 /usr/bin 目录下所有文件的信息中查找包含 mysql 的信息
07. 清空当前终端窗口中的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例3-head-tail-tail-f" tabindex="-1"><a class="header-anchor" href="#案例3-head-tail-tail-f" aria-hidden="true">#</a> 案例3: head/tail/tail -f</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 将根目录下所有文件的详细信息输出到 demo 文件中
02. 查看 demo 文件前 5 行内容
03. 查看 demo 文件后 5 行内容
04. 将 ping www.itheima.com 的信息输出到 ping_log 文件中
05. 重新开启一个终端窗口, 动态查看 ping_log 文件中的信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例4-重启关机-查看系统信息" tabindex="-1"><a class="header-anchor" href="#案例4-重启关机-查看系统信息" aria-hidden="true">#</a> 案例4: 重启关机/查看系统信息</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 查看当前系统内核版本信息
02. 查看当前系统发行版本信息
03. 重启当前系统
04. 关闭当前系统
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例5-ps-kill-top" tabindex="-1"><a class="header-anchor" href="#案例5-ps-kill-top" aria-hidden="true">#</a> 案例5: ps/kill/top</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 查看当前系统下的进程信息
02. 手动打开火狐浏览器
03. 获取火狐浏览器的进程信息(进程 ID)
04. 通过结束火狐浏览器进程的方式关闭浏览器
05. 打开当前系统的&#39;任务管理器&#39;(动态查看进程信息)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例6-netstat-lsof" tabindex="-1"><a class="header-anchor" href="#案例6-netstat-lsof" aria-hidden="true">#</a> 案例6: netstat/lsof</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 查看当前系统中开放的端口有哪些
02. 查看哪个程序正在使用 3306 端口(需要 root 用户权限)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例7-chmod" tabindex="-1"><a class="header-anchor" href="#案例7-chmod" aria-hidden="true">#</a> 案例7: chmod</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>01. 在当前目录下创建文件 cm_demo 
02. 查看文件当前权限状态
03. 使用字母法将文件权限修改为: 拥有者: 可读/用户组: 可写/其他用户:可执行
04. 使用数字法将文件权限修改为: 拥有者: 可读可写可执行/用户组:可读可写/其他用户:可写可执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例8-which-su-passwd-exit-who" tabindex="-1"><a class="header-anchor" href="#案例8-which-su-passwd-exit-who" aria-hidden="true">#</a> 案例8: which/su/passwd/exit/who</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 查看 mysql 程序的存放位置
02. 从普通用户切换至 root 用户, 再从 root 用户切换回普通用户
03. 查看当前系统中所有登录用户的信息
04. 退出当前终端窗口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例9-find" tabindex="-1"><a class="header-anchor" href="#案例9-find" aria-hidden="true">#</a> 案例9: find</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 在路径下创建 adir,bdir 两个文件夹
02. 在 adir 目录下创建文件 f_demo
03. 切换路径到 bdir 目录下
04. 在当前目录下从 /home/admin 目录中查找 f_demo 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例10-ln-s" tabindex="-1"><a class="header-anchor" href="#案例10-ln-s" aria-hidden="true">#</a> 案例10: ln -s</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 在当前路径下创建文件 demo
02. 给 demo 文件创建链接文件名为 ldemo
03. 修改 ldemo 链接文件的内容
04. 查看 demo 文件的内容是否同样变化
05. 修改 demo 文件内容, 查看 ldemo 链接文件内容是否同样变化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例11-tar-gzip-bzip2-zip-unzip" tabindex="-1"><a class="header-anchor" href="#案例11-tar-gzip-bzip2-zip-unzip" aria-hidden="true">#</a> 案例11: tar/gzip/bzip2/zip/unzip</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 在当前路径下创建 atdir,btdir 两个文件夹
02. 在 atdir 目录下创建 aa,bb,cc 三个文件
03. 分别用三种压缩方法对 atdir 目录进行压缩
04. 分别解压上一步产生的压缩包文件内容至 btdir 目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="案例12-vi" tabindex="-1"><a class="header-anchor" href="#案例12-vi" aria-hidden="true">#</a> 案例12: vi</h4><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code>在桌面上打开终端窗口, 执行如下操作:
01. 使用快捷键 Ctrl + Alt + F2 切换系统至命令行模式
02. 根据提示依次输入用户名: admin 密码: ack123??
03. 在当前目录下利用 vi 命令创建文件 vi_demo 并打开
04. 修改 vi_demo 文件内容为: hello linux
05. 保存文件内容并退出 vi 模式
06. 查看 vi_demo 文件内容, 确认修改是否完成!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),l=[s];function r(c,v){return i(),a("div",null,l)}const m=e(n,[["render",r],["__file","123.html.vue"]]);export{m as default};
