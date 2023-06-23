import React from 'react';
import { Link } from "react-router-dom";

interface IState { }
interface IProps { }

let NavBar: React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={"/"} className="navbar-brand">React Router</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">User List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default NavBar;