import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import EditForm from './EditForm'

const Ticket = (props) => {
  const { ticketNumber, caller, location, priority, callType, contactType, openedBy, opened, shortDescription, description, _id } = props
  const [editToggle, setEditToggle] = useState(false)

  const {
    deleteTicket
  } = useContext(UserContext)

  return (
    <div className="ticket-container">
      {!editToggle ?
        <>
          <input className="ticket-container-checkbox" type="checkbox" />
          <p className="ticket-container-number">{_id}</p>
          <p className="ticket-container-caller">{caller}</p>
          <p className="ticket-container-location">{location}</p>
          <p className="ticket-container-priority">{priority}</p>
          <p className="ticket-container-calltype">{callType}</p>
          <p className="ticket-container-contacttype">{contactType}</p>
          <p className="ticket-container-openedby">{openedBy}</p>
          <p className="ticket-container-opened">{opened}</p>
          <p className="ticket-container-shortdescription">{shortDescription}</p>
          <p className="ticket-container-description">{description}</p>
          <button className="edit-button" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
          <button className="delete-button" onClick={deleteTicket}>Resolve</button>
        </>
        :
        <>
          <EditForm
            ticketNumber={ticketNumber}
            caller={caller}
            location={location}
            priority={priority}
            callType={callType}
            contactType={contactType}
            openedBy={openedBy}
            opened={opened}
            shortDescription={shortDescription}
            description={description}
          />
        </>
      }
    </div>
  )
}

export default Ticket