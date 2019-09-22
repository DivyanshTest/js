import React from 'react'
import {Link, NavLink, withRouter } from 'react-router-dom';

 function Navbar(props) {
    // setTimeout(()=>{
    //     props.history.push('/about')
    // },4000);
    return (
        <nav className="nav-wrapper re darken-3">
        <div className="container">
            <Link to='' className="brand-logo">demo routing</Link>
            <ul className='right'>
                <li ><Link to='/'>Home</Link></li>
                <li ><Link to='/about'>About</Link></li>
                <li ><Link to='/contact'>Contact</Link></li>

            </ul>
        </div>
        </nav>
    )
}
export default withRouter(Navbar);