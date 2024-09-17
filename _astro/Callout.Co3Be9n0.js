import{j as u,c as p,b as N,r as a,m as $,d as s,e as j}from"./utils.BvKjCIRf.js";import{a as C}from"./_astro_assets.CiHKEXzS.js";import{r as m}from"./index.CVpbhN_F.js";import{c as I,B as R}from"./button.07mW-eQc.js";import{c as n}from"./createLucideIcon.p0hNPnRc.js";/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=n("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=n("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=n("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=n("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),P=I("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),h=m.forwardRef(({className:e,variant:r,...t},o)=>u.jsx("div",{ref:o,role:"alert",className:p(P({variant:r}),e),...t}));h.displayName="Alert";const v=m.forwardRef(({className:e,...r},t)=>u.jsx("h5",{ref:t,className:p("mb-1 font-medium leading-none tracking-tight",e),...r}));v.displayName="AlertTitle";const y=m.forwardRef(({className:e,...r},t)=>u.jsx("div",{ref:t,className:p("text-sm [&_p]:leading-relaxed",e),...r}));y.displayName="AlertDescription";const S=C("https://celestial.hyperoot.dev"),V=N((e,r,t)=>{const o=e.createAstro(S,r,t);o.self=V;const{variant:d,title:k,icon:b}=o.props,g={info:"border-Blue bg-Blue text-background hover:bg-Blue cursor-default",warning:"border-Orange bg-Orange text-background hover:bg-Orange cursor-default",danger:"border-Red bg-Red text-background hover:bg-Red cursor-default",success:"border-Green bg-Green text-background hover:bg-Green cursor-default"},x={info:T,warning:O,danger:D,success:B},A={info:"Info",warning:"Watch Out",danger:"Danger",success:"Success"},l=d&&g[d]?d:"info",w=b||x[l],M=k||A[l],f=g[l];return a`${$()}<div class="callout py-2 w-full"> ${s(e,"Alert",h,{className:`flex flex-row items-start gap-2 ${f}`},{default:i=>a` ${s(i,"Button",R,{variant:"ghost",size:"icon",className:`${f}`},{default:c=>a` ${s(c,"Icon",w,{className:"h-[1.2rem] w-[1.2rem]"})} `})} <div> ${s(i,"AlertTitle",v,{className:"m-0"},{default:c=>a`${M}`})} ${s(i,"AlertDescription",y,{},{default:c=>a` ${j(c,t.default)} `})} </div> `})} </div>`},"/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/components/Callout.astro",void 0);export{V as $};
