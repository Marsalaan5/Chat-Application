import { Paper } from "@mui/material"
import Sidebar from "./sidebar/Sidebar"
import Chatbox from "./chatbox/Chatbox"
import Profile from "./profile/Profile"

function Chat() {
  return (
   
    <Paper square elevation={0} sx={{height:'100vh',display:'flex'}}>
        
    <Sidebar/>
    <Chatbox/>
    <Profile/>
    </Paper>
    
  )
}

export default Chat