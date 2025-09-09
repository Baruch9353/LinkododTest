import { useEffect, useState } from "react";
import type { Posti } from "./Post";
import '../style/Post.css';

export default function SinglePost() {
    const id = window.location.pathname.split("/").pop();
    const [post, setPost] = useState<Posti | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error("Error fetching post:", error));
    }, [id]);

    if (!post) return <h1>Loading post...</h1>;

    return (
        <div className="flexi">
            <div className="post">
                <img src={`http://localhost:3000/${post.id}.png`} className="imgi" alt={post.name} />
                <p>{post.name}</p>
                <p>{post.description}</p>
                <p>{post.likes} 👍</p>
                <p>{post.time}</p>
            </div>
        </div>
    );
}