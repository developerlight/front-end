const Card = ({ data }) => {
    console.log(data);
    return ( 
        <div 
            style={{
                backgroundColor: 'lightblue',
                padding: '5px',
                borderRadius: '5px',
                margin: '10px',
                color: 'black'
            }}
        >
            <h1>Biodata</h1>
            <p>nama : {data.name}</p>
            <p>nim : {data.nim}</p>
            <p>matkul : {data.matkul}</p>
            <Button kondisi={data.matkul}/>
        </div>
     );
}

const Button = ({kondisi}) => {
    return (
        <button style={{
            backgroundColor: kondisi === 'Backend Developer' ? 'red': 'blue',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            margin: '0 5px'
        }}
        >Click me
        </button>
    )
}

export default Card;