import React, { useContext, useEffect } from 'react'
import TicketList from '../components/TicketList'
import { UserContext } from '../context/UserProvider'

const TicketQueue = (props) => {
// test
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
            <TicketList tickets={tickets} />
        </div>
    )
}

export default TicketQueue