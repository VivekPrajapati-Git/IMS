import SignUp from "./Pages/signUp";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserDashboard from "./Pages/User/UserDashboard";
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <> 
    <BrowserRouter>    
    <Routes>
      <Route path='/singup' element={<SignUp />} />
      <Route path="/" element={<Login />} />
      <Route path = "/admin" element = {<AdminDashboard />} />
      <Route path = "/user" element = {<UserDashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;