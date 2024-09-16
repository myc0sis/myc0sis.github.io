import{$ as l,c as n}from"./_astro_assets.L1YralaK.js";import{F as r}from"./utils.D0RIOGGA.js";import"./astro/assets-service.CVSf40k3.js";import"./index.CVpbhN_F.js";const c={title:"Deployment"};function p(){return[{depth:2,slug:"deploying-with-github-actions",text:"Deploying with GitHub Actions"},{depth:3,slug:"adding-a-cname-file",text:"Adding a CNAME File"},{depth:2,slug:"deploy-with-other-services",text:"Deploy with other services"}]}const y=!0;function t(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return n(r,{children:[n(e.p,{children:"Deploying your site is straightforward with CelestialDocs. This guide will help you set up deployment using GitHub Actions and configure your domain with a CNAME file. Follow the steps below to get your site live."}),`
`,n(e.h2,{id:"deploying-with-github-actions",children:"Deploying with GitHub Actions"}),`
`,n(e.p,{children:["CelestialDocs includes a ",n(e.code,{children:"deploy.yml"})," file configured for GitHub Actions to automate the deployment process. Here’s how you can use it:"]}),`
`,n(e.p,{children:n(e.strong,{children:"Steps:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:["Add the ",n(e.code,{children:"deploy.yml"})," File"]}),`
`,n(e.p,{children:["Make sure the ",n(e.code,{children:"deploy.yml"})," file is included in your project under the .github/workflows directory. This file contains the workflow configuration to handle the deployment."]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"Configure Your GitHub Repository"}),`
`,n(e.p,{children:"Ensure that your GitHub repository is correctly set up to use GitHub Actions. You may need to grant the necessary permissions and configure your repository settings to enable deployments."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"Set Up Deployment Secrets"}),`
`]}),`
`]}),`
`,n(e.p,{children:"If your deployment requires secrets (e.g., API keys, deployment tokens), add them to your GitHub repository settings:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:"Go to your repository on GitHub."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"Navigate to Settings > Secrets and variables > Actions."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"Add your secrets here. For example, you might need to add deployment tokens or API keys for your hosting provider."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"Trigger the Deployment"}),`
`,n(e.p,{children:["Once the ",n(e.code,{children:"deploy.yml"})," file is in place and your secrets are configured, any push to the main branch (or the branch specified in the workflow) will trigger the deployment. GitHub Actions will automatically build and deploy your site based on the configuration in ",n(e.code,{children:"deploy.yml"}),"."]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"adding-a-cname-file",children:"Adding a CNAME File"}),`
`,n(e.p,{children:"If you’re using a custom domain, you need to include a CNAME file in the public directory of your project. This file ensures that your site is correctly mapped to your custom domain."}),`
`,n(e.p,{children:n(e.strong,{children:"Steps:"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:"Create the CNAME File"}),`
`,n(e.p,{children:"In the public directory of your project, create a file named CNAME (with no file extension)."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"Add Your Domain Name"}),`
`,n(e.p,{children:"Open the CNAME file and add your custom domain name. For example:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"plaintext",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{children:"www.yourcustomdomain.com"})}),`
`,n(e.span,{class:"line",children:n(e.span,{})})]})}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"Commit and Push"}),`
`,n(e.p,{children:"After creating the CNAME file, commit your changes and push them to your repository:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto"},tabindex:"0","data-language":"bash",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4",fontStyle:"italic","--shiki-dark-font-style":"italic"},children:"git"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" add"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" public/CNAME"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4",fontStyle:"italic","--shiki-dark-font-style":"italic"},children:"git"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" commit"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" -m"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "Add CNAME file for custom domain"'})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4",fontStyle:"italic","--shiki-dark-font-style":"italic"},children:"git"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" push"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" origin"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" main"})]}),`
`,n(e.span,{class:"line"})]})}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"Verify Domain Configuration"}),`
`,n(e.p,{children:"Ensure that your domain is correctly configured with your DNS provider to point to your deployment. This usually involves setting up DNS records such as A records or CNAME records to match your hosting provider’s requirements."}),`
`]}),`
`]}),`
`,n(e.h2,{id:"deploy-with-other-services",children:"Deploy with other services"}),`
`,n(e.p,{children:["Publish your work with the ",n(e.a,{href:"https://docs.astro.build/en/guides/deploy/",rel:"nofollow",target:"_blank",children:"Deploy your site"})," guide in the Astro docs."]})]})}function s(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(t,{...i})}):t(i)}const m="src/content/docs/Resources/deployment.mdx",g="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Resources/deployment.mdx",o=(i={})=>s({...i,components:{Fragment:r,...i.components,"astro-image":i.components?.img??l}});o[Symbol.for("mdx-component")]=!0;o[Symbol.for("astro.needsHeadRendering")]=!c.layout;o.moduleId="/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Resources/deployment.mdx";export{o as Content,y as __usesAstroImage,o as default,g as file,c as frontmatter,p as getHeadings,m as url};
