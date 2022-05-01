import { NavLink } from "react-router-dom";
import '../links/links.scss';

const FooterLinks = () => {

    const linkStyle = {
        textDecoration: "none",
        color: 'black'
    };

    return (
        <div className='links'>
            <NavLink to='/' style={linkStyle} activeClassName="selected">Coffee house</NavLink>
            <NavLink to='/our_coffee' style={linkStyle} activeClassName="selected">Our coffee</NavLink>
            <NavLink to='/pleasure' style={linkStyle} activeClassName="selected">For your pleasure</NavLink>
        </div>
    )
}

export default FooterLinks;