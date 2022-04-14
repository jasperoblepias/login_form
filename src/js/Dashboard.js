import React from 'react'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }

    return (
        <div>
            <button onClick={routeChange}> logout</button>
        </div>
    )
}

export default Dashboard;
