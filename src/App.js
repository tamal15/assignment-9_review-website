import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Courses from './Components/Courses/Courses';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Route exact path="/services">
       <Services></Services>
      </Route>
      <Route exact path="/courses">
      <Courses></Courses>
      </Route>
      <Route exact path="/contact">
      <Contact></Contact>
      </Route>
      <Route exact path="*">
        <NotFound></NotFound>
      </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
