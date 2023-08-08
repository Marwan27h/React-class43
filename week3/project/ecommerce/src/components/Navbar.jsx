import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
    const state = useSelector((state) => state.handleCart ?? [])

 
    const navItems = [
        { to: "/", label: "Home" },
        { to: "/products", label: "Products" },
        { to: "/", label: "About" },
        { to: "/contact", label: "Contact" },
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bolder" to="/">
                    HYF
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                        {navItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to={item.to}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="buttons">
                        <Link to="/login" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1"></i> Login
                        </Link>
                        <Link
                            to="/register"
                            className="btn btn-outline-dark ms-2"
                        >
                            <i className="fa fa-registered me-1"></i> Register
                        </Link>
                        <Link to="/cart" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart me-1"></i>
                            Cart ({state.length})
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
