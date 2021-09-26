import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer">
                <p>&copy; {new Date().getFullYear()} <span>Venus Hotel</span> Built with {" "}
                    <a href ="https://gatsbyjs.com">Gatsby</a> (All photos are not mine.) 
                </p>
            </footer>
        </div>
    )
}

export default Footer
