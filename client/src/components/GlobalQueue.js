import React, { useContext, useEffect } from 'react'
import GlobalList from '../components/GlobalList'
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
            <GlobalList tickets={tickets} />
        </div>
    )
}

export default GlobalQueue