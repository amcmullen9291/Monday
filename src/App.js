import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Locations from './Components/Location';


function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/locations"} exact component={Locations}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;