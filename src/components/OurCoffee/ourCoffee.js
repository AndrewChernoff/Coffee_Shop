import DarkBean from '../common/dark_bean/dark_bean';
import '../OurCoffee/ourCoffee.scss';
import girl from '../../images/girl.jpg';
import '../../App.scss';
import React from 'react';

class OurCoffe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onInputChange = (e) => {
        this.setState({
            value: e.target.value
        });
        this.props.searchItemByInput(e.target.value);
    }

    render() {
        let { coffee } = this.props;
        let filteredCoffeeItems = coffee.map(({ name, price, img, id }) => {
            return <div key={id} className='best__coffee_item'>
                <div className='best__coffee_item-content'>
                    <img src={img} alt='#' />
                    <div className='best__coffee_item_descr'>{name}</div>
                    <div className='best__coffee_item_price'>{price}</div>
                </div>
            </div>
        })
        let buttonData = [
            { filter: 'all', name: 'All' },
            { filter: 'brazil', name: 'Brazil' },
            { filter: 'kenya', name: 'Kenya' },
            { filter: 'columbia', name: 'Colombia' }
        ]
        let buttons = buttonData.map(({ filter, name }) => {
            //let activeClassName = 'ou__filter_btns-items__active';
            let className;
            if (this.props.countryFilter === filter) {
                className = 'ou__filter_btns-items__btn';
            } else {
                className = 'ou__filter_btns-items__btn__active';
            }
            return <button className={className} key={filter} onClick={() => this.props.getSearchedCountry(filter)} >{name}</button>
        })

        return (
            <div>
                <div className="header">
                    <div className='container'>
                        <h2>Our Coffee</h2>
                    </div>
                </div>

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
            </div>
        )
    }
}

export default OurCoffe;