import io from "socket.io-client"
const url = "http://localhost:5173"
const socket=io(url);
export default socket;