import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'

const Form = () => {
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
                <button className="submit-button1">Submit</button>
                <button className="save-button1">Save</button>        
            </div>
        </div>
            
            {/* Ticket Form */}
        
        <form className="form-container"> 
            <div className="section-one">
                <div className="section-one-a">
                    <div>
                        <label className="labels" for="ticket_number">Number</label><input id="ticket_number" className="input-top-left" type="text" placeholder="" value="CALL0000001" />
                    </div>
                    <div>
                        <label for="caller_name">Caller</label><input id="caller_name" className="input-top-left" type="text" placeholder="" />
                    </div>
                    <div>
                        <label for="location">Location</label><input id="location" className="input-top-left" type="text" placeholder="" />
                    </div>
                    <div>
                        <label for="knowledge">Knowledge</label><input id="knowledge" className="input-top-left" type="text" placeholder="" />
                    </div>
                    <div>
                        <label for="call-type">Call Type</label><input id="call-type" className="input-top-left" type="text" placeholder="" />
                    </div>
                </div>
             
                <div className="section-one-b">
                    <div>
                        <label for="timestamp">Opened</label><input id="timestamp" className="input-top-right" type="text" value={Date()} />    
                    </div>
                    <div>
                        <label for="opened-by">Opened by</label>
                        <span className="info-button-span">
                        <input id="opened-by" className="input-top-right" type="text" value="Benjamin Ortiz Jr." />
                        <InfoOutlinedIcon style={{ fontSize: 34 }} className="info-button" /></span>
                    </div>
                    <div>
                        <label for="contact-method">Contact type</label><input id="contact-method" className="input-top-right" type="text" placeholder="" />
                    </div>
                </div>
            </div>
            <div className="section-two">
                <div> 
                    <label for="short-description">Short description</label><input type="text" className="input-bottom" placeholder="" />
                </div>
                <div>
                    <label for="description">Description</label><textarea type="text" className="text-box" />
                </div>
            </div>
            <div className="form-buttons">
                <button className="submit-button2">Submit</button>
                <button className="save-button2">Save</button>
            </div>
        </form>  
        </>
    )
}
export default Form