const o="misc/research.md",e="docs",t="misc/research",n=`
# Research: Sources & Tools

<br/><br/>


# Bookmarklets

A **bookmarklet** is a special kind of bookmark within the web browser that allows you do things such save content or change how a webpage looks, all with just a click. It adds extra features to your browser without needing any extra tools or installation. Simply copy the code block and paste it into the address field when creating a new bookmark.

Below are a few bookmarklets used by the author:

<br/><br/>


**[GoogleScholar](https://scholar.google.com):**
\`\`\`
javascript:q = - + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!q) q = prompt("Search terms? ... ", ""); if (q!=null) location="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C10&q=" + escape(q).replace(/ /g, "+"); void 0
\`\`\`
<br/><br/>

This bookmarklet lets you search Google Scholar in two ways:

1. **Highlight to Search**: If you've highlighted any text on a webpage, clicking the bookmarklet will automatically use that highlighted text as the search term on Google Scholar.
2. **Manual Search**: If you haven’t highlighted anything, a prompt will pop up asking you to type in your search terms. After you enter them, it will take you to the Google Scholar search results for those terms.

It's a convenient tool for quickly searching Google Scholar based on what you're reading or entering your own query.

<br/><br/>


**[Arachnoboards](https://arachnoboards.com/):**
\`\`\`
javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://arachnoboards.com/search/?q='+' '+escape(q)})()
\`\`\`

<br/><br/>

This bookmarklet helps you search for something quickly on the Arachnoboards forum. When you click it, a box will pop up asking, "What are you looking for?" You just type in what you want to search for, and it will automatically take you to the search field on AB. It’s a handy shortcut for searching without needing to go to the site first.

<br/><br/>


**[TarantulaForum](https://tarantulaforum.com):**
\`\`\`
javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://tarantulaforum.com/search/?q='+' '+escape(q)})()
\`\`\`
<br/><br/>


This bookmarklet helps you search for something quickly on the Tarantula forum. 

<br/><br/>

**[BugGuide](https://bugguide.net):**
\`\`\`
javascript:(function(){void(q=prompt('What are you looking for?',''));if(q)location.href='https://bugguide.net/index.php?q=search&keys='+' '+escape(q)})()
\`\`\`
<br/><br/>


This bookmarklet allows you to search the BugGuide website easily.
`,a={title:"Research",author:"bad juju",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},r={type:"content",filePath:"/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/misc/research.md",rawData:void 0};export{r as _internal,n as body,e as collection,a as data,o as id,t as slug};
