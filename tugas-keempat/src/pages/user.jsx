import Card from "../components/Card";
import Layout from "../components/Layout";
import Data from "../data/dataDummy";

const User = () => {
    return ( 
        <>
            <Layout>
                <h1 className="text-3xl">ini adalah user</h1>
                {
                    Data.map((item, index) => (
                        <Card key={index} title={item.title} content={item.description} link={item.link} />
                    ))
                }
            </Layout>
        </>
     );
}
 
export default User;