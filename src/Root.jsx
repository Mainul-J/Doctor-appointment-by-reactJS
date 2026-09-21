import { Outlet } from "react-router";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const Root = () => {
    return (
        <>
            <Nav></Nav>
            <div className="bg-[#d9dee5]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
        
    );
};

export default Root;