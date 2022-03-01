import React, { useState, useContext } from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
import { UserContext } from '../context/UserProvider'

const initialInputs = {
    ticketNumber: 1,
    caller: "",
    location: "",
    knowledge: "",
    callType: "",
    contactType: "",
    openedBy: "",
    opened: "",
    shortDescription: "",
    description: "",
    }

const TicketForm = (props) => {
    const [inputs, setInputs] = useState(initialInputs)
    const {addTicket} = props

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTicket(inputs)
        setInputs(initialInputs)
    }

    const {ticketNumber, caller, location, knowledge, callType, contactType, openedBy, opened, shortDescription, description} = inputs

     const {
        user: {
            username
        }
    } = useContext(UserContext)

    const d = new Date()

    return (
        <>

            {/* Top Inner Navigation */}
        <div className="top-inner-nav">
            <div className="inner-nav-box1">
                <ArrowBackIosOutlinedIcon  className="back-icon" aria-label="back-arrow" />
                <MenuOutlinedIcon className="burger-icon" aria-label="menu" />
                <span className="ticket-number-container">
                    <h6 className="ticket-number">Call-CALL0000001</h6>
                    <h6 className="new-record">New record</h6>     
                </span> 
            </div>
            <div className="inner-nav-box2">
                <AttachFileOutlinedIcon className="paperclip-icon" aria-label="attachment" />
                <MoreHorizOutlinedIcon className="more-icon" aria-label="more-options" />
                <button className="submit-button1" onClick={handleSubmit}>Submit</button>
                <button className="save-button1" onClick={handleSubmit}>Save</button>        
            </div>
        </div>
            
            {/* Ticket Form */}
        
        <form className="form-container"> 
            <div className="section-one">
                <div className="section-one-a">
                    <div className="label-container1">
                        <label className="labels" for="ticket_number">Number</label>
                        <label className="labels" for="caller_name">Caller</label>
                        <label className="labels" for="location">Location</label>
                        <label className="labels" for="knowledge">Knowledge</label>
                        <label className="labels" for="call-type">Call Type</label>
                    </div>
                    <div className="input-container1">
                            <input id="ticket_number"
                                className="input-top-left"
                                type="text"
                                name="ticketNumber"
                                value={ticketNumber}
                                onChange={handleChange} />
                        <input id="caller_name"
                                className="input-top-left"
                                type="text"
                                name="caller"
                                value={caller}
                                onChange={handleChange}
                                required={true} />
                        <input id="location"
                                className="input-top-left"
                                type="text"
                                name="location"
                                value={location}
                                onChange={handleChange}
                                required />
                        <input id="knowledge"
                                className="input-top-left"
                                type="text"
                                name="knowledge"
                                value={knowledge}
                                onChange={handleChange}
                                required />
                        <input id="call-type"
                                className="input-top-left"
                                type="text"
                                name='callType'
                                value={callType}
                                onChange={handleChange}
                                required />
                    </div>
                </div>
                <div className="section-one-b">
                    <div className="label-container2">
                        <label className="labels" for="timestamp">Opened</label>
                        <label className="labels" for="opened-by">Opened by</label>
                        <label className="labels" for="contact-method">Contact type</label>
                    </div>
                    <div className="input-container2">
                            <input
                                id="timestamp"
                                className="input-top-right"
                                type="date"
                                name="opened"
                                placeholder={Date.toString()}
                                value={opened}
                                onChange={handleChange}
                                required />
                        <div className="info-container"> 
                            <input id="opened-by"
                                    className="input-top-right"
                                    type="text"
                                    name="openedBy"
                                    value={openedBy}
                                    onChange={handleChange}
                                    />
                                <InfoOutlinedIcon style={{ fontSize: 27 }} className="info-button" />
                        </div>   
                            <input id="contact-method"
                                className="input-top-right"
                                type="text"
                                name="contactType"
                                value={contactType}
                                onChange={handleChange}
                                required />
                    </div>        
                </div>
            </div>
                <div className="section-two">
                    <div className="label-container3">
                        <label className="labels" for="short-description">Short Description</label>
                        <label className="labels" for="description">Description</label>
                    </div>
                    <div className="section-two-input">
                        <input type="text"
                            className="shortDescription"
                            name="shortDescription"
                            value={shortDescription}
                            onChange={handleChange}
                            required />
                        <textarea type="text"
                            className="text-box"
                            name="description"
                            value={description}
                            onChange={handleChange}
                            required>
                        </textarea>
                    </div>    
                </div>
            </form>
            <div className="form-buttons">
                <button className="submit-button2" onClick={handleSubmit}>Submit</button>
                {/* <button className="save-button2">Save</button> */}
            </div>  
        </>
    )
}
export default TicketForm