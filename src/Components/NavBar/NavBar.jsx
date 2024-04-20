import React from "react";
import "./NavBar.css";
import UserContext from "../../context/userContext";
import { decodeToken } from "../../helpers/DecodeToken";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
    const userContext = React.useContext(UserContext);

    let user = (localStorage.getItem('token')) ? decodeToken() : null;



    return (
        <>
            <Navbar expand="md">
                <NavLink to="/" className="navbar-brand">
                    Jobly
                </NavLink>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>

                    {(user) ?
                        <>
                            <NavItem>
                                <NavLink to={`/user/${user.username}`}>{user.username}</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/Register" onClick={() => {
                                    localStorage.removeItem('token');
                                    userContext.setUser(null);
                                }}>
                                    Log Out
                                </NavLink>
                            </NavItem>
                        </> :
                        <>
                            <NavItem>
                                <NavLink to="/SignIn">Sign in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Register">Register</NavLink>
                            </NavItem>
                        </>

                    }
                </Nav>
            </Navbar >
        </>
    );
}

export default NavBar;