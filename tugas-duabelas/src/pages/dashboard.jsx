import { Button } from "flowbite-react";
import Table from "../components/table";
import LayoutDashboard from "../layouts/layoutDashboard";
import Component from "../components/modal";
import { useState } from "react";

const Dashboard = () => {
    const [openModal, setOpenModal] = useState(false);
    
    return (  
        <>
            <LayoutDashboard>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
                <Button color="blue" onClick={() => setOpenModal(true)}>Tambah data</Button>
                <Table />
                <Component openModal={openModal} setOpenModal={setOpenModal} title={"Tambah data"}/>
            </LayoutDashboard>
        </>
    );
}
 
export default Dashboard;