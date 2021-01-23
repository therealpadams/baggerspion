import { posts } from './getAllPosts'

function getYears(posts) {
    return posts
        .map(function (post) {
            return post.module.meta.date.substring(0, 4)
        })
        .filter(function (value, index, self) {
            return self.indexOf(value) === index;
        })
}

export const years = getYears(posts)