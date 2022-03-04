import React, { useContext, useEffect } from 'react'
import TicketList from '../components/TicketList'
import { UserContext } from '../context/UserProvider'

const TicketQueue = (props) => {

    const {
        tickets,
        getAllTickets
    } = useContext(UserContext)
    

    useEffect(() => {
        getAllTickets()
    }, [])
    
    return (
        <div className="ticket-queue">
            <h1>Ticket Queue</h1>
            <div className="edit-form">
                <input className="edit-number" type="text" placeholder="Ticket Number" />
                <input className="edit-opened" type="text" placeholder="Opened" />
                <input className="edit-openedby" type="text" placeholder="Opened By" />
                <input className="edit-contacttype" type="text" placeholder="Contact Type" />
                <input className="location" type="text" placeholder="Location" />
                <input className="edit-priority" type="text" placeholder="Priority" />
                <input className="edit-caller" type="text" placeholder="Caller" />
                <input className="edit-short-description" type="text" placeholder="Short Description" />
                <input className="edit-description" type="text" placeholder="Description" />
                <input className="edit-calltype" type="text" placeholder="Task type" />
            </div>
            <TicketList tickets={tickets} />
        </div>
    )
}

export default TicketQueue