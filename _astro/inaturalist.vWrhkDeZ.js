import{a as u,$ as g,c as a}from"./_astro_assets.CZ5gf-Pk.js";import{c as p,r as y,m as b,a as o,F as c}from"./utils.cIojk6G5.js";/* empty css                                                                     */import"./astro/assets-service.CVSf40k3.js";import"./index.CVpbhN_F.js";const v=u("https://celestial.hyperoot.dev"),d=p(async(t,e,m)=>{const r=t.createAstro(v,e,m);r.self=d;const{perPage:l=5,taxonId:h,searchType:n="general"}=r.props;return y`${b()}<div class="inaturalist-container" data-astro-cid-jegoytsh> <input type="text" id="search-input"${o(n==="species"?"Search species...":"Search observations...","placeholder")} data-astro-cid-jegoytsh> <button id="search-button" data-astro-cid-jegoytsh>Search</button> <div id="inaturalist-data"${o(l,"data-per-page")}${o(h,"data-taxon-id")}${o(n,"data-search-type")} data-astro-cid-jegoytsh>
Enter a search term to view observations.
</div> </div> <div id="image-modal" class="modal" data-astro-cid-jegoytsh> <span class="close" data-astro-cid-jegoytsh>&times;</span> <img class="modal-content" id="modal-image" data-astro-cid-jegoytsh> <div id="modal-caption" data-astro-cid-jegoytsh></div> </div>  `},"/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/components/INaturalistData.astro",void 0),f={title:"iNaturalist Observations",description:"Search and view recent observations from iNaturalist"};function I(){return[{depth:2,slug:"general-search",text:"General Search"}]}const N=!0;function i(t){const e={h2:"h2",p:"p",...t.components};return a(c,{children:[a(e.h2,{id:"general-search",children:"General Search"}),`
`,a(e.p,{children:"Search for any observations:"}),`
`,a(d,{perPage:20,searchType:"general"})]})}function $(t={}){const{wrapper:e}=t.components||{};return e?a(e,{...t,children:a(i,{...t})}):i(t)}const C="src/content/docs/inaturalist.mdx",D="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/inaturalist.mdx",s=(t={})=>$({...t,components:{Fragment:c,...t.components,"astro-image":t.components?.img??g}});s[Symbol.for("mdx-component")]=!0;s[Symbol.for("astro.needsHeadRendering")]=!f.layout;s.moduleId="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/inaturalist.mdx";export{s as Content,N as __usesAstroImage,s as default,D as file,f as frontmatter,I as getHeadings,C as url};
