import { useState } from "react";
import '../style/CreatePost.css'

// CreatePost component
export default function CreatePost() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [likes, setLikes] = useState("");
    const [message, setMessage] = useState("")

    // Submit new post to the server
    const submitPost = async (e: any) => {
        e.preventDefault();
        const newPost = { name, description, likes, time: new Date().toLocaleString() };
        const res = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });

        const data = await res.text();
        setMessage(data);
    };

    return (
        <form onSubmit={submitPost}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="number"
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
                placeholder="Likes"
                required
            />
            <button className="submitButton" type="submit">Submit Post</button>

            {message && <p className="message"> {message}</p>}
        </form>
    );
}