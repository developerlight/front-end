import Navbar from "../components/navbar";

const LayoutDashboard = ({ children }) => {
    return (  
        <>  
            <Navbar />
            <div className="container">
                { children }
            </div>
        </>
    );
}
 
export default LayoutDashboard;