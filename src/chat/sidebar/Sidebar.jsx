import Header from "./Header";
import { Box,Tabs,Tab } from "@mui/material";
import { useState } from "react";


function Sidebar() {
  const [value, setValue] = useState(0);

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  return (
   
    <Box sx={{width:'25vw'}}>
      <Header/>
      <Tabs 
      value={value} 
      onChange={handleChange} 
      aria-label="basic tabs example"
      centered>

    <Tab label="Chat List" />
    <Tab label="User List" />
 
  </Tabs>
    </Box>
  )
}

export default Sidebar;