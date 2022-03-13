import React, { useContext, useEffect } from 'react'
import TicketList from '../components/TicketList'
import { UserContext } from '../context/UserProvider'

const GlobalQueue = (props) => {
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
            <h1>Global Queue</h1>
            <TicketList tickets={tickets} />
        </div>
    )
}

export default GlobalQueue