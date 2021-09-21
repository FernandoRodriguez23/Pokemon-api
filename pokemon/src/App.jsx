import {Switch, Route} from 'react-router-dom';
import Home from './page/Home';
import PokeSingle from './page/PokeSingle';


function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/:id'>
        <PokeSingle />
      </Route>
    </Switch>
  );
}

export default App;
