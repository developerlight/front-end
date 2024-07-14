import { useContext } from "react";
import First from "../components/Component1";
import { MyContext } from "../App";

const Hook2 = () => {
    const [nama, setNama] = useContext(MyContext)
    return (  
        <div className="">
            <h1>Ini adalah penggunaan useContext</h1>
            <input type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
            />
            <First />
        </div>
    );
}
 
export default Hook2;