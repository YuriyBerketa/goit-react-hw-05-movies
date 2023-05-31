import { NavList, NavItem } from "./AppMenu.styled";

const AppMenu = () => {
    return (
        <NavList>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/movies'>Movies</NavItem>
        </NavList>
    );
}

export default AppMenu;