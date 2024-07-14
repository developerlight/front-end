import { useContext } from "react";
import { MyContext } from "../App";

const Thrid = () => {
    const [nama, setNama] = useContext(MyContext)
    return (  
        <>
            <h1>Thrid Component</h1>
            <p>Thrid : {nama}</p>
            
        </>
    );
}

export default Thrid;