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
    future: {
        webpack5: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.fallback.net = false;
            config.resolve.fallback.tls= false;
        }
        return config;
    },
    pageExtensions: ["js", "jsx", "md", "mdx"],
    images: {
        domains: ['instagram.ftxl2-1.fna.fbcdn.net'],
    },
});