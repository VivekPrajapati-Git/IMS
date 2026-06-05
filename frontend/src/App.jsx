import SignUp from "./Pages/signUp";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserDashboard from "./Pages/User/UserDashboard";
import AddStock from "./Pages/Admin/AddStock";
import UpdateStock from "./Pages/Admin/UpdateStock";
import Users from "./Pages/Admin/Users";
import SalesLog from "./Pages/Admin/SaleLog";
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
      <Route path = "/addstock" element = {<AddStock />} />
      <Route path = "/updatestock" element = {<UpdateStock />} />
      <Route path = '/users' element = {<Users />} />
      <Route path = '/saleslog' element = {<SalesLog />} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;