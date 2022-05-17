import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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

    // Top Nav
    <nav className="nav">
      <div className="nav__top">
        <div className="nav__top-title">
          <h3>PRODUCTION</h3>
        </div>
        <div className="user__section">
          {/* <FiberManualRecordIcon className="user__profile-circle" aria-label="profile-image" /> */}
          <AccountCircleIcon className="user__profile-image" style={{ fontSize: 36 }}/>
          <FiberManualRecordIcon className="user__online-circle" aria-label="status-indicator"/>
          <p className="user__name">{username}</p>
          {/* <Select labelId="label" id="select">
          <MenuItem value="Profile">Profile</MenuItem>
          <MenuItem value="Logout">Logout</MenuItem>
          </Select> */}
        </div>     
        <div className="nav__top-icons">
          <SearchOutlinedIcon className="search-icon" aria-label="search"/>
          <ForumOutlinedIcon className="chat-icon" aria-label="chat" />
          <HelpOutlineOutlinedIcon className="help-icon" aria-label="help" />
          <SettingsOutlinedIcon className="settings-icon" aria-label="settings" />        
        </div>
        <button className="logout__button" onClick={logout}>LOGOUT</button>
      </div>

      {/* Side Nav */}
     <div className="nav__side">
        <div className="filter__icon-container">
            <FilterListIcon className="filter-icon" aria-label="filter"/>
        </div>
        <div className="home__icon-container"> 
            <Link to="/home"><HomeOutlinedIcon className="home-icon" aria-label="home"/></Link>
        </div>
        <div className="add__icon-container">
            <Link to="/form"> <AddIcon className="add-icon" aria-label="add"/> </Link>
        </div>
        <div className="info__icon-container">
            <Link to="/info"><InfoOutlinedIcon className="info-icon" aria-label="information"/></Link>
        </div>
        <div className="storage__icon-container">
            <Link to="/ticketqueue" ><StorageRoundedIcon className="storage-icon" aria-label="storage"/></Link>
        </div>
        <div className="ticket__icon-container">
            <Link to="/globalqueue"><ConfirmationNumberOutlinedIcon className="ticket-icon" aria-label="tickets"/></Link>
        </div>
        <div className="dashboard__icon-container">
            <Link to="/stats"><DashboardOutlinedIcon className="dashboard-icon" aria-label="dashboard"/></Link>
        </div>
        {/* <div className="play__icon-container">
            <PlayCircleOutlineRoundedIcon className="play-icon" aria-label="play" />      
        </div> */}
      </div>
      
      
    </nav>  
  )
};