import React from 'react'
import './Footer.css'

const d = new Date();

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-text'>
                Gideon Crawley copyright {d.getFullYear()}
                </div>
        </div>
    )
}

export default Footer;