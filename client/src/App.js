import React, {useContext} from 'react'
import "./styles.css";
import Nav from "./components/Nav/Nav";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from './components/Auth'
import { UserContext } from './context/UserProvider'
import ProtectedRoute from './components/ProtectedRoute'
// import TicketForm from './components/TicketForm';
import TicketQueue from './components/TicketQueue';


function App() {
  const { token, logout } = useContext(UserContext)
  
  return (
    <div className="App">
      {token && <Nav logout={logout} />}
        <Switch>
          <Route exact path="/"
            render={() => token ? <Redirect to="/form"/> : <Auth />}
          />
        <ProtectedRoute
          path="/form"
          component={TicketQueue}
          redirectTo="/"
          token={token}    
        />
        {/* <ProtectedRoute
          path="/globalQueue"
          component={GlobalQueue}
          redirectTo="/"
          token={token}
          getAllTickets={getAllTickets}
        />  */}
        </Switch>
    </div>
  );
}

export default App;