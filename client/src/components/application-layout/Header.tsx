import logo from '../../assets/IMG-20250907-WA0006.jpg'
import '../style/Header.css'

// Header component 
export default function Header() {
    return (
        <nav>
            <h1 onClick={() => window.location.href = '/'}>Linkodkod</h1>
            <button className='home-button' onClick={() => window.location.href = '/'}>Home</button>
            <div className='button-group'>
                <button>✏️</button>
                <button>🗑️</button>
                <button>➕</button>
            </div>
            <img src={logo} className="logo" alt="logo" onClick={() => window.location.href = '/'}/>
        </nav>
    );
}
