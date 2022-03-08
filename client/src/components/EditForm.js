import React from 'react'


const EditForm = (props) => {
    const { ticketNumber, caller, location, priority, callType, contactType, openedBy, opened, shortDescription, description, _id } = props

  return (
      <div className="edit-form">
          <input type="text" value={ticketNumber} />
          <input type="text" value={caller} />
          <input type="text" value={location} />
          <input type="text" value={priority} />
          <input type="text" value={callType} />
          <input type="text" value={contactType} />
          <input type="text" value={openedBy} />
          <input type="text" value={opened} />
          <input type="text" value={shortDescription} />
          <input type="text" value={description} />
      </div>
  )
}

export default EditForm