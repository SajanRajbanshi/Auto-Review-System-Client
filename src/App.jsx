import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from "./components/Signup";
import AuthLayout from './layouts/AuthLayout';
import AuthLayer from './components/AuthLayer';
import Profile from './components/Profile';
function App() {
  const router=createBrowserRouter([
    {path:"/",element:<AuthLayout/>,children:[
      {path:"/", element:<Signin/>},{path:"/signup",element:<Signup/>}
    ]},
    {path:"/home",element:<AuthLayer/>},
    {path:"home/profile",element:<Profile/>}
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
