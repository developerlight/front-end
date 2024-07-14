import { useContext } from "react";
import { MyContext } from "../App";
import Secound from "./Component2";

const First = () => {
    const [nama, setNama] = useContext(MyContext)
    return (  
        <>
            <h1>First Component</h1>
            <p>First : {nama}</p>
            <Secound />
        </>
    );
}

 
export default First;