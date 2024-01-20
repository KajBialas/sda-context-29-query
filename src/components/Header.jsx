import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todos">Todos</Link>
                    </li>
                    <li>
                        <Link to="/addTodo">AddTodo</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;