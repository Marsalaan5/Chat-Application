import { Paper } from "@mui/material"
import Sidebar from "./sidebar/Sidebar"
import Chatbox from "./chatbox/Chatbox"
import Profile from "./profile/Profile"
import socket from "./socket"
import { useEffect } from "react"

function Chat() {
  useEffect(() => {
    if (socket) {
      console.log("Socket initialized");
      socket.on("connect", () => {
        console.log("Connected to server");
      });

      // Cleanup on unmount
      return () => {
        console.log("Disconnecting socket");
        socket.disconnect();
      };
    }
  }, []);
  return (
   
    <Paper square elevation={0} sx={{height:'100vh',display:'flex'}}>
        
    <Sidebar/>
    <Chatbox/>
    <Profile/>
   
    
    </Paper>
    
  )
}

export default Chat