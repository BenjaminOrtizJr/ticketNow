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
            
        <div className="form-container">
            <div className="form-wrapper">
                <form className="section-one"> 
                    <div className="section-one-a">
                        <div className="label-container1">
                            <label className="labels" for="ticket_number">Number</label>
                            <label for="caller_name">Caller</label>
                            <label for="location">Location</label>
                            <label for="knowledge">Knowledge</label>
                            <span className="asterisk-span">*
                            <label for="call-type">Call Type</label>
                            </span>
                        </div>
                        <div className="input-container1">
                            <input id="ticket_number" className="input-top-left" type="text" placeholder="" value="CALL0000001" />
                            <input id="caller_name" className="input-top-left" type="text" placeholder="" />
                            <input id="location" className="input-top-left" type="text" placeholder="" />
                            <input id="knowledge" className="input-top-left" type="text" placeholder="" />
                            <input id="call-type" className="input-top-left" type="text" placeholder="" />
                            </div>
                    </div>
                    <div className="section-one-b">
                        <div className="label-container2">
                            <label for="timestamp">Opened</label>
                            <label for="opened-by">Opened by</label>
                            <label for="contact-method">Contact type</label>
                        </div>
                        <div className="input-container2">
                            <input id="timestamp" className="input-top-right" type="text" value={Date()} />
                            <span className="info-button-span"><input id="opened-by" className="input-top-right" type="text" value="Benjamin Ortiz Jr." />
                            <InfoOutlinedIcon style={{ fontSize: 34 }} className="info-button" /></span>
                            <input id="contact-method" className="input-top-right" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="section-two">
                            <div className="label-container3">
                                <label for="short-description">Short description</label>
                                <label for="description">Description</label>
                            </div>
                            <div className="input-container3"> 
                                <input type="text" className="input-bottom" placeholder="" />
                                <textarea type="text" className="text-box" />
                            </div>
                    </div>
                    <div className="form-buttons">
                        <button className="submit-button2">Submit</button>
                        <button className="save-button2">Save</button>
                        </div>
                </form>
                {/* <form className="section-two">
                        
                    </form>*/}
            </div>
            </div>
        </>
    )
}
export default Form