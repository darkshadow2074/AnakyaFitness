import React from 'react'
import { Link } from 'react-router-dom'
import './NavSideBar.css'

function NavSideBar({showMenu, setShowMenu}) {
    return (
        <div className={showMenu ? "side-bar-bg show" : "side-bar-bg"}>
            <div className={showMenu ? "sidebar view" : "sidebar"}>
                <ul className="sidebar-links">
                    <Link to="/" onClick={() => setShowMenu(false)}>
                        <li>HOME</li>
                    </Link>
                    <Link to="/products" onClick={() => setShowMenu(false)}>
                        <li>PRODUCTS</li>
                    </Link>
                    <li>
                        Protein
                    </li>
                    <li>
                        BCAA
                    </li>
                    <li>
                        Creatine
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavSideBar
