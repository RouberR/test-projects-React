import "./App.css";
import MoreOrLess from "./more-or-less/MoreOrLess";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Test from "./test/Test";
import ToDo from "./to-do/ToDo";

function App() {
  return (
    <div className="App">
      <Route path="/moreOrLess"><MoreOrLess/></Route>
      <Route path="/to-do"><ToDo/></Route>

      <div className="conteinerBox">

        <div className="box">
          <h4>Игра больше-меньше</h4>
          <img src="/moreOrLess.png" />
            <div>
              <Link to="/MoreOrLess">
                <button className="buttonBox">Перейти</button>
              </Link>
            </div>
        </div>

        <div className="box">
          <h4>To-Do</h4>
          <img src="/todo.png" />
            <div>
              <Link to="/to-do">
                <button className="buttonBox">Перейти</button>
              </Link>
            </div>
        </div>

        <div className="box">
          <h4>Test</h4>
          <img src />
            <div>
              <Link to="/test">
                <button className="buttonBox">Перейти</button>
              </Link>
            </div>
        </div>


      </div>
    </div>
  );
}

export default App;
