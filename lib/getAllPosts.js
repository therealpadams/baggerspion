function importAll(r) {
    const keys = r.keys().filter(path => path.startsWith('pages'))

    return keys.map((fileName) => ({
        link: fileName.substr(1).replace(/\.[^/.]+$/, ""),
        module: r(fileName)
    })).sort((post1, post2) => (post1.module.meta.date > post2.module.meta.date ? '-1' : '1'))
}

export const posts = importAll(
    require.context("../pages/blog/", true, /\.mdx$/)
);
  