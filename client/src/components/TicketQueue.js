import React, { useContext, useEffect } from 'react'
import TicketList from '../components/TicketList'
import { UserContext } from '../context/UserProvider'

const TicketQueue = (props) => {
// test
    const {
        tickets,
        getUserTickets
    } = useContext(UserContext)
    
    useEffect(() => {
        getUserTickets()
    }, [])
    
    return (
        <div className="ticket-queue">
            <h1>My Tickets</h1>
            <TicketList tickets={tickets} />
        </div>
    )
}

export default TicketQueue