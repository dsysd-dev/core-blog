import { PostMetadata } from "./PostMetadata";
import matter from "gray-matter";
import fs from "fs";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            date: matterResult.data.date,
            slug: filename.replace(".md", "")
        }
    });
    return posts;
}

export default getPostMetadata;