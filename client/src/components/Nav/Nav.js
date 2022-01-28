import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import FilterListIcon from "@material-ui/icons/FilterList"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import AddIcon from "@material-ui/icons/Add"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import StorageRoundedIcon from "@material-ui/icons/StorageRounded"
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined"
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined"
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined"
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
// import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
// import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
// import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
// import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
// import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded'
import Profile from '../Nav/images/profile_pic.jpg'
// import "../Nav/Nav.css"
import { UserContext } from '../../context/UserProvider'

export default function Nav(props) {
  const { logout } = props
  const {
    user: {
      username
    }
  } = useContext(UserContext)

  return (
    <nav className="nav">
      <div className="nav__top">
        <div className="nav__top-title">
          <h3>PRODUCTION</h3>
        </div>
        <div className="user__section">
          {/* <FiberManualRecordIcon className="user__profile-circle" aria-label="profile-image" /> */}
          <img src={Profile} className="user__profile-image" alt="user_profile" />
          <FiberManualRecordIcon className="user__online-circle" aria-label="status-indicator"/>
          <p className="user__name">{username}</p>
          {/* <Select labelId="label" id="select">
          <MenuItem value="Profile">Profile</MenuItem>
          <MenuItem value="Logout">Logout</MenuItem>
          </Select>         */}
        </div>     
        <div className="nav__top-icons">
          <SearchOutlinedIcon className="search-icon" aria-label="search"/>
          <ForumOutlinedIcon className="chat-icon" aria-label="chat" />
          <HelpOutlineOutlinedIcon className="help-icon" aria-label="help" />
          <SettingsOutlinedIcon className="settings-icon" aria-label="settings" />        
        </div>
        <button className="logout__button" onClick={logout}>LOGOUT</button>
      </div>

     <div className="nav__side">
        <div className="filter__icon-container">
            <FilterListIcon className="filter-icon" aria-label="filter"/>
        </div>
        <div className="home__icon-container"> 
            <HomeOutlinedIcon className="home-icon" aria-label="home"/>
        </div>
        <div className="add__icon-container">
            <AddIcon className="add-icon" aria-label="add"/>
        </div>
        <div className="info__icon-container">
            <InfoOutlinedIcon className="info-icon" aria-label="information"/>
        </div>
        <div className="storage__icon-container">
            <StorageRoundedIcon className="storage-icon" aria-label="storage"/>
        </div>
        <div className="ticket__icon-container">
            <ConfirmationNumberOutlinedIcon className="ticket-icon" aria-label="tickets"/>
        </div>
        <div className="dashboard__icon-container">
            <DashboardOutlinedIcon className="dashboard-icon" aria-label="dashboard"/>
        </div>
        {/* <div className="play__icon-container">
            <PlayCircleOutlineRoundedIcon className="play-icon" aria-label="play" />      
        </div> */}
    </div>
    {/* <div className="top-inner-nav">
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
    </div> */}
    </nav>  
  )
};