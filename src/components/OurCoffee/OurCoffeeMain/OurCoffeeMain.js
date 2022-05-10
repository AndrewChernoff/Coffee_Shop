import React from "react";
import { NavLink } from "react-router-dom";
import DarkBean from "../../common/dark_bean/dark_bean";

export class OurCoffeeMainHeader extends React.Component {
    render() {
        return (
            <header className="header">
                <div className='container'>
                    <h2>Our Coffee</h2>
                </div>
            </header>
        )
    }
}

class OurCoffeeMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.searchItem
        };
    }

    onInputChange = (e) => {
        this.setState({
            value: e.target.value
        });
        this.props.searchItemByInput(e.target.value);
    }

    render() {
        let { coffee, girl } = this.props;
        let filteredCoffeeItems = coffee.map(({ name, price, img, id }) => {
            return <NavLink key={id} to={`our_coffee/${id}`}>
                <div className='best__coffee_item'>
                    <div className='best__coffee_item-content'>
                        <img src={img} alt='#' />
                        <div className='best__coffee_item_descr'>{name}</div>
                        <div className='best__coffee_item_price'>{price}</div>
                    </div>
                </div>
            </NavLink>
        })
        let buttonData = [
            { filter: 'all', name: 'All' },
            { filter: 'brazil', name: 'Brazil' },
            { filter: 'kenya', name: 'Kenya' },
            { filter: 'columbia', name: 'Colombia' }
        ]
        let buttons = buttonData.map(({ filter, name }) => {
            let className;
            if (this.props.countryFilter === filter) {
                className = 'ou__filter_btns-items__btn';
            } else {
                className = 'ou__filter_btns-items__btn__active';
            }
            return <button className={className} key={filter} onClick={() => this.props.getSearchedCountry(filter)} >{name}</button>
        })

        return (
            <>
                <OurCoffeeMainHeader />

                <div className='ou__info'>
                    <div className='container'>
                        <div className='ou__info__content'>
                            <img className='ou__info__girl-img' src={girl} alt='girl' />
                            <div className='ou__info__descr'>
                                <h2>About our Beans</h2>
                                <DarkBean />
                                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                                <p>Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions.</p>
                                <p>As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.</p>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>

                <div className='ou__filter'>
                    <div className='container'>
                        <div className='ou__filter__content'>
                            <div className='ou__filter_search'>
                                <div>Look for</div>
                                <input value={this.state.value} onChange={this.onInputChange} placeholder='start type something...' />
                            </div>
                            <div className='ou__filter_btns'>
                                <div className='ou__filter_btns-name'>
                                    Or filter
                                </div>
                                <div className='ou__filter_btns-items'>
                                    {buttons}
                                </div>
                            </div>
                        </div>

                        <div className='ou__filter-items'>
                            {filteredCoffeeItems}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default OurCoffeeMain;