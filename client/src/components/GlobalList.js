import React from 'react'
import GlobalTicket from '../GlobalTicket'

const TicketList = (props) => {
  const { tickets } = props

  return (
    <div className="ticket-list">
      {tickets.map(ticket => <GlobalTicket {...ticket} key={ticket._id} />)}
    </div>
  )
}

export default TicketList