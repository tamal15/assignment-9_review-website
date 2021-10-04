import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/services">
       <Services></Services>
      </Route>
      <Route path="/courses">
      <Courses></Courses>
      </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
