import { Card,CardHeader,Avatar,IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red,green } from '@mui/material/colors';



function Header() {
  return (
    
     <Card   sx={{  bgcolor: green[500] , borderRadius:0}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" sx={{color:'primary.contrastText'}}>
                <MoreVertIcon />
              </IconButton>
            }
            title="Mohammad Rashid"
            subheader= {
            <Typography variant="caption"> Front-End Developer</Typography>}
            />
    </Card>
  );
};

export default Header;