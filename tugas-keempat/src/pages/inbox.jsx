import Card from "../components/Card";
import Layout from "../components/Layout";
import Data from "../data/dataDummy";

const Inbox = () => {
    return ( 
        <>
            <Layout>
                <h1 className="text-3xl">Inbox</h1>
                {
                    Data.map((item, index) => (
                        <Card key={index} title={item.title} content={item.description} link={item.link} />
                    ))
                }
            </Layout>
        </>
     );
}
 
export default Inbox;