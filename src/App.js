import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Questions from './Components/Questions';


function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/questions"} exact component={Questions}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;