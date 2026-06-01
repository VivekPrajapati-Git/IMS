import SignUp from "./Pages/signUp";
import Login from "./Pages/Login";
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <> 
    <BrowserRouter>    
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;