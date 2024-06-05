import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/entrar" >Entrar</NavLink></li>
                <li><NavLink to="/nutricionistas" >Nutricionistas</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;
