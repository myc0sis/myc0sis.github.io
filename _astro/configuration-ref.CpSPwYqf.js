import{$ as o,c as e}from"./_astro_assets.Db8TMCId.js";import{$ as r}from"./Callout.CuxkUWBP.js";import{F as t}from"./utils.CfiNOyk8.js";import"./astro/assets-service.CVSf40k3.js";import"./index.CVpbhN_F.js";import"./button.D-rezo_F.js";import"./createLucideIcon.p0hNPnRc.js";const c={title:"Configuration Reference"};function y(){return[{depth:2,slug:"site-configuration",text:"Site Configuration"},{depth:3,slug:"website",text:"website"},{depth:3,slug:"author",text:"author"},{depth:3,slug:"desc",text:"desc"},{depth:3,slug:"title",text:"title"},{depth:3,slug:"ogimage",text:"ogImage"},{depth:3,slug:"repo",text:"repo"},{depth:2,slug:"locale-configuration",text:"Locale Configuration"},{depth:3,slug:"lang",text:"lang"},{depth:3,slug:"langtag",text:"langTag"},{depth:2,slug:"menu-configuration",text:"Menu Configuration"},{depth:3,slug:"menu_items",text:"menu_items"},{depth:2,slug:"sidebar-navigation-configuration",text:"Sidebar Navigation Configuration"},{depth:3,slug:"side_nav_menu_order",text:"side_nav_menu_order"},{depth:2,slug:"global-settings",text:"Global Settings"},{depth:3,slug:"hide_table_of_contents",text:"hide_table_of_contents"},{depth:3,slug:"hide_breadcrumbs",text:"hide_breadcrumbs"},{depth:3,slug:"hide_side_navigations",text:"hide_side_navigations"},{depth:3,slug:"hide_datetime",text:"hide_datetime"},{depth:3,slug:"hide_time",text:"hide_time"},{depth:3,slug:"hide_search",text:"hide_search"},{depth:3,slug:"hide_repo_button",text:"hide_repo_button"},{depth:3,slug:"hide_author",text:"hide_author"},{depth:2,slug:"social-configuration",text:"Social Configuration"}]}const m=!0;function d(i){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return e(t,{children:[e(n.p,{children:["This document describes the available configuration options for your site. These settings are defined in the ",e(n.code,{children:"config.ts"})," file and control various aspects of your site’s behavior and appearance. Below is a detailed reference for each configuration property, including examples where applicable."]}),`
`,e(n.h2,{id:"site-configuration",children:"Site Configuration"}),`
`,e(n.h3,{id:"website",children:e(n.code,{children:"website"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"string"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": The URL of your site. Replace this with the deployed domain of your site to direct users to the correct address."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:'"https://hyperoot.dev"'})]}),`
`]}),`
`,e(n.h3,{id:"author",children:e(n.code,{children:"author"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"string"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": The name of the author or creator of the site. This value will be used to attribute content and provide credit."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:'"HYP3R00T"'})]}),`
`]}),`
`,e(n.h3,{id:"desc",children:e(n.code,{children:"desc"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"string"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": A brief description of your site. This summary provides context and information about the purpose and content of the site."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:'"Documentation template using Astro and Shadcn"'})]}),`
`]}),`
`,e(n.h3,{id:"title",children:e(n.code,{children:"title"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"string"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": The title of your site. This will be displayed in the browser tab and used for branding purposes."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:'"CelestialDocs"'})]}),`
`]}),`
`,e(n.h3,{id:"ogimage",children:e(n.code,{children:"ogImage"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"string"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": The filename of the image used for Open Graph (OG) sharing. This image will be shown when your site is shared on social media platforms."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:'"og-image.jpg"'})]}),`
`]}),`
`,e(n.h3,{id:"repo",children:e(n.code,{children:"repo"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"string"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": The URL to the repository hosting the source code of your site. This provides a link to where the site’s code can be found."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:'"https://github.com/HYP3R00T/CelestialDocs"'})]}),`
`]}),`
`,e(n.h2,{id:"locale-configuration",children:"Locale Configuration"}),`
`,e(n.h3,{id:"lang",children:e(n.code,{children:"lang"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"string"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:'"en"'})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": The HTML language code for your site. Set this to specify the language used for the content. If left empty, it defaults to ",e(n.code,{children:'"en"'}),"."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:'"en"'})," (for English)"]}),`
`]}),`
`,e(n.h3,{id:"langtag",children:e(n.code,{children:"langTag"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"array of strings"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:'["en-EN"]'})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": BCP 47 language tags used to specify the language and regional variations. Set this to customize the language settings. An empty array defaults to the environment’s default language."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:'["en-EN"]'})," for English (United Kingdom)"]}),`
`]}),`
`,e(n.h2,{id:"menu-configuration",children:"Menu Configuration"}),`
`,e(n.h3,{id:"menu_items",children:e(n.code,{children:"menu_items"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"array of objects"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": An array of menu items for the site’s navigation. Each item should have a ",e(n.code,{children:"title"})," and ",e(n.code,{children:"href"})," to define the menu link. This is currently empty but can be populated to create navigation links."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),`:
`,e(n.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"ts",children:e(n.code,{children:[e(n.span,{class:"line",children:[e(n.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"export"}),e(n.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:" const"}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" menu_items "}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"="}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" ["})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  {"}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" title"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "Home"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" href"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "/"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" },"})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  {"}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" title"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "About"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" href"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "/about"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" },"})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  {"}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" title"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "Contact"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" href"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "/contact"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" },"})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"]"}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:";"})]}),`
`,e(n.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,e(r,{variant:"danger",children:e(n.p,{children:"If you don’t want any menu item, then keep the array empty."})}),`
`,e(n.h2,{id:"sidebar-navigation-configuration",children:"Sidebar Navigation Configuration"}),`
`,e(n.h3,{id:"side_nav_menu_order",children:e(n.code,{children:"side_nav_menu_order"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"array of strings"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": An array defining the order of items in the sidebar navigation. The list should contain top-level folders and files (without extensions) to organize the sidebar menu."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),`:
`,e(n.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"ts",children:e(n.code,{children:[e(n.span,{class:"line",children:[e(n.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"export"}),e(n.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:" const"}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" side_nav_menu_order "}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"="}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" ["})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'  "getting-started"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'  "guides"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'  "custom-components"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'  "reference"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"]"}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:";"})]}),`
`,e(n.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,e(r,{variant:"danger",children:e(n.p,{children:"If you don’t want to order it manually, then keep the array empty."})}),`
`,e(n.h2,{id:"global-settings",children:"Global Settings"}),`
`,e(r,{variant:"danger",children:e(n.p,{children:["Don’t comment or delete anything. Use ",e(n.code,{children:"true"})," or ",e(n.code,{children:"false"})," to enable disable or enable the feature."]})}),`
`,e(n.h3,{id:"hide_table_of_contents",children:e(n.code,{children:"hide_table_of_contents"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"boolean"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:"false"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": Controls whether the Table of Contents (ToC) is hidden. Set this to ",e(n.code,{children:"true"})," to prevent the ToC from being displayed."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:"true"})," (to hide the ToC)"]}),`
`]}),`
`,e(n.h3,{id:"hide_breadcrumbs",children:e(n.code,{children:"hide_breadcrumbs"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"boolean"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:"false"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": Determines whether breadcrumbs should be hidden. Setting this to ",e(n.code,{children:"true"})," will hide breadcrumbs from the site’s pages."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:"true"})," (to hide breadcrumbs)"]}),`
`]}),`
`,e(n.h3,{id:"hide_side_navigations",children:e(n.code,{children:"hide_side_navigations"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"boolean"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:"false"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": Controls whether sidebar navigation should be hidden. Setting this to ",e(n.code,{children:"true"})," will hide the sidebar."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:"true"})," (to hide sidebar navigation)"]}),`
`]}),`
`,e(n.h3,{id:"hide_datetime",children:e(n.code,{children:"hide_datetime"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"boolean"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:"false"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": Indicates whether the date and time should be hidden. If set to ",e(n.code,{children:"true"}),", date and time information will not be displayed."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:"true"})," (to hide date and time)"]}),`
`]}),`
`,e(n.h3,{id:"hide_time",children:e(n.code,{children:"hide_time"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"boolean"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:"true"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": Controls whether the time should be hidden. This is set to ",e(n.code,{children:"true"})," by default to omit time information from being shown."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:"false"})," (to show time)"]}),`
`]}),`
`,e(n.h3,{id:"hide_search",children:e(n.code,{children:"hide_search"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"boolean"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:"false"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": Determines if the search functionality should be hidden. Setting this to ",e(n.code,{children:"true"})," will remove the search feature from the site."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:"true"})," (to hide the search feature)"]}),`
`]}),`
`,e(n.h3,{id:"hide_repo_button",children:e(n.code,{children:"hide_repo_button"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"boolean"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:"false"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": Controls whether the repository button is hidden. If set to ",e(n.code,{children:"true"}),", the button linking to the repository will not be displayed."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:"true"})," (to hide the repository button)"]}),`
`]}),`
`,e(n.h3,{id:"hide_author",children:e(n.code,{children:"hide_author"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"boolean"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Default"}),": ",e(n.code,{children:"false"})]}),`
`,e(n.li,{children:[e(n.strong,{children:"Description"}),": Specifies whether the author’s information should be hidden. Setting this to ",e(n.code,{children:"true"})," will prevent the author’s details from being shown."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Example"}),": ",e(n.code,{children:"true"})," (to hide author information)"]}),`
`]}),`
`,e(n.p,{children:"You can append the following section to your existing documentation:"}),`
`,e(n.hr,{}),`
`,e(n.h2,{id:"social-configuration",children:"Social Configuration"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Type"}),": ",e(n.code,{children:"array of objects"})]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Description"}),": An array defining the social media links that will appear in the footer of your site. Each object in the array should include ",e(n.code,{children:"name"}),", ",e(n.code,{children:"href"}),", ",e(n.code,{children:"linkTitle"}),", and ",e(n.code,{children:"active"})," properties to specify the social media platform, link, title, and whether the link is active."]}),`
`]}),`
`,e(n.li,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"Example"}),":"]}),`
`,e(n.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"ts",children:e(n.code,{children:[e(n.span,{class:"line",children:[e(n.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"export"}),e(n.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:" const"}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" Socials"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#DF8E1D","--shiki-dark":"#EED49F",fontStyle:"italic","--shiki-dark-font-style":"italic"},children:" SocialObjects "}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"="}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" ["})]}),`
`,e(n.span,{class:"line",children:e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"  ..."})}),`
`,e(n.span,{class:"line",children:e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  {"})}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"    name"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "Github"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"    href"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "https://github.com/HYP3R00T/"'}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"    linkTitle"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" `"}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"${"}),e(n.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:"SITE"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"."}),e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"title"}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"}"}),e(n.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" on Github`"}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"    active"}),e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),e(n.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:" true"}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,e(n.span,{class:"line",children:e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  },"})}),`
`,e(n.span,{class:"line",children:e(n.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:"  ..."})}),`
`,e(n.span,{class:"line",children:[e(n.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"]"}),e(n.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:";"})]}),`
`,e(n.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,e(r,{variant:"danger",children:e(n.p,{children:["If you don’t want any social links, then disable it using ",e(n.code,{children:"false"})," for ",e(n.code,{children:"active"}),". Don’t delete anything."]})}),`
`,e(n.p,{children:"This reference guide provides a comprehensive overview of the configuration options available for your site. Adjust these settings as needed to customize the appearance and behavior of your site according to your preferences."})]})}function s(i={}){const{wrapper:n}=i.components||{};return n?e(n,{...i,children:e(d,{...i})}):d(i)}const A="src/content/docs/Reference/configuration-ref.mdx",C="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Reference/configuration-ref.mdx",l=(i={})=>s({...i,components:{Fragment:t,...i.components,"astro-image":i.components?.img??o}});l[Symbol.for("mdx-component")]=!0;l[Symbol.for("astro.needsHeadRendering")]=!c.layout;l.moduleId="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Reference/configuration-ref.mdx";export{l as Content,m as __usesAstroImage,l as default,C as file,c as frontmatter,y as getHeadings,A as url};
