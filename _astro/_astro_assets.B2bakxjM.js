import{R as wt,h as st,i as E,b as ot,r as O,m as nt}from"./utils.bXTw8JyO.js";import{A as g,a as M,b as C,N as y,F as D,E as q,c as U,d as vt,r as ct,i as G,e as F,f as bt,D as yt,_ as jt,I as It,g as lt}from"./astro/assets-service.CVSf40k3.js";const Et="4.12.2";function kt(){return e=>{if(typeof e=="string")throw new g({...M,message:M.message(JSON.stringify(e))});let i=[...Object.values(e)];if(i.length===0)throw new g({...C,message:C.message(JSON.stringify(e))});return Promise.all(i.map(a=>a()))}}function pt(t){return{site:new URL(t),generator:`Astro v${Et}`,glob:kt()}}const rt="astro:jsx",Y=Symbol("empty"),V=t=>t;function N(t){return t&&typeof t=="object"&&t[rt]}function Tt(t){if(typeof t.type=="string")return t;const e={};if(N(t.props.children)){const i=t.props.children;if(!N(i)||!("slot"in i.props))return;const a=V(i.props.slot);e[a]=[i],e[a].$$slot=!0,delete i.props.slot,delete t.props.children}else Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(i=>{if(!N(i)||!("slot"in i.props))return i;const a=V(i.props.slot);return Array.isArray(e[a])?e[a].push(i):(e[a]=[i],e[a].$$slot=!0),delete i.props.slot,Y}).filter(i=>i!==Y));Object.assign(t.props,e)}function mt(t){return typeof t=="string"?st(t):Array.isArray(t)?t.map(e=>mt(e)):t}function St(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const e=mt(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:e});return}if("set:text"in t.props){const e=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:e});return}}}function Ze(t,e){const i={[wt]:"astro:jsx",[rt]:!0,type:t,props:e??{}};return St(i),Tt(i),i}function j(t={},e,{class:i}={}){let a="";i&&(typeof t.class<"u"?t.class+=` ${i}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],i]:t.class=i);for(const[s,o]of Object.entries(t))a+=E(o,s,!0);return st(a)}function At(t){return t.fsPath&&!("fsPath"in t)}const Pt=new TextDecoder,l=(t,e=0,i=t.length)=>Pt.decode(t.slice(e,i)),I=(t,e=0,i=t.length)=>t.slice(e,i).reduce((a,s)=>a+("0"+s.toString(16)).slice(-2),""),J=(t,e=0)=>{const i=t[e]+t[e+1]*256;return i|(i&2**15)*131070},A=(t,e=0)=>t[e]*2**8+t[e+1],m=(t,e=0)=>t[e]+t[e+1]*2**8,X=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16,_t=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16+(t[e+3]<<24),r=(t,e=0)=>t[e]*2**24+t[e+1]*2**16+t[e+2]*2**8+t[e+3],v=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16+t[e+3]*2**24,Nt={readUInt16BE:A,readUInt16LE:m,readUInt32BE:r,readUInt32LE:v};function h(t,e,i,a){i=i||0;const s=a?"BE":"LE",o="readUInt"+e+s;return Nt[o](t,i)}function $t(t,e){if(t.length-e<4)return;const i=r(t,e);if(!(t.length-e<i))return{name:l(t,4+e,8+e),offset:e,size:i}}function w(t,e,i){for(;i<t.length;){const a=$t(t,i);if(!a)break;if(a.name===e)return a;i+=a.size}}const Ot={validate:t=>l(t,0,2)==="BM",calculate:t=>({height:Math.abs(_t(t,22)),width:v(t,18)})},Ft=1,zt=6,Lt=16;function W(t,e){const i=t[e];return i===0?256:i}function Z(t,e){const i=zt+e*Lt;return{height:W(t,i+1),width:W(t,i)}}const dt={validate(t){const e=m(t,0),i=m(t,4);return e!==0||i===0?!1:m(t,2)===Ft},calculate(t){const e=m(t,4),i=Z(t,0);if(e===1)return i;const a=[i];for(let s=1;s<e;s+=1)a.push(Z(t,s));return{height:i.height,images:a,width:i.width}}},Rt=2,Bt={validate(t){const e=m(t,0),i=m(t,4);return e!==0||i===0?!1:m(t,2)===Rt},calculate:t=>dt.calculate(t)},Ht={validate:t=>v(t,0)===542327876,calculate:t=>({height:v(t,12),width:v(t,16)})},Mt=/^GIF8[79]a/,Ct={validate:t=>Mt.test(l(t,0,6)),calculate:t=>({height:m(t,8),width:m(t,6)})},gt={avif:"avif",mif1:"heif",msf1:"heif",heic:"heic",heix:"heic",hevc:"heic",hevx:"heic"};function Dt(t,e,i){let a={};for(let s=e;s<=i;s+=4){const o=l(t,s,s+4);o in gt&&(a[o]=1)}if("avif"in a)return"avif";if("heic"in a||"heix"in a||"hevc"in a||"hevx"in a)return"heic";if("mif1"in a||"msf1"in a)return"heif"}const qt={validate(t){const e=l(t,4,8),i=l(t,8,12);return e==="ftyp"&&i in gt},calculate(t){const e=w(t,"meta",0),i=e&&w(t,"iprp",e.offset+12),a=i&&w(t,"ipco",i.offset+8),s=a&&w(t,"ispe",a.offset+8);if(s)return{height:r(t,s.offset+16),width:r(t,s.offset+12),type:Dt(t,8,e.offset)};throw new TypeError("Invalid HEIF, no size found")}},Ut=8,Gt=4,Yt=4,Vt={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function K(t,e){const i=e+Yt;return[l(t,e,i),r(t,i)]}function Q(t){const e=Vt[t];return{width:e,height:e,type:t}}const Jt={validate:t=>l(t,0,4)==="icns",calculate(t){const e=t.length,i=r(t,Gt);let a=Ut,s=K(t,a),o=Q(s[0]);if(a+=s[1],a===i)return o;const c={height:o.height,images:[o],width:o.width};for(;a<i&&a<e;)s=K(t,a),o=Q(s[0]),a+=s[1],c.images.push(o);return c}},Xt={validate:t=>I(t,0,4)==="ff4fff51",calculate:t=>({height:r(t,12),width:r(t,8)})},Wt={validate(t){if(r(t,4)!==1783636e3||r(t,0)<1)return!1;const e=w(t,"ftyp",0);return e?r(t,e.offset+4)===1718909296:!1},calculate(t){const e=w(t,"jp2h",0),i=e&&w(t,"ihdr",e.offset+8);if(i)return{height:r(t,i.offset+8),width:r(t,i.offset+12)};throw new TypeError("Unsupported JPEG 2000 format")}},Zt="45786966",Kt=2,z=6,Qt=2,te="4d4d",ee="4949",tt=12,ie=2;function ae(t){return I(t,2,6)===Zt}function se(t,e){return{height:A(t,e),width:A(t,e+2)}}function oe(t,e){const a=z+8,s=h(t,16,a,e);for(let o=0;o<s;o++){const c=a+ie+o*tt,d=c+tt;if(c>t.length)return;const p=t.slice(c,d);if(h(p,16,0,e)===274)return h(p,16,2,e)!==3||h(p,32,4,e)!==1?void 0:h(p,16,8,e)}}function ne(t,e){const i=t.slice(Kt,e),a=I(i,z,z+Qt),s=a===te;if(s||a===ee)return oe(i,s)}function ce(t,e){if(e>t.length)throw new TypeError("Corrupt JPG, exceeded buffer limits")}const le={validate:t=>I(t,0,2)==="ffd8",calculate(t){t=t.slice(4);let e,i;for(;t.length;){const a=A(t,0);if(t[a]!==255){t=t.slice(1);continue}if(ae(t)&&(e=ne(t,a)),ce(t,a),i=t[a+1],i===192||i===193||i===194){const s=se(t,a+5);return e?{height:s.height,orientation:e,width:s.width}:s}t=t.slice(a+2)}throw new TypeError("Invalid JPG, no size found")}},pe={validate:t=>{const e=l(t,1,7);return["KTX 11","KTX 20"].includes(e)},calculate:t=>{const e=t[5]===49?"ktx":"ktx2",i=e==="ktx"?36:20;return{height:v(t,i+4),width:v(t,i),type:e}}},re=`PNG\r

`,me="IHDR",et="CgBI",de={validate(t){if(re===l(t,1,8)){let e=l(t,12,16);if(e===et&&(e=l(t,28,32)),e!==me)throw new TypeError("Invalid PNG");return!0}return!1},calculate(t){return l(t,12,16)===et?{height:r(t,36),width:r(t,32)}:{height:r(t,20),width:r(t,16)}}},it={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},at={default:t=>{let e=[];for(;t.length>0;){const i=t.shift();if(i[0]!=="#"){e=i.split(" ");break}}if(e.length===2)return{height:parseInt(e[1],10),width:parseInt(e[0],10)};throw new TypeError("Invalid PNM")},pam:t=>{const e={};for(;t.length>0;){const i=t.shift();if(i.length>16||i.charCodeAt(0)>128)continue;const[a,s]=i.split(" ");if(a&&s&&(e[a.toLowerCase()]=parseInt(s,10)),e.height&&e.width)break}if(e.height&&e.width)return{height:e.height,width:e.width};throw new TypeError("Invalid PAM")}},ge={validate:t=>l(t,0,2)in it,calculate(t){const e=l(t,0,2),i=it[e],a=l(t,3).split(/[\r\n]+/);return(at[i]||at.default)(a)}},he={validate:t=>l(t,0,4)==="8BPS",calculate:t=>({height:r(t,14),width:r(t,18)})},ht=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,S={height:/\sheight=(['"])([^%]+?)\1/,root:ht,viewbox:/\sviewBox=(['"])(.+?)\1/i,width:/\swidth=(['"])([^%]+?)\1/},$=2.54,ft={in:96,cm:96/$,em:16,ex:8,m:96/$*100,mm:96/$/10,pc:96/72/12,pt:96/72,px:1},fe=new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(ft).join("|")})?$`);function P(t){const e=fe.exec(t);if(e)return Math.round(Number(e[1])*(ft[e[2]]||1))}function xe(t){const e=t.split(" ");return{height:P(e[3]),width:P(e[2])}}function ue(t){const e=t.match(S.width),i=t.match(S.height),a=t.match(S.viewbox);return{height:i&&P(i[2]),viewbox:a&&xe(a[2]),width:e&&P(e[2])}}function we(t){return{height:t.height,width:t.width}}function ve(t,e){const i=e.width/e.height;return t.width?{height:Math.floor(t.width/i),width:t.width}:t.height?{height:t.height,width:Math.floor(t.height*i)}:{height:e.height,width:e.width}}const be={validate:t=>ht.test(l(t,0,1e3)),calculate(t){const e=l(t).match(S.root);if(e){const i=ue(e[0]);if(i.width&&i.height)return we(i);if(i.viewbox)return ve(i,i.viewbox)}throw new TypeError("Invalid SVG")}},ye={validate(t){return m(t,0)===0&&m(t,4)===0},calculate(t){return{height:m(t,14),width:m(t,12)}}};function je(t,e){const i=h(t,32,4,e);return t.slice(i+2)}function Ie(t,e){const i=h(t,16,8,e);return(h(t,16,10,e)<<16)+i}function Ee(t){if(t.length>24)return t.slice(12)}function ke(t,e){const i={};let a=t;for(;a&&a.length;){const s=h(a,16,0,e),o=h(a,16,2,e),c=h(a,32,4,e);if(s===0)break;c===1&&(o===3||o===4)&&(i[s]=Ie(a,e)),a=Ee(a)}return i}function Te(t){const e=l(t,0,2);if(e==="II")return"LE";if(e==="MM")return"BE"}const Se=["49492a00","4d4d002a"],Ae={validate:t=>Se.includes(I(t,0,4)),calculate(t){const e=Te(t)==="BE",i=je(t,e),a=ke(i,e),s=a[256],o=a[257];if(!s||!o)throw new TypeError("Invalid Tiff. Missing tags");return{height:o,width:s}}};function Pe(t){return{height:1+X(t,7),width:1+X(t,4)}}function _e(t){return{height:1+((t[4]&15)<<10|t[3]<<2|(t[2]&192)>>6),width:1+((t[2]&63)<<8|t[1])}}function Ne(t){return{height:J(t,8)&16383,width:J(t,6)&16383}}const $e={validate(t){const e=l(t,0,4)==="RIFF",i=l(t,8,12)==="WEBP",a=l(t,12,15)==="VP8";return e&&i&&a},calculate(t){const e=l(t,12,16);if(t=t.slice(20,30),e==="VP8X"){const a=t[0],s=(a&192)===0,o=(a&1)===0;if(s&&o)return Pe(t);throw new TypeError("Invalid WebP")}if(e==="VP8 "&&t[0]!==47)return Ne(t);const i=I(t,3,6);if(e==="VP8L"&&i!=="9d012a")return _e(t);throw new TypeError("Invalid WebP")}},_=new Map([["bmp",Ot],["cur",Bt],["dds",Ht],["gif",Ct],["heif",qt],["icns",Jt],["ico",dt],["j2c",Xt],["jp2",Wt],["jpg",le],["ktx",pe],["png",de],["pnm",ge],["psd",he],["svg",be],["tga",ye],["tiff",Ae],["webp",$e]]),Oe=Array.from(_.keys()),Fe=new Map([[56,"psd"],[66,"bmp"],[68,"dds"],[71,"gif"],[73,"tiff"],[77,"tiff"],[82,"webp"],[105,"icns"],[137,"png"],[255,"jpg"]]);function ze(t){const e=t[0],i=Fe.get(e);return i&&_.get(i).validate(t)?i:Oe.find(a=>_.get(a).validate(t))}const Le={disabledTypes:[]};function Re(t){const e=ze(t);if(typeof e<"u"){if(Le.disabledTypes.indexOf(e)>-1)throw new TypeError("disabled file type: "+e);const i=_.get(e).calculate(t);if(i!==void 0)return i.type=i.type??e,i}throw new TypeError("unsupported file type: "+e)}async function Be(t,e){try{const i=Re(t);if(!i.height||!i.width||!i.type)throw new g({...y,message:y.message(e)});const{width:a,height:s,type:o,orientation:c}=i,d=(c||0)>=5;return{width:d?s:a,height:d?a:s,format:o,orientation:c}}catch{throw new g({...y,message:y.message(e)})}}async function He(t){const e=await fetch(t);if(!e.body||!e.ok)throw new g({...D,message:D.message(t)});const i=e.body.getReader();let a,s,o=new Uint8Array;for(;!a;){const c=await i.read();if(a=c.done,a)break;if(c.value){s=c.value;let d=new Uint8Array(o.length+s.length);d.set(o,0),d.set(s,o.length),o=d;try{const p=await Be(o,t);if(p)return await i.cancel(),p}catch{}}}throw new g({...y,message:y.message(t)})}async function Me(){if(!globalThis?.astroAsset?.imageService){const{default:t}=await jt(async()=>{const{default:e}=await import("./astro/assets-service.CVSf40k3.js").then(i=>i.s);return{default:e}},[]).catch(e=>{const i=new g(It);throw i.cause=e,i});return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=t,t}return globalThis.astroAsset.imageService}async function Ce(t,e){if(!t||typeof t!="object")throw new g({...q,message:q.message(JSON.stringify(t))});if(typeof t.src>"u")throw new g({...U,message:U.message(t.src,"undefined",JSON.stringify(t))});if(At(t))throw new g(vt);const i=await Me(),a={...t,src:await ct(t.src)};if(t.inferSize&&G(a.src)){const n=await He(a.src);a.width??=n.width,a.height??=n.height,delete a.inferSize}const s=F(a.src)?a.src.fsPath:void 0,o=F(a.src)?a.src.clone??a.src:a.src;a.src=o;const c=i.validateOptions?await i.validateOptions(a,e):a,d=i.getSrcSet?await i.getSrcSet(c,e):[];let p=await i.getURL(c,e),x=await Promise.all(d.map(async n=>({transform:n.transform,url:await i.getURL(n.transform,e),descriptor:n.descriptor,attributes:n.attributes})));if(bt(i)&&globalThis.astroAsset.addStaticImage&&!(G(c.src)&&p===c.src)){const n=i.propertiesToHash??yt;p=globalThis.astroAsset.addStaticImage(c,n,s),x=d.map(f=>({transform:f.transform,url:globalThis.astroAsset.addStaticImage(f.transform,n,s),descriptor:f.descriptor,attributes:f.attributes}))}return{rawOptions:a,options:c,src:p,srcSet:{values:x,attribute:x.map(n=>`${n.url} ${n.descriptor}`).join(", ")},attributes:i.getHTMLAttributes!==void 0?await i.getHTMLAttributes(c,e):{}}}const De=pt("https://celestial.hyperoot.dev"),qe=ot(async(t,e,i)=>{const a=t.createAstro(De,e,i);a.self=qe;const s=a.props;if(s.alt===void 0||s.alt===null)throw new g(lt);typeof s.width=="string"&&(s.width=parseInt(s.width)),typeof s.height=="string"&&(s.height=parseInt(s.height));const o=await L(s),c={};return o.srcSet.values.length>0&&(c.srcset=o.srcSet.attribute),O`${nt()}<img${E(o.src,"src")}${j(c)}${j(o.attributes)}>`},"/home/runner/work/myc0sis.github.io/myc0sis.github.io/node_modules/astro/components/Image.astro",void 0),Ue={"3g2":"video/3gpp2","3gp":"video/3gpp","3gpp":"video/3gpp","3mf":"model/3mf",aac:"audio/aac",ac:"application/pkix-attr-cert",adp:"audio/adpcm",adts:"audio/aac",ai:"application/postscript",aml:"application/automationml-aml+xml",amlx:"application/automationml-amlx+zip",amr:"audio/amr",apng:"image/apng",appcache:"text/cache-manifest",appinstaller:"application/appinstaller",appx:"application/appx",appxbundle:"application/appxbundle",asc:"application/pgp-keys",atom:"application/atom+xml",atomcat:"application/atomcat+xml",atomdeleted:"application/atomdeleted+xml",atomsvc:"application/atomsvc+xml",au:"audio/basic",avci:"image/avci",avcs:"image/avcs",avif:"image/avif",aw:"application/applixware",bdoc:"application/bdoc",bin:"application/octet-stream",bmp:"image/bmp",bpk:"application/octet-stream",btf:"image/prs.btif",btif:"image/prs.btif",buffer:"application/octet-stream",ccxml:"application/ccxml+xml",cdfx:"application/cdfx+xml",cdmia:"application/cdmi-capability",cdmic:"application/cdmi-container",cdmid:"application/cdmi-domain",cdmio:"application/cdmi-object",cdmiq:"application/cdmi-queue",cer:"application/pkix-cert",cgm:"image/cgm",cjs:"application/node",class:"application/java-vm",coffee:"text/coffeescript",conf:"text/plain",cpl:"application/cpl+xml",cpt:"application/mac-compactpro",crl:"application/pkix-crl",css:"text/css",csv:"text/csv",cu:"application/cu-seeme",cwl:"application/cwl",cww:"application/prs.cww",davmount:"application/davmount+xml",dbk:"application/docbook+xml",deb:"application/octet-stream",def:"text/plain",deploy:"application/octet-stream",dib:"image/bmp","disposition-notification":"message/disposition-notification",dist:"application/octet-stream",distz:"application/octet-stream",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",dot:"application/msword",dpx:"image/dpx",drle:"image/dicom-rle",dsc:"text/prs.lines.tag",dssc:"application/dssc+der",dtd:"application/xml-dtd",dump:"application/octet-stream",dwd:"application/atsc-dwd+xml",ear:"application/java-archive",ecma:"application/ecmascript",elc:"application/octet-stream",emf:"image/emf",eml:"message/rfc822",emma:"application/emma+xml",emotionml:"application/emotionml+xml",eps:"application/postscript",epub:"application/epub+zip",exe:"application/octet-stream",exi:"application/exi",exp:"application/express",exr:"image/aces",ez:"application/andrew-inset",fdf:"application/fdf",fdt:"application/fdt+xml",fits:"image/fits",g3:"image/g3fax",gbr:"application/rpki-ghostbusters",geojson:"application/geo+json",gif:"image/gif",glb:"model/gltf-binary",gltf:"model/gltf+json",gml:"application/gml+xml",gpx:"application/gpx+xml",gram:"application/srgs",grxml:"application/srgs+xml",gxf:"application/gxf",gz:"application/gzip",h261:"video/h261",h263:"video/h263",h264:"video/h264",heic:"image/heic",heics:"image/heic-sequence",heif:"image/heif",heifs:"image/heif-sequence",hej2:"image/hej2k",held:"application/atsc-held+xml",hjson:"application/hjson",hlp:"application/winhlp",hqx:"application/mac-binhex40",hsj2:"image/hsj2",htm:"text/html",html:"text/html",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",img:"application/octet-stream",in:"text/plain",ini:"text/plain",ink:"application/inkml+xml",inkml:"application/inkml+xml",ipfix:"application/ipfix",iso:"application/octet-stream",its:"application/its+xml",jade:"text/jade",jar:"application/java-archive",jhc:"image/jphc",jls:"image/jls",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpf:"image/jpx",jpg:"image/jpeg",jpg2:"image/jp2",jpgm:"image/jpm",jpgv:"video/jpeg",jph:"image/jph",jpm:"image/jpm",jpx:"image/jpx",js:"text/javascript",json:"application/json",json5:"application/json5",jsonld:"application/ld+json",jsonml:"application/jsonml+json",jsx:"text/jsx",jt:"model/jt",jxr:"image/jxr",jxra:"image/jxra",jxrs:"image/jxrs",jxs:"image/jxs",jxsc:"image/jxsc",jxsi:"image/jxsi",jxss:"image/jxss",kar:"audio/midi",ktx:"image/ktx",ktx2:"image/ktx2",less:"text/less",lgr:"application/lgr+xml",list:"text/plain",litcoffee:"text/coffeescript",log:"text/plain",lostxml:"application/lost+xml",lrf:"application/octet-stream",m1v:"video/mpeg",m21:"application/mp21",m2a:"audio/mpeg",m2v:"video/mpeg",m3a:"audio/mpeg",m4a:"audio/mp4",m4p:"application/mp4",m4s:"video/iso.segment",ma:"application/mathematica",mads:"application/mads+xml",maei:"application/mmt-aei+xml",man:"text/troff",manifest:"text/cache-manifest",map:"application/json",mar:"application/octet-stream",markdown:"text/markdown",mathml:"application/mathml+xml",mb:"application/mathematica",mbox:"application/mbox",md:"text/markdown",mdx:"text/mdx",me:"text/troff",mesh:"model/mesh",meta4:"application/metalink4+xml",metalink:"application/metalink+xml",mets:"application/mets+xml",mft:"application/rpki-manifest",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mj2:"video/mj2",mjp2:"video/mj2",mjs:"text/javascript",mml:"text/mathml",mods:"application/mods+xml",mov:"video/quicktime",mp2:"audio/mpeg",mp21:"application/mp21",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mp4a:"audio/mp4",mp4s:"application/mp4",mp4v:"video/mp4",mpd:"application/dash+xml",mpe:"video/mpeg",mpeg:"video/mpeg",mpf:"application/media-policy-dataset+xml",mpg:"video/mpeg",mpg4:"video/mp4",mpga:"audio/mpeg",mpp:"application/dash-patch+xml",mrc:"application/marc",mrcx:"application/marcxml+xml",ms:"text/troff",mscml:"application/mediaservercontrol+xml",msh:"model/mesh",msi:"application/octet-stream",msix:"application/msix",msixbundle:"application/msixbundle",msm:"application/octet-stream",msp:"application/octet-stream",mtl:"model/mtl",musd:"application/mmt-usd+xml",mxf:"application/mxf",mxmf:"audio/mobile-xmf",mxml:"application/xv+xml",n3:"text/n3",nb:"application/mathematica",nq:"application/n-quads",nt:"application/n-triples",obj:"model/obj",oda:"application/oda",oga:"audio/ogg",ogg:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",omdoc:"application/omdoc+xml",onepkg:"application/onenote",onetmp:"application/onenote",onetoc:"application/onenote",onetoc2:"application/onenote",opf:"application/oebps-package+xml",opus:"audio/ogg",otf:"font/otf",owl:"application/rdf+xml",oxps:"application/oxps",p10:"application/pkcs10",p7c:"application/pkcs7-mime",p7m:"application/pkcs7-mime",p7s:"application/pkcs7-signature",p8:"application/pkcs8",pdf:"application/pdf",pfr:"application/font-tdpfr",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pki:"application/pkixcmp",pkipath:"application/pkix-pkipath",pls:"application/pls+xml",png:"image/png",prc:"model/prc",prf:"application/pics-rules",provx:"application/provenance+xml",ps:"application/postscript",pskcxml:"application/pskc+xml",pti:"image/prs.pti",qt:"video/quicktime",raml:"application/raml+yaml",rapd:"application/route-apd+xml",rdf:"application/rdf+xml",relo:"application/p2p-overlay+xml",rif:"application/reginfo+xml",rl:"application/resource-lists+xml",rld:"application/resource-lists-diff+xml",rmi:"audio/midi",rnc:"application/relax-ng-compact-syntax",rng:"application/xml",roa:"application/rpki-roa",roff:"text/troff",rq:"application/sparql-query",rs:"application/rls-services+xml",rsat:"application/atsc-rsat+xml",rsd:"application/rsd+xml",rsheet:"application/urc-ressheet+xml",rss:"application/rss+xml",rtf:"text/rtf",rtx:"text/richtext",rusd:"application/route-usd+xml",s3m:"audio/s3m",sbml:"application/sbml+xml",scq:"application/scvp-cv-request",scs:"application/scvp-cv-response",sdp:"application/sdp",senmlx:"application/senml+xml",sensmlx:"application/sensml+xml",ser:"application/java-serialized-object",setpay:"application/set-payment-initiation",setreg:"application/set-registration-initiation",sgi:"image/sgi",sgm:"text/sgml",sgml:"text/sgml",shex:"text/shex",shf:"application/shf+xml",shtml:"text/html",sieve:"application/sieve",sig:"application/pgp-signature",sil:"audio/silk",silo:"model/mesh",siv:"application/sieve",slim:"text/slim",slm:"text/slim",sls:"application/route-s-tsid+xml",smi:"application/smil+xml",smil:"application/smil+xml",snd:"audio/basic",so:"application/octet-stream",spdx:"text/spdx",spp:"application/scvp-vp-response",spq:"application/scvp-vp-request",spx:"audio/ogg",sql:"application/sql",sru:"application/sru+xml",srx:"application/sparql-results+xml",ssdl:"application/ssdl+xml",ssml:"application/ssml+xml",stk:"application/hyperstudio",stl:"model/stl",stpx:"model/step+xml",stpxz:"model/step-xml+zip",stpz:"model/step+zip",styl:"text/stylus",stylus:"text/stylus",svg:"image/svg+xml",svgz:"image/svg+xml",swidtag:"application/swid+xml",t:"text/troff",t38:"image/t38",td:"application/urc-targetdesc+xml",tei:"application/tei+xml",teicorpus:"application/tei+xml",text:"text/plain",tfi:"application/thraud+xml",tfx:"image/tiff-fx",tif:"image/tiff",tiff:"image/tiff",toml:"application/toml",tr:"text/troff",trig:"application/trig",ts:"video/mp2t",tsd:"application/timestamped-data",tsv:"text/tab-separated-values",ttc:"font/collection",ttf:"font/ttf",ttl:"text/turtle",ttml:"application/ttml+xml",txt:"text/plain",u3d:"model/u3d",u8dsn:"message/global-delivery-status",u8hdr:"message/global-headers",u8mdn:"message/global-disposition-notification",u8msg:"message/global",ubj:"application/ubjson",uri:"text/uri-list",uris:"text/uri-list",urls:"text/uri-list",vcard:"text/vcard",vrml:"model/vrml",vtt:"text/vtt",vxml:"application/voicexml+xml",war:"application/java-archive",wasm:"application/wasm",wav:"audio/wav",weba:"audio/webm",webm:"video/webm",webmanifest:"application/manifest+json",webp:"image/webp",wgsl:"text/wgsl",wgt:"application/widget",wif:"application/watcherinfo+xml",wmf:"image/wmf",woff:"font/woff",woff2:"font/woff2",wrl:"model/vrml",wsdl:"application/wsdl+xml",wspolicy:"application/wspolicy+xml",x3d:"model/x3d+xml",x3db:"model/x3d+fastinfoset",x3dbz:"model/x3d+binary",x3dv:"model/x3d-vrml",x3dvz:"model/x3d+vrml",x3dz:"model/x3d+xml",xaml:"application/xaml+xml",xav:"application/xcap-att+xml",xca:"application/xcap-caps+xml",xcs:"application/calendar+xml",xdf:"application/xcap-diff+xml",xdssc:"application/dssc+xml",xel:"application/xcap-el+xml",xenc:"application/xenc+xml",xer:"application/patch-ops-error+xml",xfdf:"application/xfdf",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xhvml:"application/xv+xml",xlf:"application/xliff+xml",xm:"audio/xm",xml:"text/xml",xns:"application/xcap-ns+xml",xop:"application/xop+xml",xpl:"application/xproc+xml",xsd:"application/xml",xsf:"application/prs.xsf+xml",xsl:"application/xml",xslt:"application/xml",xspf:"application/xspf+xml",xvm:"application/xv+xml",xvml:"application/xv+xml",yaml:"text/yaml",yang:"application/yang",yin:"application/yin+xml",yml:"text/yaml",zip:"application/zip"};function Ge(t){let e=(""+t).trim().toLowerCase(),i=e.lastIndexOf(".");return Ue[~i?e.substring(++i):e]}const Ye=pt("https://celestial.hyperoot.dev"),Ve=ot(async(t,e,i)=>{const a=t.createAstro(Ye,e,i);a.self=Ve;const s=["webp"],o="png",c=["gif","svg","jpg","jpeg"],{formats:d=s,pictureAttributes:p={},fallbackFormat:x,...n}=a.props;if(n.alt===void 0||n.alt===null)throw new g(lt);const f=n.class?.match(/\bastro-\w{8}\b/)?.[0];f&&(p.class?p.class=`${p.class} ${f}`:p.class=f);for(const b in n)b.startsWith("data-astro-cid")&&(p[b]=n[b]);const k=await ct(n.src),xt=await Promise.all(d.map(async b=>await L({...n,src:k,format:b,widths:n.widths,densities:n.densities})));let R=x??o;!x&&F(k)&&c.includes(k.format)&&(R=k.format);const T=await L({...n,format:R,widths:n.widths,densities:n.densities}),B={},H={};return n.sizes&&(H.sizes=n.sizes),T.srcSet.values.length>0&&(B.srcset=T.srcSet.attribute),O`${nt()}<picture${j(p)}> ${Object.entries(xt).map(([b,u])=>{const ut=n.densities||!n.densities&&!n.widths?`${u.src}${u.srcSet.values.length>0?", "+u.srcSet.attribute:""}`:u.srcSet.attribute;return O`<source${E(ut,"srcset")}${E(Ge(u.options.format??u.src)??`image/${u.options.format}`,"type")}${j(H)}>`})} <img${E(T.src,"src")}${j(B)}${j(T.attributes)}> </picture>`},"/home/runner/work/myc0sis.github.io/myc0sis.github.io/node_modules/astro/components/Picture.astro",void 0),Je={service:{entrypoint:"astro/assets/services/sharp",config:{}},domains:[],remotePatterns:[]},L=async t=>await Ce(t,Je);export{qe as $,pt as a,Ze as c};