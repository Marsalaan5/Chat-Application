import { Box , Avatar,Typography} from "@mui/material"

function Profile() {
  return (
   <Box sx={{background:'#eee',width:'25vw',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    <Avatar src="/static/images/avatar/2.jpg" sx={{width:'156px',height:'156px'}}/>
    <Typography variant="h4" sx={{textTransform:'uppercase',color:'green',mt:3}}>Mohammad Rashid</Typography>
    <Typography variant="subtitle1" >Front-End Developer</Typography>
    <Typography variant="body2">arsalaankhan5@gmail.com</Typography>
   </Box>
  )
}

export default Profile