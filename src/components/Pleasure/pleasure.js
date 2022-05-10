import '../Pleasure/pleasure.scss';
import coffeeImg from '../../logo/coffee.png';
import DarkBean from '../common/dark_bean/dark_bean';
import { NavLink } from 'react-router-dom';

const Pleasure = ({ coffee }) => {
    let coffeeItems = coffee.map(({ name, price, img, id }) => {
        return <NavLink key={id} to={`our_coffee/${id}`} >
            <div className='best__coffee_item'>
                <div className='best__coffee_item-content'>
                    <img src={img} alt='#' />
                    <div className='best__coffee_item_descr'>{name}</div>
                    <div className='best__coffee_item_price'>{price}</div>
                </div>
            </div>
        </NavLink>
    })
    return (
        <>
            <header className="header__pleasure">
                <div className='container'>
                    <h2>For your pleasure</h2>
                </div>
            </header>

            <div className="pleasure__content">
                <div className="container">
                    <img className="pleasure__content__img" src={coffeeImg} alt="coffee" />
                    <div className='pleasure__content__info'>
                        <h2>About our goods</h2>
                        <DarkBean />

                        <div className='pleasure__content__info__descr'>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <p></p>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            <p></p>
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</div>
                    </div>
                </div>

                <hr></hr>
            </div>

            <div className="pleasure__items">
                <div className="container">
                    {coffeeItems}
                </div>
            </div>
        </>
    )
}

export default Pleasure;