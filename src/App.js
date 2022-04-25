import './App.scss';
import bean from '../src/logo/beans_logo.svg';
import presto from '../src/icons/presto_coffee.png';
import solimo from '../src/icons/solimo_coffee.png';
import aromistico from '../src/icons/aromistico_coffee.png';
import DarkBean from './components/common/dark_bean/dark_bean';
import Links from './components/common/links/links';
import BrigthBean from './components/common/brigth_bean/brigth_bean';

function App() {
  return (
    <>
      <header className='promo'>
        <div className='container'>
          <div style={{ position: 'absolute', top: 52, left: 148 }}>
            <Links />
          </div>
          <div className='promo__content'>
            <h1>Everything You Love About Coffee</h1>
            <div><BrigthBean /></div>
            {/*             <img src={bean} alt='bean' />*/}
            <h2>We makes every day full of energy and taste</h2>
            <h2>Want to try our beans?</h2>
            <button>More</button>
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
            <div className='best__coffee_item'>
              <div className='best__coffee_item-content'>
                <img src={presto} alt='#' />
                <div className='best__coffee_item_descr'>Solimo Coffee Beans 2 kg</div>
                <div className='best__coffee_item_price'>170$</div>
              </div>
            </div>
            <div className='best__coffee_item'>
              <div className='best__coffee_item-content'>
                <img src={solimo} alt='#' />
                <div className='best__coffee_item_descr'>Solimo Coffee Beans 2 kg</div>
                <div className='best__coffee_item_price'>170$</div>
              </div>
            </div>
            <div className='best__coffee_item'>
              <div className='best__coffee_item-content'>
                <img src={aromistico} alt='#' />
                <div className='best__coffee_item_descr'>Solimo Coffee Beans 2 kg</div>
                <div className='best__coffee_item_price'>170$</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='container'>
          <DarkBean />
          <Links />
        </div>
      </footer>
    </>
  );
}

export default App;
