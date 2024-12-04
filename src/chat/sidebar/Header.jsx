import { Card,CardHeader,Avatar,IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';


function Header() {
  return (
    
     <Card   sx={{ bgcolor:'primary.light' , borderRadius:0,color:'primary.contrastText'}}>
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