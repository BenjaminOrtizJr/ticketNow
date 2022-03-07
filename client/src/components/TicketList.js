import React, {useContext} from 'react'
import Ticket from '../components/Ticket'
import { UserContext } from '../context/UserProvider'

const TicketList = (props) => {
  const { tickets } = props

  const {
    deleteTicket
  } = useContext(UserContext)

  return (
    <div className="ticket-list">
      {tickets.map(ticket => <Ticket {...ticket} key={ticket._id} deleteTicket={deleteTicket}/>)}
    </div>
  )
}

export default TicketList