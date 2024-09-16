import{$ as o,c as n}from"./_astro_assets.PqnxZLRm.js";import{F as d}from"./utils.D4KYSbrh.js";import"./astro/assets-service.CVSf40k3.js";import"./index.CVpbhN_F.js";const l={title:"Frontmatter Reference"};function u(){return[{depth:2,slug:"properties",text:"Properties"},{depth:3,slug:"title",text:"title"},{depth:3,slug:"author",text:"author"},{depth:3,slug:"pubdatetime",text:"pubDatetime"},{depth:3,slug:"moddatetime",text:"modDatetime"},{depth:3,slug:"description",text:"description"},{depth:3,slug:"draft",text:"draft"},{depth:3,slug:"tags",text:"tags"},{depth:3,slug:"hide_breadcrumbs",text:"hide_breadcrumbs"},{depth:3,slug:"hide_toc",text:"hide_toc"},{depth:3,slug:"hide_sidenav",text:"hide_sidenav"},{depth:3,slug:"max_width",text:"max_width"}]}const f=!0;function r(i){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return n(d,{children:[n(e.p,{children:["You can customize individual Markdown and MDX pages in CelestialDocs by setting values in their frontmatter. For example, a regular page might set ",n(e.code,{children:"title"})," and ",n(e.code,{children:"description"})," fields."]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"md",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"---"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"title: Sample"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"description: Sample description"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:"---"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Page content goes here, after "}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"`---`"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"."})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.p,{children:"This document describes the available frontmatter properties for your content files. Frontmatter is a block of metadata that provides context and configuration for your content. Below is a detailed reference for each property, including their types, default values, and descriptions."}),`
`,n(e.h2,{id:"properties",children:"Properties"}),`
`,n(e.h3,{id:"title",children:n(e.code,{children:"title"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": The title of the content. This is a required field that represents the main heading or name of your document."]}),`
`]}),`
`,n(e.h3,{id:"author",children:n(e.code,{children:"author"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Default"}),": The author defined in the site configuration (",n(e.code,{children:"SITE.author"}),")"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": The name of the person or entity responsible for creating the content. If not specified, it defaults to the author defined in the site’s configuration."]}),`
`]}),`
`,n(e.h3,{id:"pubdatetime",children:n(e.code,{children:"pubDatetime"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"Date"})," (optional)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": The date and time when the content was published. This field is optional and can be used to specify when the content was made available."]}),`
`]}),`
`,n(e.h3,{id:"moddatetime",children:n(e.code,{children:"modDatetime"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"Date"})," (optional, nullable)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": The date and time when the content was last modified. This field is optional and can be null if no modification has occurred. It helps track the latest changes made to the content."]}),`
`]}),`
`,n(e.h3,{id:"description",children:n(e.code,{children:"description"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"string"})," (optional)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": A brief summary or description of the content. This optional field provides additional context or a teaser for the document."]}),`
`]}),`
`,n(e.h3,{id:"draft",children:n(e.code,{children:"draft"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"boolean"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Default"}),": ",n(e.code,{children:"false"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": Indicates whether the content is a draft. If set to ",n(e.code,{children:"true"}),", the content is considered a draft and may not be published or visible on the site."]}),`
`]}),`
`,n(e.h3,{id:"tags",children:n(e.code,{children:"tags"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"array of strings"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Default"}),": ",n(e.code,{children:"[]"})," (empty array)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": A list of tags associated with the content. Tags can be used for categorization and filtering purposes. The default is an empty array, meaning no tags are assigned unless specified."]}),`
`]}),`
`,n(e.h3,{id:"hide_breadcrumbs",children:n(e.code,{children:"hide_breadcrumbs"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"boolean"})," (optional)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Default"}),": ",n(e.code,{children:"false"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": Determines whether breadcrumbs should be hidden for the content. If set to ",n(e.code,{children:"true"}),", breadcrumbs will not be displayed. This is useful for customizing the navigation experience."]}),`
`]}),`
`,n(e.h3,{id:"hide_toc",children:n(e.code,{children:"hide_toc"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"boolean"})," (optional)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Default"}),": ",n(e.code,{children:"false"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": Specifies whether the Table of Contents (ToC) should be hidden. Setting this to ",n(e.code,{children:"true"})," will prevent the ToC from being shown, allowing for a cleaner layout if the ToC is not needed."]}),`
`]}),`
`,n(e.h3,{id:"hide_sidenav",children:n(e.code,{children:"hide_sidenav"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"boolean"})," (optional)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Default"}),": ",n(e.code,{children:"false"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": Indicates whether the sidebar navigation should be hidden. If set to ",n(e.code,{children:"true"}),", the sidebar will not be displayed, which can be useful for pages where a sidebar is unnecessary."]}),`
`]}),`
`,n(e.h3,{id:"max_width",children:n(e.code,{children:"max_width"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type"}),": ",n(e.code,{children:"boolean"})," (optional)"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Default"}),": ",n(e.code,{children:"false"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description"}),": Controls whether the content should use the maximum available width. Setting this to ",n(e.code,{children:"true"})," allows the content to stretch to the full width of the container, providing a more expansive layout."]}),`
`]}),`
`,n(e.p,{children:"This reference guide should help you configure the frontmatter for your content effectively. Adjust these properties to control various aspects of how your content is presented and organized."})]})}function c(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(r,{...i})}):r(i)}const g="src/content/docs/Reference/frontmatter-ref.mdx",m="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Reference/frontmatter-ref.mdx",t=(i={})=>c({...i,components:{Fragment:d,...i.components,"astro-image":i.components?.img??o}});t[Symbol.for("mdx-component")]=!0;t[Symbol.for("astro.needsHeadRendering")]=!l.layout;t.moduleId="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Reference/frontmatter-ref.mdx";export{t as Content,f as __usesAstroImage,t as default,m as file,l as frontmatter,u as getHeadings,g as url};
