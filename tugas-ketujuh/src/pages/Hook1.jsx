import { useEffect, useState } from "react";

const Hook1 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return (  
        <div className="">
            <h1>Ini adalah penggunaan useEffect</h1>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))
            }
        </div>

    );
}
 
export default Hook1;