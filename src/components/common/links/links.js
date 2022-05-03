import { NavLink } from "react-router-dom";
import '../links/links.scss';

const Links = () => {
    return (
        <div className='links'>
            <NavLink to='/' exact={true} className='links__item' activeClassName="links__selected">Coffee house</NavLink>
            <NavLink to='our_coffee' className='links__item' activeClassName="links__selected">Our coffee</NavLink>
            <NavLink to='/pleasure' className='links__item' activeClassName="links__selected">For your pleasure</NavLink>
        </div>
    )
}

export default Links;