import React, { useContext, useEffect } from 'react'
import GlobalList from '../components/GlobalList'
import { UserContext } from '../context/UserProvider'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'

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
            <div className="queue-headers">
                <span className="span11"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Number</p></span>
                <span className="span22"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Caller</p></span>
                <span className="span33"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Location</p></span>
                <span className="span44"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Priority</p></span>
                <span className="span55"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Call type</p></span>
                <span className="span66"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Contact type</p></span>
                <span className="span77"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Opened by</p></span>
                <span className="span88"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Opened</p></span>
                <span className="span99"><MenuOutlinedIcon style={{ fontSize: 16 }} /><p className="queue-header-text">Short description</p></span>
                <span className="span100"><MenuOutlinedIcon style={{ fontSize: 16 }}/><p className="queue-header-text">Description</p></span>
            </div>
            <GlobalList tickets={tickets} />
        </div>
    )
}

export default GlobalQueue