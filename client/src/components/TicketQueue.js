import React, { useContext, useEffect } from 'react'
import TicketList from '../components/TicketList'
import { UserContext } from '../context/UserProvider'

const TicketQueue = (props) => {

    const {
        tickets,
        getUserTickets
    } = useContext(UserContext)
    

    useEffect(() => {
        getUserTickets()
    }, [])
    
    return (
        <div className="ticket-queue">
            <h1>Ticket Queue</h1>
            <TicketList tickets={tickets} />
        </div>
    )
}

export default TicketQueue