import { guider } from "@neato/guider";
 
const withGuider = guider({
  // The location of your theme file, created in the next step
  themeConfig: './theme.config.tsx',
});
//  const prefix = ghPrefix;
export default withGuider({
  // These are the normal Next.JS settings.
  // Check out Next.JS docs: https://nextjs.org/docs/app/api-reference/next-config-js
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/guider-app' : ''
});