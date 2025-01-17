import React from 'react';
import { Link } from 'react-router-dom';
import './fonts.css';
import './style.css';

const Navbar = () => {
    return (
        <div style={navStyles}>
            <Link className='siteName title' style={{ textDecoration: 'none' }} to={'/'}>
                <p style={{
                    fontSize: '28px',

                    color: 'wheat'
                }}>Joy Structurals</p></Link>
            <div >
                <Link className='noUnderline' to={'/about'}>
                    <div className='pageLinks' style={navPageLinkStyles}><p style={{

                    }}>About</p></div>
                </Link>
                <Link className='noUnderline' to={'/projects'}>
                    <div className='pageLinks' style={navPageLinkStyles}>
                        <p style={{

                        }}>Projects</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    fontFamily: 'Rubik',
    backgroundColor: 'Black',
    color: 'white',
    width: '100%',

}
const navPageLinkStyles = {
    paddingLeft: '2rem',
    paddingRight: '2rem',

    textDecoration: 'none',
    color: 'white'
}

export default Navbar;