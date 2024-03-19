import Card from "./card";

const Body = () => {
    const users = [
        {
            name : 'Samsul Muhyidin',
            nim : '1122102079',
            matkul : 'Backend Developer'

        },
        {
            name : 'Muhyidin',
            nim : '1122102078',
            matkul : 'Frontend Developer'
        },
        {
            name : 'Samsul',
            nim : '1122102077',
            matkul : 'Backend Developer'
        },
        {
            name : 'idin',
            nim : '1122102076',
            matkul : 'Frontend Developer'
        },
        {
            name : 'Muhyi',
            nim : '1122102075',
            matkul : 'Backend Developer'
        }
    ]

    return ( 
       <>
            {
                users.map((user, index) => (
                    <Card key={index} data={user}/>
                ))
            }
       </>
    );
}



export default Body;