const rehype = require('rehype');
const mdxPrism = require('mdx-prism');

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [mdxPrism]
    }
});
  
module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"]
});