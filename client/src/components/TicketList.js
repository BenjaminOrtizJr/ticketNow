import React from 'react'
import Ticket from '../components/Ticket'

const TicketList = (props) => {
  const { tickets } = props

  return (
    <div className="ticket-list">
      {tickets.map(ticket => <Ticket {...ticket} key={ticket._id} />)}
    </div>
  )
}

export default TicketList