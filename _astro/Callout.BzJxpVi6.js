import{$ as r,c as n}from"./_astro_assets.ByUT2xnS.js";import{$ as s}from"./Callout.CuclNRFP.js";import{F as o}from"./utils.DhtOeFJn.js";import{C as a}from"./cat.D8FjX6R9.js";import"./astro/assets-service.BfIAfGjd.js";import"./index.CVpbhN_F.js";import"./button.O-9VyauQ.js";import"./createLucideIcon.p0hNPnRc.js";const c={title:"Callout"};function y(){return[{depth:2,slug:"callout",text:"Callout"},{depth:3,slug:"props",text:"Props"},{depth:3,slug:"basic-usage",text:"Basic Usage"},{depth:3,slug:"default-behavior",text:"Default Behavior"}]}const F=!0;function t(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...e.components};return n(o,{children:[n(i.h2,{id:"callout",children:"Callout"}),`
`,n(i.p,{children:["The ",n(i.code,{children:"Callout"})," component is designed to highlight important information, warnings, errors, or successes in your application. It is a versatile alert box with customizable variants and titles."]}),`
`,n(i.h3,{id:"props",children:"Props"}),`
`,n(i.ul,{children:[`
`,n(i.li,{children:[`
`,n(i.p,{children:n(i.strong,{children:n(i.code,{children:"variant"})})}),`
`,n(i.p,{children:["Type: ",n(i.code,{children:"string"})]}),`
`,n(i.p,{children:"Default: “info”"}),`
`,n(i.p,{children:["Options: ",n(i.code,{children:'"info" | "warning" | "danger" | "success"'})]}),`
`,n(i.p,{children:"Description: Defines the type of alert to display. The variant determines the color, icon, and default title of the alert."}),`
`]}),`
`,n(i.li,{children:[`
`,n(i.p,{children:n(i.strong,{children:n(i.code,{children:"title"})})}),`
`,n(i.p,{children:["Type: ",n(i.code,{children:"string"})]}),`
`,n(i.p,{children:"Default: Default titles based on the variant"}),`
`,n(i.p,{children:"Description: Custom title for the alert. If not provided, the default title for the specified variant will be used."}),`
`]}),`
`,n(i.li,{children:[`
`,n(i.p,{children:n(i.strong,{children:n(i.code,{children:"icon"})})}),`
`,n(i.p,{children:["Type: ",n(i.code,{children:"LucideIcon"})," (optional)"]}),`
`,n(i.p,{children:"Default: Default icon based on the variant"}),`
`,n(i.p,{children:["Description: A custom icon to use in the alert. If not provided, the default icon for the specified variant will be used. You can look for icons at ",n(i.a,{href:"https://lucide.dev/icons/",rel:"nofollow",target:"_blank",children:"lucide.dev"}),"."]}),`
`]}),`
`]}),`
`,n(i.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n(i.p,{children:"To use the Callout component, import it and use it in your Astro files with the desired variant and title."}),`
`,n(s,{variant:"info",children:n(i.p,{children:"This is an info message."})}),`
`,n(s,{variant:"warning",title:"Custom Warning Title",children:n(i.p,{children:"This is a warning message with a custom title."})}),`
`,n(s,{variant:"danger",icon:a,children:n(i.p,{children:"This is a danger message with a custom icon."})}),`
`,n(s,{variant:"success",title:"Custom Success Title",icon:a,children:n(i.p,{children:"This is a success message with a custom title and custom icon."})}),`
`,n(i.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"mdx",children:n(i.code,{children:[n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"import Callout from '@/components/Callout.astro';"})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"import { Cat } from 'lucide-react';"})}),`
`,n(i.span,{class:"line"}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="info">'})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is an info message."})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(i.span,{class:"line"}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="warning" title="Custom Warning Title">'})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a warning message with a custom title."})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(i.span,{class:"line"}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="danger" icon={Cat}>'})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a danger message with a custom icon."})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(i.span,{class:"line"}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:'<Callout variant="success" title="Custom Success Title" icon={Cat}>'})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is a success message with a custom title and custom icon."})}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"</Callout>"})}),`
`,n(i.span,{class:"line"})]})}),`
`,n(i.h3,{id:"default-behavior",children:"Default Behavior"}),`
`,n(i.p,{children:"If no variant is provided, the info variant will be used by default. Similarly, if no title is provided, the default title for the specified variant will be used."}),`
`,n(s,{children:n(i.p,{children:"This is an info message using the default settings."})}),`
`,n(i.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"astro",children:n(i.code,{children:[n(i.span,{class:"line",children:n(i.span,{style:{color:"#9CA0B0","--shiki-dark":"#6E738D",fontStyle:"italic","--shiki-dark-font-style":"italic"},children:"---"})}),`
`,n(i.span,{class:"line",children:[n(i.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"import"}),n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Callout "}),n(i.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"from"}),n(i.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" '@/components/Callout.astro'"}),n(i.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:";"})]}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#9CA0B0","--shiki-dark":"#6E738D",fontStyle:"italic","--shiki-dark-font-style":"italic"},children:"---"})}),`
`,n(i.span,{class:"line"}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#9CA0B0","--shiki-dark":"#6E738D",fontStyle:"italic","--shiki-dark-font-style":"italic"},children:"<!-- Using default info variant and title -->"})}),`
`,n(i.span,{class:"line",children:[n(i.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"<"}),n(i.span,{style:{color:"#EA76CB","--shiki-dark":"#F5BDE6"},children:"Callout"}),n(i.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:">"})]}),`
`,n(i.span,{class:"line",children:n(i.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  This is an info message using the default settings."})}),`
`,n(i.span,{class:"line",children:[n(i.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"</"}),n(i.span,{style:{color:"#EA76CB","--shiki-dark":"#F5BDE6"},children:"Callout"}),n(i.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:">"})]}),`
`,n(i.span,{class:"line"})]})})]})}function d(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(t,{...e})}):t(e)}const D="src/content/docs/Custom%20Components/Callout.mdx",A="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Custom Components/Callout.mdx",l=(e={})=>d({...e,components:{Fragment:o,...e.components,"astro-image":e.components?.img??r}});l[Symbol.for("mdx-component")]=!0;l[Symbol.for("astro.needsHeadRendering")]=!c.layout;l.moduleId="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Custom Components/Callout.mdx";export{l as Content,F as __usesAstroImage,l as default,A as file,c as frontmatter,y as getHeadings,D as url};
