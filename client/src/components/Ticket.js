import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const Ticket = (props) => {
  const { ticketNumber, caller, location, priority, callType, contactType, openedBy, opened, shortDescription, description, completed } = props

  return (
    <div className="ticket-container">
      <input className="ticket-container-checkbox" name="completed" value={completed} type="checkbox"/>
          <p className="ticket-container-number">{ticketNumber}</p>
          <p className="ticket-container-caller">{caller}</p>
          <p className="ticket-container-location">{location}</p>
          <p className="ticket-container-priority">{priority}</p>
          <p className="ticket-container-calltype">{callType}</p>
          <p className="ticket-container-contacttype">{contactType}</p>
          <p className="ticket-container-openedby">{openedBy}</p>
          <p className="ticket-container-opened">{opened}</p>
          <p className="ticket-container-shortdescription">{shortDescription}</p>
          <p className="ticket-container-description">{description}</p>
          <EditIcon className="edit-icon" style={{ fontSize: 20}}/>
          <DeleteForeverIcon className="delete-icon" style={{ fontSize: 20 }}/>
    </div>
  )
}

export default Ticket