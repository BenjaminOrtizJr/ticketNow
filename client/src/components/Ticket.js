import React from 'react'

const Ticket = (props) => {
  const { ticketNumber, caller, location, knowledge, callType, contactType, openedBy, opened, shortDescription, description } = props

  return (
    <div className="ticket-container">
      <p>{ticketNumber}</p>
      <p>{caller}</p>
      <p>{location}</p>
      <p>{knowledge}</p>
      <p>{callType}</p>
      <p>{contactType}</p>
      <p>{openedBy}</p>
      <p>{opened}</p>
      <p>{shortDescription}</p>
      <p>{description}</p>
    </div>
    // test note
  )
}

export default Ticket