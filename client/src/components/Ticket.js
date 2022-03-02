import React from 'react'

const Ticket = (props) => {
  const { _id, ticketNumber, caller, location, knowledge, callType, contactType, openedBy, opened, shortDescription, description, completed } = props

  return (
    <div className="ticket-container">
      <input className="ticket-container-checkbox" type="checkbox"  />
      <p className="ticket-container-number">{_id}</p>
      <p className="ticket-container-caller">{caller}</p>
      <p className="ticket-container-location">{location}</p>
      <p className="ticket-container-knowledge">{knowledge}</p>
      <p className="ticket-container-calltype">{callType}</p>
      <p className="ticket-container-contacttype">{contactType}</p>
      <p className="ticket-container-openedby">{openedBy}</p>
      <p className="ticket-container-opened">{opened}</p>
      <p className="ticket-container-shortdescription">{shortDescription}</p>
      <p className="ticket-container-description">{description}</p>
      <button className="edit-button">Edit</button>
      <button className="delete-button">Resolve</button>
    </div>
  )
}

export default Ticket