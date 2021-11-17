import React from 'react';
import './Form.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Form = () => {
    return (
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
    )
}
export default Form