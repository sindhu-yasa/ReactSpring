import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Navi';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Outlet/>
    </div>
  );
}

export default App;
