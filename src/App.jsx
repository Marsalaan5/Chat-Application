
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import Register from './auth/Register'
import Login from './auth/Login'
import Chat from './chat/chat'
// import Sidebar from './chat/sidebar/Sidebar'

function App() {


  return (
    <>
    <BrowserRouter>

    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/chat' element={<Chat/>}/>
    {/* <Route path='/sidebar' element={<Sidebar/>}/> */}
    </Routes>

</BrowserRouter>

    </>
  )
}

export default App
