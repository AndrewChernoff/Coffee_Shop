import { withRouter } from "react-router-dom";
import DarkBean from "../../common/dark_bean/dark_bean";
import { OurCoffeeMainHeader } from "../OurCoffeeMain/OurCoffeeMain";
import '../CoffeeItem/coffeeItem.scss'

const CoffeeItem = (props) => {
    let coffeeItemID = props.match.params.id
    const coffeeItem = props.coffee.filter(item => item.id === +coffeeItemID);

    return (
        <div>
            <OurCoffeeMainHeader />
            <div className="coffee_item">
                <div className="coffee_item__container">
                    <div className="coffee_item__promo">
                        <img className="coffee_item__img" src={coffeeItem[0].img} alt="coffe_item" />
                        <div className="coffee_item__content">

                            <h2>About it</h2>
                            <DarkBean />

                            <div className="coffee_item__content__info">
                                <div className="coffee_item__content__info-country">
                                    <span>Country</span>: {coffeeItem[0].country}
                                </div>
                                <br></br>
                                <div className="coffee_item__content__info-descr">
                                    <span>Description</span>: {coffeeItem[0].descr}
                                </div>
                                <br></br>
                                <div className="coffee_item__content__info-price">
                                    <span>Price</span>: {coffeeItem[0].price} $
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

withRouter(CoffeeItem)

export default withRouter(CoffeeItem);