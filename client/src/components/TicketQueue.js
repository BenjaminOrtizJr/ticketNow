import React, { useContext } from 'react'
import TicketList from '../components/TicketList'
import { UserContext } from '../context/UserProvider'

const TicketQueue = () => {

    const {
        tickets   
    } = useContext(UserContext)

    return (
        <div className="ticket-queue">
            <h3>Ticket Queue</h3>
            <TicketList tickets={tickets}
            />
        </div>
    )
}

export default TicketQueue