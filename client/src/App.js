import React, {useContext} from 'react'
import "./styles.css";
import Nav from "./components/Nav/Nav";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from './components/Auth'
import { UserContext } from './context/UserProvider'
import ProtectedRoute from './components/ProtectedRoute'
import Form from './components/Form';


function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div className="App">
      {token && <Nav logout={logout} />}
      <h1>🎫TicketNow</h1>
        <Switch>
          <Route exact path="/"
            render={() => token ? <Redirect to="/form"/> : <Auth />}
          />
        <ProtectedRoute
          path="/form"
          component={Form}
          redirectTo="/"
          token={token}    
        />    
        </Switch>
    </div>
  );
}

export default App;