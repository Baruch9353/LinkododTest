import { useEffect, useState } from "react";
import Post from "./Post";
import type { Posti } from "./Post";
import '../style/Header.css'
import { Link } from "react-router";

// Renders the list of posts
export default function PostList() {
    const [posts, setPosts] = useState<Posti[]>([]);

    // Fetch posts from the server
    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    if (!posts.length) return <h1>Loading posts...</h1>;

    return (
        <div className="flexi">
            {posts.map((post: Posti) => (
                <Link to={`/${post.id}`} key={post.id}>
                    <Post post={post} />
                </Link>
            ))}
        </div>
    );
}