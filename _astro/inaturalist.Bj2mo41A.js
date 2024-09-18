import{a as h,$ as p,c as e}from"./_astro_assets.DB0yVT8v.js";import{c as g,r as b,m as f,a as i,F as d}from"./utils.Cp6E1fwQ.js";import"./astro/assets-service.CVSf40k3.js";import"./index.CVpbhN_F.js";const x=h("https://celestial.hyperoot.dev"),r=g(async(t,n,m)=>{const a=t.createAstro(x,n,m);a.self=r;const{perPage:l=5,taxonId:u}=a.props;return b`${f()}<div id="inaturalist-data"${i(l,"data-per-page")}${i(u,"data-taxon-id")}>
Loading iNaturalist data...
</div> `},"/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/components/INaturalistData.astro",void 0),o={title:"iNaturalist Observations",description:"Recent observations from iNaturalist"};function A(){return[{depth:1,slug:"inaturalist-observations",text:"iNaturalist Observations"},{depth:2,slug:"birds",text:"Birds"},{depth:2,slug:"plants",text:"Plants"}]}const P=!0;function c(t){const n={h1:"h1",h2:"h2",p:"p",...t.components};return e(d,{children:[e(n.h1,{id:"inaturalist-observations",children:o.title}),`
`,o.description,`
`,e(n.p,{children:"Here are some recent observations from iNaturalist:"}),`
`,e(r,{perPage:5}),`
`,e(n.h2,{id:"birds",children:"Birds"}),`
`,e(n.p,{children:"Here are some recent bird observations:"}),`
`,e(r,{perPage:3,taxonId:3}),`
`,e(n.h2,{id:"plants",children:"Plants"}),`
`,e(n.p,{children:"And here are some plant observations:"}),`
`,e(r,{perPage:3,taxonId:47126})]})}function y(t={}){const{wrapper:n}=t.components||{};return n?e(n,{...t,children:e(c,{...t})}):c(t)}const H="src/content/docs/inaturalist.mdx",w="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/inaturalist.mdx",s=(t={})=>y({...t,components:{Fragment:d,...t.components,"astro-image":t.components?.img??p}});s[Symbol.for("mdx-component")]=!0;s[Symbol.for("astro.needsHeadRendering")]=!o.layout;s.moduleId="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/inaturalist.mdx";export{s as Content,P as __usesAstroImage,s as default,w as file,o as frontmatter,A as getHeadings,H as url};
