import React, { useContext, useEffect } from 'react'
import TicketList from '../components/TicketList'
import { UserContext } from '../context/UserProvider'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'

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
            <h1>My Queue</h1>
            <div className="queue-headers">
                <span className="span1"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Number</p></span>
                <span className="span2"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Caller</p></span>
                <span className="span3"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Location</p></span>
                <span className="span4"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Priority</p></span>
                <span className="span5"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Call type</p></span>
                <span className="span6"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Contact type</p></span>
                <span className="span7"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Opened by</p></span>
                <span className="span8"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Opened</p></span>
                <span className="span9"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Short description</p></span>
                <span className="span10"><MenuOutlinedIcon style={{ fontSize: 16 }}/><p className="queue-header-text">Description</p></span>
            </div>
            <TicketList tickets={tickets} />
        </div>
    )
}

export default TicketQueue