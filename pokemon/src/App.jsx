import Home from "./page/Home";
import { Switch, Route } from "react-router-dom";
import PokeBase from "./components/PokeBase";

function App() {
  return (
    // <Home />
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:index">
          <PokeBase />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
