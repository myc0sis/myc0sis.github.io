import{c as t,r as a,m as n,u as r}from"./utils.DTkFFzAp.js";import"./index.CVpbhN_F.js";import"./astro/assets-service.CVSf40k3.js";const e=`<h1 id="research-sources--tools">Research: Sources &#x26; Tools</h1>
<h1 id="bookmarklets">Bookmarklets</h1>
<p>A <strong>bookmarklet</strong> is a special kind of bookmark within the web browser that allows you do things such save content or change how a webpage looks, all with just a click. It adds extra features to your browser without needing any extra tools or installation. Simply copy the code block and paste it into the address field when creating a new bookmark.</p>
<p>Below are a few bookmarklets used by the author:</p>
<p><strong><a href="https://scholar.google.com" rel="nofollow" target="_blank">GoogleScholar</a>:</strong></p>
<pre class="astro-code astro-code-themes catppuccin-latte catppuccin-macchiato" style="background-color:#eff1f5;--shiki-showSidebarOnMobile-bg:#1e1e1e;--shiki-dark-bg:#24273a;color:#4c4f69;--shiki-showSidebarOnMobile:#bbbbbb;--shiki-dark:#cad3f5; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>javascript:q = - + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!q) q = prompt("Search terms? ... ", ""); if (q!=null) location="https://scholar.google.com/scholar?hl=en&#x26;as_sdt=0%2C10&#x26;q=" + escape(q).replace(/ /g, "+"); void 0</span></span>
<span class="line"><span></span></span></code></pre>
<p>This bookmarklet lets you search Google Scholar in two ways:</p>
<ol>
<li><strong>Highlight to Search</strong>: If you’ve highlighted any text on a webpage, clicking the bookmarklet will automatically use that highlighted text as the search term on Google Scholar.</li>
<li><strong>Manual Search</strong>: If you haven’t highlighted anything, a prompt will pop up asking you to type in your search terms. After you enter them, it will take you to the Google Scholar search results for those terms.</li>
</ol>
<p>It’s a convenient tool for quickly searching Google Scholar based on what you’re reading or entering your own query.</p>
<p><strong><a href="https://arachnoboards.com/" rel="nofollow" target="_blank">Arachnoboards</a>:</strong></p>
<pre class="astro-code astro-code-themes catppuccin-latte catppuccin-macchiato" style="background-color:#eff1f5;--shiki-showSidebarOnMobile-bg:#1e1e1e;--shiki-dark-bg:#24273a;color:#4c4f69;--shiki-showSidebarOnMobile:#bbbbbb;--shiki-dark:#cad3f5; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://arachnoboards.com/search/?q='+' '+escape(q)})()</span></span>
<span class="line"><span></span></span></code></pre>
<p>This bookmarklet helps you search for something quickly on the Arachnoboards forum. When you click it, a box will pop up asking, “What are you looking for?” You just type in what you want to search for, and it will automatically take you to the search field on AB. It’s a handy shortcut for searching without needing to go to the site first.</p>
<p><strong><a href="https://tarantulaforum.com" rel="nofollow" target="_blank">TarantulaForum</a>:</strong></p>
<pre class="astro-code astro-code-themes catppuccin-latte catppuccin-macchiato" style="background-color:#eff1f5;--shiki-showSidebarOnMobile-bg:#1e1e1e;--shiki-dark-bg:#24273a;color:#4c4f69;--shiki-showSidebarOnMobile:#bbbbbb;--shiki-dark:#cad3f5; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://tarantulaforum.com/search/?q='+' '+escape(q)})()</span></span>
<span class="line"><span></span></span></code></pre>
<p>This bookmarklet helps you search for something quickly on the Tarantula forum.</p>
<p><strong><a href="https://bugguide.net" rel="nofollow" target="_blank">BugGuide</a>:</strong></p>
<pre class="astro-code astro-code-themes catppuccin-latte catppuccin-macchiato" style="background-color:#eff1f5;--shiki-showSidebarOnMobile-bg:#1e1e1e;--shiki-dark-bg:#24273a;color:#4c4f69;--shiki-showSidebarOnMobile:#bbbbbb;--shiki-dark:#cad3f5; overflow-x: auto;" tabindex="0" data-language="plaintext"><code><span class="line"><span>javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://bugguide.net/index.php?q=search&#x26;keys='+' '+escape(q)})()</span></span>
<span class="line"><span></span></span></code></pre>
<p>This bookmarklet allows you to search the BugGuide website easily.</p>`,s={title:"Research"},i="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/misc/research.md",l=void 0;function k(){return`
# Research: Sources & Tools

# Bookmarklets

A **bookmarklet** is a special kind of bookmark within the web browser that allows you do things such save content or change how a webpage looks, all with just a click. It adds extra features to your browser without needing any extra tools or installation. Simply copy the code block and paste it into the address field when creating a new bookmark.

Below are a few bookmarklets used by the author:


**[GoogleScholar](https://scholar.google.com):**
\`\`\`
javascript:q = - + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!q) q = prompt("Search terms? ... ", ""); if (q!=null) location="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C10&q=" + escape(q).replace(/ /g, "+"); void 0
\`\`\`

This bookmarklet lets you search Google Scholar in two ways:

1. **Highlight to Search**: If you've highlighted any text on a webpage, clicking the bookmarklet will automatically use that highlighted text as the search term on Google Scholar.
2. **Manual Search**: If you haven’t highlighted anything, a prompt will pop up asking you to type in your search terms. After you enter them, it will take you to the Google Scholar search results for those terms.

It's a convenient tool for quickly searching Google Scholar based on what you're reading or entering your own query.

**[Arachnoboards](https://arachnoboards.com/):**
\`\`\`
javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://arachnoboards.com/search/?q='+' '+escape(q)})()
\`\`\`

This bookmarklet helps you search for something quickly on the Arachnoboards forum. When you click it, a box will pop up asking, "What are you looking for?" You just type in what you want to search for, and it will automatically take you to the search field on AB. It’s a handy shortcut for searching without needing to go to the site first.

**[TarantulaForum](https://tarantulaforum.com):**
\`\`\`
javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://tarantulaforum.com/search/?q='+' '+escape(q)})()
\`\`\`

This bookmarklet helps you search for something quickly on the Tarantula forum. 

**[BugGuide](https://bugguide.net):**
\`\`\`
javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://bugguide.net/index.php?q=search&keys='+' '+escape(q)})()
\`\`\`

This bookmarklet allows you to search the BugGuide website easily.
`}function f(){return e}function m(){return[{depth:1,slug:"research-sources--tools",text:"Research: Sources & Tools"},{depth:1,slug:"bookmarklets",text:"Bookmarklets"}]}const y=t((c,h,p)=>{const{layout:u,...o}=s;return o.file=i,o.url=l,a`${n()}${r(e)}`});export{y as Content,f as compiledContent,y as default,i as file,s as frontmatter,m as getHeadings,k as rawContent,l as url};
