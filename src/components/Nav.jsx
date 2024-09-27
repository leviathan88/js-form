import '../style/components/nav.css'
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/about'> About </Link></li>
                <li><Link to='/data'> Data </Link></li>
            </ul>
        </nav>
    )
}