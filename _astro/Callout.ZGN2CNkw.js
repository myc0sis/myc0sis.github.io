const t="Custom Components/Callout.mdx",n="docs",i="custom-components/callout",a=`import Callout from "@/components/Callout.astro";
import { Cat } from 'lucide-react';


## Callout

The \`Callout\` component is designed to highlight important information, warnings, errors, or successes in your application. It is a versatile alert box with customizable variants and titles.

### Props

- **\`variant\`**

  Type: \`string\`

  Default: "info"

  Options: \`"info" | "warning" | "danger" | "success"\`

  Description: Defines the type of alert to display. The variant determines the color, icon, and default title of the alert.

- **\`title\`**

  Type: \`string\`

  Default: Default titles based on the variant

  Description: Custom title for the alert. If not provided, the default title for the specified variant will be used.

- **\`icon\`**

  Type: \`LucideIcon\` (optional)

  Default: Default icon based on the variant

  Description: A custom icon to use in the alert. If not provided, the default icon for the specified variant will be used. You can look for icons at [lucide.dev](https://lucide.dev/icons/).

### Basic Usage
To use the Callout component, import it and use it in your Astro files with the desired variant and title.


<Callout variant="info">
  This is an info message.
</Callout>

<Callout variant="warning" title="Custom Warning Title">
  This is a warning message with a custom title.
</Callout>

<Callout variant="danger" icon={Cat}>
  This is a danger message with a custom icon.
</Callout>

<Callout variant="success" title="Custom Success Title" icon={Cat}>
  This is a success message with a custom title and custom icon.
</Callout>

\`\`\`mdx
import Callout from '@/components/Callout.astro';
import { Cat } from 'lucide-react';

<Callout variant="info">
  This is an info message.
</Callout>

<Callout variant="warning" title="Custom Warning Title">
  This is a warning message with a custom title.
</Callout>

<Callout variant="danger" icon={Cat}>
  This is a danger message with a custom icon.
</Callout>

<Callout variant="success" title="Custom Success Title" icon={Cat}>
  This is a success message with a custom title and custom icon.
</Callout>
\`\`\`

### Default Behavior

If no variant is provided, the info variant will be used by default. Similarly, if no title is provided, the default title for the specified variant will be used.

<Callout>
  This is an info message using the default settings.
</Callout>

\`\`\`astro
---
import Callout from '@/components/Callout.astro';
---

<!-- Using default info variant and title -->
<Callout>
  This is an info message using the default settings.
</Callout>
\`\`\``,e={title:"Callout",author:"HYP3R00T",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},o={type:"content",filePath:"/home/runner/work/myc0sis.github.io/myc0sis.github.io/src/content/docs/Custom Components/Callout.mdx",rawData:void 0};export{o as _internal,a as body,n as collection,e as data,t as id,i as slug};
