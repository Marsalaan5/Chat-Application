import { Paper } from "@mui/material"
import Sidebar from "./sidebar/Sidebar"


function Chat() {
  return (
   
    <Paper square elevation={0} sx={{width:'100vh'}}>
        
    <Sidebar/>
    {/* <Chatbox/>
    <Profile/> */}
    </Paper>
    
  )
}

export default Chat