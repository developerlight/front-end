import SideBar from "./Sidebar";

const Layout = ({children}) => {
    return ( 
        <SideBar>
            {children}
        </SideBar>
     );
}
 
export default Layout;