
import './App.css';
import MoreOrLess from './more-or-less/MoreOrLess';
import { Route} from 'react-router-dom';
import { Link} from 'react-router-dom';
import Test from './test/Test';

function App() {
  return (
    <div className="App">
   
    <Route path='/moreOrLess' >
      <MoreOrLess/>
    </Route>
    <Route path='/test' >
      <Test/>
    </Route>

    <div className="conteinerBox">
      <div className="box">
      <h4>Игра больше-меньше</h4>
      <img src='/moreOrLess.png' />
      <div>
      <Link to='/MoreOrLess'>
      <button   className="buttonBox">Перейти</button>
      </Link>
      </div>   
      </div>

      <div className="box">
      <h4>Тест</h4>
      <img  />
      <div>
      <Link to='/Test'>
      <button   className="buttonBox">Перейти</button>
      </Link>
      </div>
      </div>



      </div>
    </div>
  );
}

export default App;
