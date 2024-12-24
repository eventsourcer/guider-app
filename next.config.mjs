import { guider } from "@neato/guider";
 
const withGuider = guider({
  // The location of your theme file, created in the next step
  themeConfig: './theme.config.tsx',
});

const debug = process.env.NODE_ENV !== "production";
 
export default withGuider({
  // These are the normal Next.JS settings.
  // Check out Next.JS docs: https://nextjs.org/docs/app/api-reference/next-config-js
  output: 'export',
  assetPrefix: !debug ? 'https://anotherplanet-io.github.io/Next-React-Components/' : '',
});