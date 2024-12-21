import './App.css'
import Home from './Component/Home/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Component/Layout/Layout';
import Notfound from './Component/Notfound/Notfound'
import Products from './Component/Products/Products'
import Register from './Component/Register/Register'
import Login from './Component/LogIn/LogIn'
import {UserContextProvider } from './Context/UserContext';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import Categories from './Component/Categories/Categories';
import Brands from './Component/Brands/Brands';






export default function App() {
  let x = createBrowserRouter([
    {path:"",element:<Layout/>,children:[
    {index:"True",element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"Brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:"Register",element:<Register/>},
    {path:"Login",element:<Login/>},
    {path:"products",element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:"*",element:<Notfound/>},
  ]}
  ]);
  return <>
 
  <UserContextProvider>
  <RouterProvider router={x}></RouterProvider>
  </UserContextProvider>
  
  
  
  </>
  
    
}


