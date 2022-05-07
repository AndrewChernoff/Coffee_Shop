import '../OurCoffee/ourCoffee.scss';
import girl from '../../images/girl.jpg';
import '../../App.scss';
import React from 'react';
import OurCoffeeMain from './OurCoffeeMain/OurCoffeeMain';

class OurCoffe extends React.Component {

    render() {
        let { coffee, buttons, filteredCoffeeItems, getSearchedCountry, searchItemByInput, countryFilter } = this.props;

        return (
            <div>
                <OurCoffeeMain coffee={coffee} button={buttons}
                    filteredCoffeeItems={filteredCoffeeItems}
                    girl={girl}
                    getSearchedCountry={getSearchedCountry}
                    searchItemByInput={searchItemByInput}
                    countryFilter={countryFilter}
                />
            </div>
        )
    }
}

export default OurCoffe;