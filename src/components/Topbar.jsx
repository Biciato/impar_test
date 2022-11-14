import '../styles/Topbar.css'
import Logo from "../assets/images/logo.png"

export default function Topbar() {
    return (
        <nav>
            <img src={Logo} alt="logo" className="logo-img" />
        </nav>
    )
}