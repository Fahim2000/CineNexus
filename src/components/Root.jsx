import { Outlet } from "react-router-dom";
import Header  from "./Header";
import  Footer  from "./Footer";


const Root = () => {
    return (
      <div className="dark:bg-slate-800">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
       
      </div>
    );
};

export default Root;