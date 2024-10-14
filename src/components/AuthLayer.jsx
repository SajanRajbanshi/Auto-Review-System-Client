import { Navigate } from "react-router-dom"
import Dashboard from "./Dashboard"


export default function AuthLayer()
{
    if(localStorage.getItem("userId"))
    {
        return <Dashboard/>
    }
    else{
        return <Navigate to={"/"}/>
    }
}