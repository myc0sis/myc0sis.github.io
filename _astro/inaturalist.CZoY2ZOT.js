const t="inaturalist.mdx",r="docs",a="inaturalist",n=`\r
import INaturalistData from '../../components/INaturalistData.astro';\r
\r
# {frontmatter.title}\r
\r
{frontmatter.description}\r
\r
Here are some recent observations from iNaturalist:\r
\r
<INaturalistData perPage={5} />\r
\r
## Birds\r
\r
Here are some recent bird observations:\r
\r
<INaturalistData perPage={3} taxonId={3} />\r
\r
## Plants\r
\r
And here are some plant observations:\r
\r
<INaturalistData perPage={3} taxonId={47126} />\r
`,e={title:"iNaturalist Observations",author:"deadcodeXO",description:"Recent observations from iNaturalist",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},s={type:"content",filePath:"/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/inaturalist.mdx",rawData:void 0};export{s as _internal,n as body,r as collection,e as data,t as id,a as slug};
