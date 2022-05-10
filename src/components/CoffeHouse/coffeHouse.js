import BrigthBean from "../common/brigth_bean/brigth_bean";
import DarkBean from "../common/dark_bean/dark_bean";
import '../../App.scss';
import { NavLink } from "react-router-dom";

const CoffeHouse = ({ coffee }) => {
    let bestCoffee = coffee.filter(item => item.best === true).map(({ name, price, img, id }) => {
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
        <div>
            <header className='promo'>
                <div className='container'>
                    <div className='promo__content'>
                        <h1>Everything You Love About Coffee</h1>
                        <div><BrigthBean /></div>
                        <h2>We make every day full of energy and taste</h2>
                        <h2>Want to try our beans?</h2>
                        <button className='promo__content-btn'>More</button>
                    </div>
                </div>
            </header>

            <section className='info'>
                <div className='container'>
                    <div className='info__content'>
                        <h2>About Us</h2>
                        <DarkBean />
                        <div className='info__content_descr'>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                            <br></br>
                            <br></br>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </section>
            <section className='best'>
                <div className='container'>
                    <h2>Our best</h2>
                    <div className='best__coffee'>
                        {bestCoffee}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoffeHouse;