import React, {useContext} from 'react'
import "./styles.css"
import Nav from "./components/Nav/Nav"
import { Switch, Route, Redirect } from "react-router-dom"
import Auth from './components/Auth'
import { UserContext } from './context/UserProvider'
import ProtectedRoute from './components/ProtectedRoute'
import TicketForm from './components/TicketForm'
import TicketQueue from './components/TicketQueue'
import GlobalQueue from './components/GlobalQueue'
import HomePage from './components/HomePage'
import Information from './components/Information'
import QueueStats from './components/QueueStats'

function App() {
  const { token, logout, addTicket } = useContext(UserContext)
  
  return (
    <div className="App">
      {token && <Nav logout={logout} />}
        <Switch>
          <Route exact path="/"
            render={() => token ? <Redirect to="/form"/> : <Auth />}
        />
        <ProtectedRoute
          path="/home"
          component={HomePage}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute
          path="/form"
          component={TicketForm}
          redirectTo="/"
          token={token}
          addTicket={addTicket}
        />
        <ProtectedRoute
          path="/info"
          component={Information}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute
          path="/ticketqueue"
          component={TicketQueue}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute
          path="/globalqueue"
          component={GlobalQueue}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute
          path="/stats"
          component={QueueStats}
          redirectTo="/"
          token={token}
        />
        </Switch>
    </div>
  );
}

export default App;