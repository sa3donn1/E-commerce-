import React, { useContext } from "react";
import {NavLink,Link, useNavigate} from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Login from "../LogIn/LogIn";




export default function Navbar () {
    let {UserLogin ,setUserLogin}=useContext(UserContext)
    let navigate = useNavigate();

    function LogOut() {
        localStorage.removeItem('userToken');
        setUserLogin(null);
        navigate('Login');
    }
    return ( <>
   

<nav class="bg-gray-200 dark:bg-gray-700 fixed top-0 right-0 left-0 z-50">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div className="flex flex-wrap">
        <Link to="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold text-blue-600 whitespace-nowrap dark:text-white">ONLINE store</span>
        </Link>
        </div>
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                {UserLogin !== null? <>
                      <li>
                    <NavLink to="" className="text-blue-600 dark:text-white hover:underline">Home</NavLink>
                </li>
                <li>
                    <NavLink to="categories" className="text-blue-600 dark:text-white hover:underline">Categories</NavLink>
                </li>
                <li>
                    <NavLink to="Brands" className="text-blue-600 dark:text-white hover:underline">Brands</NavLink>
                </li>
                <li>
                    <NavLink to="Products" className="text-blue-600 dark:text-white hover:underline">Products</NavLink>
                </li>
                    </>:null
                }
              
            </ul>
        </div>
    </div>
        
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            {
                UserLogin == null?<>
                <NavLink to="Login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</NavLink>
                <NavLink to="Register" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Register</NavLink>
                </>:<Link  onClick={LogOut} className="text-sm  font-bold text-blue-600 dark:text-blue-500 hover:underline">LogOut</Link>
            }
            
        </div>
    </div>
</nav>
    </>
    )
   
    ;
}