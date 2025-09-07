import logo from '../../assets/IMG-20250907-WA0006.jpg'
import '../style/Header.css'
export default function Header() {
    return (
        <nav>
            <h1>Linkodkod</h1>
            <img src={logo} className="logo" alt="logo" />
        </nav>
    );
}