const { NavLink } = require("react-router-dom")

const AppMenu = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
        </nav>
    );
}

export default AppMenu;