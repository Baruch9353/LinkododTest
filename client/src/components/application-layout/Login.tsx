import { useState } from "react";
import '../style/CreatePost.css'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")

    // Submit login request to the server
    const submitUser = async (e: any) => {
        e.preventDefault();
        const newUser = { email, password };
        const res = await fetch(`http://localhost:3000/users/${newUser.email}/${newUser.password}`);

        const data = await res.text();
        setMessage(data);
    };

    return (
        <form onSubmit={submitUser}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button className="submitButton" type="submit">Login</button>

            {message && <p className="message"> {message}</p>}
        </form>
    );
}
