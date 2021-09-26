import React, { useState } from "react"
import {Link} from 'gatsby'
import {FaAlignJustify} from 'react-icons/fa'
import logo from "../assets/images/logo.png"
import styled from "styled-components"

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <Wrapper>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="venus hotel" className="logo"/>
                        </Link>
                        <button className="nav-btn" onClick={()=> setShow(!show)}>
                            <FaAlignJustify />
                        </button>
                    </div>
                        <div className={show ? "nav-links show-links" : "nav-links"}>
                        <Link to="/" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Home</Link>
                        <Link to="/gallery" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>Gallery</Link>
                        <Link to="/about" className="nav-link" activeClassName="active-link" onClick={()=> setShow(false)}>About</Link>
                        <div className="nav-link contact-link">
                            <Link to="/contact" className="btn">
                                Contact
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </nav>
            
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .logo {
        width: 100px;
    }
`

export default Navbar
