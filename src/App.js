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


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coffee: [
        { name: 'Solimo Coffee Beans 2 kg', country: 'Kenya', img: presto, price: 10.73, best: false, id: 1 },
        { name: 'Presto Coffee Beans 1 kg', country: 'Brazil', img: solimo, price: 15.99, best: false, id: 2 },
        { name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', img: aromistico, price: 6.99, best: false, id: 3 },
        { name: 'Escobar Coffee 1 kg', country: 'Columbia', img: aromistico, price: 8.99, best: false, id: 4 },
        { name: 'Awesome Coffee 1 kg', country: 'Brazil', img: aromistico, price: 9.99, best: false, id: 5 },
        { name: 'Super Coffee 2 kg', country: 'Columbia', img: aromistico, price: 11.99, best: false, id: 6 }
      ],
      searchItem: '',
    }
  }

  searchItemByInput = (item) => {
    console.log(item)
    //this.state.searchItem = item
    console.log(this.state.searchItem)

  }

  filterArray = (array, value) => {
    if (value === '') {
      return array;
    } else {
      return array.filter(item => item.name.indexOf(value) < -1);
    }
  }

  render() {
    const coffee = this.state.coffee.map(({ name, price, img, id }) => {
      return <div key={id} className='best__coffee_item'>
        <div className='best__coffee_item-content'>
          <img src={img} alt='#' />
          <div className='best__coffee_item_descr'>{name}</div>
          <div className='best__coffee_item_price'>{price}</div>
        </div>
      </div>
    })

    return (
      <>
        <div style={{ position: 'absolute', top: 52, left: 148, zIndex: 1 }}>
          <Links />
        </div>

        <Switch>
          <Route exact path="/" component={() => <CoffeHouse coffee={coffee} />} />
          <Route path="/our_coffee" component={() => <OurCoffe coffee={coffee} searchItem={this.searchItemByInput} />} />
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