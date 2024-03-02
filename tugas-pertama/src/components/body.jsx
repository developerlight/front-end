const user = {
    name : 'Samsul Muhyidin',
    nim : '1122102079',
    matkul : 'Frontend Developer'
}


const Body = () => {
    return ( 
        <div>
            <h1>Biodata</h1>
            <p>nama : {user.name}</p>
            <p>nim : {user.nim}</p>
            <p>matkul : {user.matkul}</p>
            <Button />
        </div>
     );
}

const Button = () => {
    return (
        <button style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            margin: '0 5px'
        }}
        >Click me
        </button>
    )
}
export default Body;