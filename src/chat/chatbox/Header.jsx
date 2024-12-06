import { Card,CardHeader,Avatar,IconButton,Typography,Button} from "@mui/material"
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { red } from '@mui/material/colors';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DuoIcon from '@mui/icons-material/Duo';
import CallIcon from '@mui/icons-material/Call';

function Header() {
  return (

    <Card sx={{p:1}}>
          <CardHeader
            avatar={
                <>
                <Button sx={{minWidth:'auto',mr:1}}>

                <ArrowBackIosNewIcon/>
                </Button>
              <Avatar>R</Avatar>
              </>
            }
            action={
                <>
              <IconButton >
                <DuoIcon/>
               
              </IconButton>
              <IconButton >
                <CallIcon/>
              </IconButton>
                </>
            }
            title="Mohammad Rashid"
            subheader= {
                <Typography variant="caption"> Front-End Developer</Typography>}
                />
    </Card>
                
  )
}

export default Header

