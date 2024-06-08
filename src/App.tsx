import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Home from "./pages/Home"
import Connect from "./pages/Connect"
import EcoSystem from "./pages/EcoSystem"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/Authentication/SignIn"
import Layout from "./pages/Layout"
import SignUp from "./pages/Authentication/SignUp"
import Workspace from "./pages/Workspace"





function App() {

  return (
    <>
<BrowserRouter>
<Routes >
<Route path="/" element={<Layout/>}>

  <Route path="/" element={<Home/>}/>
  <Route path="/connect" element={<Connect/>}/>
  <Route path="/ecosystem" element={<EcoSystem/>}/>
  <Route path="/about" element={<About/>}/>

     <Route path="/auth/singin" element={<SignIn/>}/>
    <Route path="/auth/singup" element={<SignUp/>}/>  


  

</Route>

<Route path="/workspace" element={<Workspace/>}/>

  <Route path='*'  element={<NotFound/>} />

</Routes>



</BrowserRouter>
    </>
  )
}

export default App
