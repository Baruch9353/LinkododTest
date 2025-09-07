import postsData from "../../arr.json";
import Post from "./Post";
import type { Posti } from "./Post";

export default function PostList() {
    return (
        <ul>
            {postsData.posts.map((post: Posti) => (
                <Post key={post.id} post={post} />
            ))}
        </ul>
    );
}