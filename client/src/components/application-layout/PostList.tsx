import { useEffect, useState } from "react";
import Post from "./Post";
import type { Posti } from "./Post";

export default function PostList() {
    const [posts, setPosts] = useState<Posti[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <ul>
            {posts.map((post: Posti) => (
                <Post key={post.id} post={post} />
            ))}
        </ul>
    );
}