import Header from "./Header";
import React from "react";
import { Box, Tabs, Tab, Typography,List,ListItem,ListItemAvatar,Avatar,ListItemText,Divider} from "@mui/material";
import { useState } from "react";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonIcon from '@mui/icons-material/Person';



// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import PersonIcon from "@mui/icons-material/Person";

function Sidebar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const chatListData = [
    { id: 1, name: "Mohammad Rashid", secondaryText: "Ali Connors", avatarSrc: "/static/images/avatar/1.jpg" },
    { id: 2, name: "John Doe", secondaryText: "Sandra Adams", avatarSrc: "/static/images/avatar/2.jpg" },
    { id: 3, name: "Jane Smith", secondaryText: "Robert Brown", avatarSrc: "/static/images/avatar/3.jpg" },
    { id: 4, name: "Mohammad Rashid", secondaryText: "Ali Connors", avatarSrc: "/static/images/avatar/1.jpg" },
    { id: 5, name: "John Doe", secondaryText: "Sandra Adams", avatarSrc: "/static/images/avatar/2.jpg" },
    { id: 6, name: "Jane Smith", secondaryText: "Robert Brown", avatarSrc: "/static/images/avatar/3.jpg" },
    { id: 7, name: "Mohammad Rashid", secondaryText: "Ali Connors", avatarSrc: "/static/images/avatar/1.jpg" },
    { id: 8, name: "John Doe", secondaryText: "Sandra Adams", avatarSrc: "/static/images/avatar/2.jpg" },
    { id: 9, name: "Jane Smith", secondaryText: "Robert Brown", avatarSrc: "/static/images/avatar/3.jpg" },
    { id: 10, name: "Mohammad Rashid", secondaryText: "Ali Connors", avatarSrc: "/static/images/avatar/1.jpg" },
    { id: 11, name: "John Doe", secondaryText: "Sandra Adams", avatarSrc: "/static/images/avatar/2.jpg" },
    { id: 12, name: "Jane Smith", secondaryText: "Robert Brown", avatarSrc: "/static/images/avatar/3.jpg" },
    
    
  ];
  return (
    <Box sx={{ width: "25vw", display:'flex', flexDirection:'column',height:'100vh'}}>
      <Header />
      <Tabs
      
        // fullwidth
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        centered
      >
        <Tab icon={<ChatBubbleOutlineIcon/>}
        fontSize='small'
        iconPosition="start"
        label="Chat List"></Tab>
        <Tab 
        icon={<PersonIcon/>}
        fontSize='small'
        iconPosition="start"
        label="User List"></Tab>

        </Tabs>
        {value === 0 && (
        <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
          {chatListData.map((chat) => (
            <React.Fragment key={chat.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={chat.name} src={chat.avatarSrc} />
                </ListItemAvatar>
                <ListItemText
                  primary={chat.name}
                  secondary={
                    <Typography component="span" variant="caption">
                      {chat.secondaryText}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      )}

      {value === 1 && <Typography sx={{ p: 2 }}>User List Content Goes Here</Typography>}
    </Box>
  );
}

export default Sidebar;