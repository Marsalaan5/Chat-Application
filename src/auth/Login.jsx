import { Container, Grid, TextField, Button, Paper, Box , Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  return (
    <Container
    maxWidth="md"
    sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
      <Grid container>
        <Grid item md={6}>
          <Paper
            square
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              height:'100%',
              display:'flex',
              alignItems:'center'
              //  border:(theme) =>console.log(theme)
            }}
          >
            <Box sx={{ p: 5 ,textAlign:'center'}}>
              <Box sx={{display:'flex',gap:'2',justifyContent:'center' }}>
              <svg
                  width='55'
                  height='55'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="114"
                    stroke="#010101"
                    strokeWidth="20"
                    fill="none"
                  />
                  <path
                    d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z"
                    fill="#010101"
                  />
                </svg>
                <svg
                  width="50"
                  height="50"
                  viewBox="-10.5 -9.45 21 18.9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </svg>
                
              </Box>

              <Typography variant="h4" gutterBottom sx={{fontWeight:'600', mt:3}}>
       Chat App
      </Typography>

            
      <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                natus provident officiis, repellendus possimus mollitia, non
                incidunt itaque voluptatibus eius ut libero vero iste ad
                asperiores eaque? Tempora, deleniti quidem?
              </Typography>
            </Box>
          </Paper>
          
        </Grid>
        <Grid item md={6}>
        <Paper
            square
           sx={{height:'100%', display:'flex',
           flexDirection:'column'}}
          >
            <Box sx={{p:5}}>
            <Typography variant="h5" sx={{mb:2,fontWeight:'500',textTransform:"uppercase"}} >Login</Typography>
          <TextField 
          fullWidth 
          id="email" 
          label="Email" 
          variant="standard"
          sx={{mb:3}} 
          
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            variant="standard"
            sx={{mb:3}}
          />
          <Button 
          fullWidth 
          variant="contained" sx={{py:2}}
          >
            Login
          </Button>
          <Button sx={{mt:1}} >Forgot Password</Button>
          </Box>
          <Box sx={{textAlign:'right',pr:1}}>
            <Typography variant="body2">
                Don&apos;t have an account?<Button onClick={()=>navigate('/register')}>Create Account</Button>
            </Typography>
          </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
