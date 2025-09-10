import { useState } from "react";
import { Link } from "react-router";
import '../style/CreatePost.css'

// Signup component
export default function Signup() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Submit signup request to the server
  const submitUser = async (e: any) => {
    e.preventDefault();
    const newUser = { userName, email, password };
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await res.text();
    setMessage(data);
  };


  return (
    <form onSubmit={submitUser}>
      <input
        value={userName}
        onChange={(e) => setName(e.target.value)}
        placeholder="User name"
        required
      />
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
      <button className="submitButton" type="submit">Signup</button>

      {message && <p className="message"> {message} <></>
        now you can <Link to="/login">👉Login</Link></p>}
    </form>
  );
}
