import { useState } from "react";

const EventHandling = () => {
    const [click, setClick] = useState(0)
    const [change, setChange] = useState('')
    
    const [submit, setSubmit] = useState('')
    const [result, setResult] = useState('')
    
    const handlingOnClick = () => {
        setClick(click + 1)
    }

    const handlingOnChange = (e) => {
        setChange(e.target.value)
    }

    const handlingOnSubmit = (e) => {
        e.preventDefault()
        setSubmit(result)
    }

    const changeOnSubmit = (e) => {
        setResult(e.target.value)
        setSubmit('')
    }

    return (  
        <div>
            <h1>Event Handling</h1>
            <h3>On Click</h3>
            <button onClick={handlingOnClick}>{click}</button>

            <h3>On Change</h3>
            <label>
                nama : <input type="text" onChange={handlingOnChange} />
            </label>
            <p>nama anda adalah {change}</p>

            <h3>On Submit</h3>
            <form onSubmit={handlingOnSubmit}>
                <label>
                    nama : <input value={result} onInput={changeOnSubmit}/>
                    <button type="submit">submit</button>
                </label>
                <p>data yang di submit : {submit}</p>
            </form>
        </div>
    );
}
 
export default EventHandling;