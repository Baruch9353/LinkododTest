import logo from '../../assets/IMG-20250907-WA0006.jpg'
import '../style/Header.css'
import { Link } from "react-router";

// Header component 
export default function Header() {
    return (
        <nav>
            <div className="header-top">
                <Link to={"/"}>
                    <h1>Linkodkod</h1>
                </Link>
                <Link to={"/"}>
                    <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>
            <div className="header-under">
                <Link to="/">
                    <button className="buttons">All Posts</button>
                </Link>
                <Link to="/CreatePost">
                    <button className="buttons">Create Post</button>
                </Link>
                <Link to="/Signup">
                    <button className="buttons">Signup</button>
                </Link>
                <Link to="/Login">
                    <button className="buttons">Login</button>
                </Link>
                <Link to="/logout">
                    <button className="buttons">Logout</button>
                </Link>
            </div>
        </nav>
    );
}
