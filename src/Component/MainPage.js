import { FooterBlock } from "./FooterBlock"
import { HeaderBlock } from "./HeaderBlock"
import { PieCharts } from "./PieCharts"
import { BarGraph } from "./BarGraph"
import { SideBar } from "./SideBar"
import { NameBlock } from "./NameBlock"
import '../Component/Style.css'
// import { FaAngleRight} from "react-icons/fa";

export const MainPage = () => {
    return (
        <div className="container-fluid" style={{ marginLeft: '-22px', backgroundColor: '#f5f6f8' }}>
            <div className="row" style={{ height: "100vh", width: 'auto' }}>
                <div className="col-lg col-md sm-4  sidebar" >
                    <SideBar />
                </div>
                <div className=" rightsidebar" style={{ backgroundColor: '#f5f6f8', marginLeft: '-23px', width: '80%', marginRight: '-25px', }}>
                    <div className="nameblock">
                        <NameBlock />
                    </div>
                    <div className="headerblock ">
                        <HeaderBlock />
                    </div>
                    <div className="container heighss  graphBlock" style={{ width: '100%' }}>
                        <BarGraph />
                        <PieCharts />
                    </div>
                    <div className="footerBlock">
                        <FooterBlock />
                    </div>
                </div>
            </div>
        </div>


    )
}