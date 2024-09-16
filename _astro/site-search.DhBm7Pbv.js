const e="Guides/site-search.mdx",t="docs",s="guides/site-search",n=`import Callout from "@/components/Callout.astro";

By default, CelestialDocs sites include full-text search powered by [Fuse.js](https://www.fusejs.io/), which is a fast and low-bandwidth search tool for static sites.

No configuration is required to enable search. Build and deploy your site, then use the search bar in the site header to find content.

<Callout variant="info">
You can trigger search using keyboard shortcut also. Just press \`ctrl\` + \`K\`
</Callout>

## Hide search

In \`config.js\`, you can disable the search function by keeping the value of \`hide_search\` as \`true\`.

\`\`\`js
// config.js

export const docconfig = {
  ...
  hide_search: true,
  ...
};
\`\`\`
`,o={title:"Site Search",author:"HYP3R00T",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},a={type:"content",filePath:"/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Guides/site-search.mdx",rawData:void 0};export{a as _internal,n as body,t as collection,o as data,e as id,s as slug};
