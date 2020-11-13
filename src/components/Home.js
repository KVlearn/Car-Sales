import React from 'react';
import { useHistory } from "react-router-dom";
 
function Home(){
     let history = useHistory();
    console.log('hisory=',history)
    const handleClick=()=>{
        history.push("/app");
    }
    return(
        <div>
            <h1>Welcome to Car World!</h1>
            <button onClick={handleClick}>Lets Go!</button>
        </div>
    )
}
export default Home;