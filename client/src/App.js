import "./styles.css";
import Nav from "./components/Nav/Nav";
import { Switch, Route } from "react-router-dom";
import Form from './components/Form/Form';


export default function App() {
  return (
      <div className="App">
      <Nav />
          <Switch>
              <Route exact path="/">
                  <Form />
              </Route>
              <Route>
                  
              </Route>
          </Switch>
    </div>
  );
}