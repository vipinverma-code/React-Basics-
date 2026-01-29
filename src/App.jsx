import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
function App(){
    const[x,setx]=useState(0);
    const[y,sety]=useState(0);
   
    const btnclick = () => {
        console.log("clicked");
        setx(x+1);
        sety(y-1);
        console.log(x);
        console.log(y)
    }
    return(

        <div>
         <h1>Hello Everyone!</h1>
            <Navbar/>
            <Footer/>
            {x}
            <button onClick={()=>{btnclick()}}>ClickMe!</button>
            {y}
            <FirstComponent data="Vipin Verma a great entrepreneur after learning from industrial experiemnce "/>
        </div>
    );
};
export default App;