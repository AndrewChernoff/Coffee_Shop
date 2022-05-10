import React from 'react';
import './App.scss';
import presto from '../src/icons/presto_coffee.png';
import solimo from '../src/icons/solimo_coffee.png';
import aromistico from '../src/icons/aromistico_coffee.png';
import Links from './components/common/links/links';
import CoffeHouse from './components/CoffeHouse/coffeHouse';
import { Route, Switch } from 'react-router-dom';
import OurCoffe from './components/OurCoffee/ourCoffee';
import FooterLinks from './components/common/footer_links/footer_links';
import DarkBean from './components/common/dark_bean/dark_bean';
import CoffeeItem from './components/OurCoffee/CoffeeItem/coffeeItem';
import Plesure from './components/Pleasure/pleasure';
import Pleasure from './components/Pleasure/pleasure';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coffee: [
        {
          name: 'Solimo Coffee Beans 2 kg',
          country: 'Kenya',
          img: presto,
          price: 10.73,
          best: true,
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: 1
        },
        {
          name: 'Presto Coffee Beans 1 kg',
          country: 'Brazil',
          img: solimo,
          price: 15.99,
          best: true,
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: 2
        },
        {
          name: 'AROMISTICO Coffee 1 kg',
          country: 'Kenya',
          img: aromistico,
          price: 6.99,
          best: false,
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: 3
        },
        {
          name: 'Escobar Coffee 1 kg',
          country: 'Columbia',
          img: aromistico,
          price: 8.99,
          best: false,
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: 4
        },
        {
          name: 'Awesome Coffee 1 kg',
          country: 'Brazil',
          img: aromistico,
          price: 9.99,
          best: false,
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: 5
        },
        {
          name: 'Super Coffee 2 kg',
          country: 'Columbia',
          img: aromistico,
          price: 11.99,
          best: true,
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          id: 6
        }
      ],
      searchItem: '',
      searchCountry: 'all'
    }
  }

  searchItemByInput = (item) => {
    this.setState({
      searchItem: item
    })
  }

  getSearchedCountry = (country) => {
    this.setState({
      searchCountry: country
    })
  }

  filterArray = (array, value) => {
    if (value === '') {
      return array;
    }
    return array.filter(item => item.name.indexOf(value) > -1);
  }

  getFilteredItems = (country) => {
    switch (country) {
      case 'all':
        return this.state.coffee;
      case 'brazil':
        return this.state.coffee.filter(item => item.country === 'Brazil');
      case 'kenya':
        return this.state.coffee.filter(item => item.country === 'Kenya');
      case 'columbia':
        return this.state.coffee.filter(item => item.country === 'Columbia');
      default:
        return this.state.coffee;
    }
  }

  render() {
    let filteredArray = this.filterArray(this.getFilteredItems(this.state.searchCountry), this.state.searchItem);

    return (
      <>
        <div style={{ position: 'absolute', top: 52, left: 148, zIndex: 1 }}>
          <Links />
        </div>

        <Switch>
          <Route exact path="/" component={() => <CoffeHouse coffee={this.state.coffee} />} />
          <Route exact path="/our_coffee">
            <OurCoffe coffee={filteredArray}
              getSearchedCountry={this.getSearchedCountry}
              searchItemByInput={this.searchItemByInput}
              countryFilter={this.state.searchCountry}
              searchItem={this.state.searchItem}
            />
          </Route>
          <Route exact path="/our_coffee/:id">
            <CoffeeItem coffee={this.state.coffee} id={this.state.coffee} />
          </Route>
          <Route path="/pleasure"  >
            <Pleasure coffee={this.state.coffee} />
          </Route>
        </Switch>

        <footer className='footer'>
          <div className='container'>
            <DarkBean />
            <FooterLinks />
          </div>
        </footer>

      </>
    );
  }
}

export default App;