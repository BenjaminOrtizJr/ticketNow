import React, { useContext } from 'react'
import TicketList from '../components/TicketList'
import TicketForm from '../components/TicketForm'
import { UserContext } from '../context/UserProvider'

const TicketQueue = () => {

    const {
        addTicket,
        tickets
    } = useContext(UserContext)

    return (
        <div className="ticket-queue">
            <TicketForm addTicket={addTicket}/>
            <h3>Ticket Queue</h3>
            <TicketList tickets={tickets}/>
        </div>
    )
}

export default TicketQueue