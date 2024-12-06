import { Box } from "@mui/material"
import Header from "./Header"
import ChatArea from "./ChatArea"
import Footer from "./Footer"

function Chatbox() {
  return (
    <Box sx={{width:'50vw',display:'flex',height:'100%',flexDirection:'column'}}> 
<Header/>
<ChatArea/>
<Footer/>
 </Box>
  )
}

export default Chatbox