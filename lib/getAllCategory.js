import { posts } from './getAllPosts'

function getCategories(posts) {
    return posts
        .map(function (post) {
            return post.module.meta.category
        })
        .filter(function (value, index, self) {
            return self.indexOf(value) === index;
        })
}

export const catgegories = getCategories(posts)