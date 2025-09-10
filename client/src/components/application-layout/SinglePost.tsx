import { useEffect, useState } from "react";
import { useParams } from 'react-router'
import Post from "./Post";
import type { Posti } from "./Post";
import '../style/Post.css';

// SinglePost component to display a single post based on ID
export default function SinglePost() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Posti>();

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error("Error fetching post:", error));
    }, []);

    if (!post) return <h1>Loading post...</h1>;

    return (
        <div className="flexi">
            <Post post={post} />
        </div>
    );
}