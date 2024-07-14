import { useContext } from "react";
import { MyContext } from "../App";
import Thrid from "./Component3";

const Secound = () => {
    const [nama, setNama] = useContext(MyContext)
    return (  
        <>
            <h1>Secound Component</h1>
            <p>Secound : {nama}</p>
            <Thrid />
        </>
    );
}

export default Secound;