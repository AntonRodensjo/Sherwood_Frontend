import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="h-32">
            <nav>
                <NavLink to="/clips">Clips</NavLink>
            </nav>
        </header>
    )
}