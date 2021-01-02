import React from "react";
import "./Sidebar.css";
import {Button, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";



function Sidebar() {

const dispatch = useDispatch();

  return (
   <div className="sidebar">
     <Button
      className="sidebar_compose" 
      startIcon={<AddIcon fontSize="large" />} 
      onClick= {() => dispatch(openSendMessage())}>
     Compose
     </Button>
     <SidebarOption
     Icon ={InboxIcon}
     title="Inbox"
     number={114}
     selected = {true} />

     <SidebarOption Icon = {StarIcon} title = "Starred" number={23} />
     <SidebarOption Icon = {AccessTimeIcon} title = "Snoozed" number={9} />
     <SidebarOption Icon = {LabelImportantIcon} title = "Important" number={19} />
     <SidebarOption Icon = {NearMeIcon} title = "Sent" number={3} />
     <SidebarOption Icon = {NoteIcon} title = "Drafts" number={12} />
     <SidebarOption Icon = {ExpandMoreIcon} title = "More" number={57} />

     <div className="sidebar_footer">
       <div className="footer_icons">
        <IconButton><PersonIcon /> </IconButton>
        <IconButton><DuoIcon /> </IconButton>
        <IconButton><PhoneIcon /> </IconButton>
        </div>
     </div>  

   </div>
  )
}

export default Sidebar;
