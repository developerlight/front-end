import { useState } from "react";

const KelipatanAngka = ({ kelipatan }) => {
    const [count, setCount] = useState(0)
    const kelipatanSatu = () => setCount(count + kelipatan)
    return (  
        <div className="card">
        <p>ini adalah kelipatan {kelipatan}</p>
        <button onClick={() => kelipatanSatu()}>
          {count}
        </button>
      </div>
    );
}
 
export default KelipatanAngka;