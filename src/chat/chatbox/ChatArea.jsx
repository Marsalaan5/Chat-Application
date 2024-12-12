import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Stack,
  Chip,
  Paper,
  IconButton,
} from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReplyIcon from "@mui/icons-material/Reply";

function ChatArea() {
  return (
    <Box sx={{ overflowY: "auto", flex: "1 0 0", background: "#f9f9f9" }}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          p: 2,
          position: "sticky",
          top: 0,
          zIndex: 2,
          background: "#f9f9f9",
        }}
      >
        <Chip label="Today" />
      </Stack>

      <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", width: "80%" }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Mohammad Rashid"
                secondary={
                  <Typography component="span" variant="caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque vero impedit minima fuga culpa rerum illo quam rem et
                    odit perferendis quidem inventore architecto accusantium
                    quas necessitatibus nisi, error beatae.
                  </Typography>
                }
              />
              <Box
                mt={1}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2">12:30 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{ flexDirection: "row-reverse", mb: 2 }}>
          <Box
            sx={{ display: "flex", width: "80%", flexDirection: "row-reverse" }}
          >
            <ListItemAvatar
              sx={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Avatar alt="Remy Sharp" src="static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5, bgcolor: "#ccc" }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="John Doe"
                secondary={
                  <Typography component="span" variant="caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque vero impedit minima fuga culpa rerum illo quam rem et
                    odit perferendis quidem inventore architecto accusantium
                    quas necessitatibus nisi, error beatae.
                  </Typography>
                }
              />
              <Box
                mt={1}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2">12:30 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", width: "80%" }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Paper sx={{ width: "100%", p: 1.5 }}>
              <ListItemText
                sx={{ m: 0 }}
                primary="Mohammad Rashid"
                secondary={
                  <Typography component="span" variant="caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque vero impedit minima fuga culpa rerum illo quam rem et
                    odit perferendis quidem inventore architecto accusantium
                    quas necessitatibus nisi, error beatae.
                  </Typography>
                }
              />
              <Box
                mt={1}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="body2">12:30 PM</Typography>
                <Box>
                  <IconButton size="small">
                    <ReplyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default ChatArea;
