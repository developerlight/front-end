import Body from "./body";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => {
    return ( 
        <>
            <Navbar />
            <Sidebar>
                <Body />
            </Sidebar>
            <Footer />
        </>
     );
}
 
export default Layout;