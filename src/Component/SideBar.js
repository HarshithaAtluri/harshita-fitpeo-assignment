import '../Component/Style.css'
import { FaAngleRight } from "react-icons/fa";
export const SideBar = () => {
  return (

    <div className="container-fluid" >
      <div className="row" style={{ height: '250vh' }}>
        <div className="barmain" style={{ backgroundColor: " #040440", margin: '0%' }}>
          <div>
            <h1 className="sidebar" >Dashboard</h1>
            <div style={{ marginTop: '40px' }}>
              <div className='dashboardline'>
                <p className='paraghp'>Dashboard</p>
                {/* <FaAngleRight />  */}
              </div>
              <div className='dashboardline'>
                <p className='paraghp'>Product</p>
                <FaAngleRight />
              </div>
              <div className='dashboardline'>
                <p className='paraghp'>Customers</p>
                <FaAngleRight />
              </div>
              <div className='dashboardline'>
                <p className='paraghp'>Income</p>
                <FaAngleRight />
              </div>
              <div className='dashboardline'>
                <p className='paraghp'>Promote</p>
                <FaAngleRight />
              </div>
              <div className='dashboardline'>
                <p className='paraghp'>Help</p>
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="barmain" style={{ backgroundColor: " #040440",margin:'0%' }}>
    //       <div>
    //         <h1 className="sidebar" >Dashboard</h1>
    //         <div style={{marginTop:'40px'}}>
    //         <div className='dashboardline'>
    //             <p className='paraghp'>Dashboard</p>
    //             {/* <FaAngleRight />  */}
    //           </div>
    //           <div className='dashboardline'>
    //             <p className='paraghp'>Product</p>
    //             <FaAngleRight /> 
    //           </div>
    //           <div className='dashboardline'>
    //             <p className='paraghp'>Customers</p>
    //             <FaAngleRight /> 
    //           </div>
    //           <div className='dashboardline'>
    //             <p className='paraghp'>Income</p>
    //             <FaAngleRight /> 
    //           </div>
    //           <div className='dashboardline'>
    //             <p className='paraghp'>Promote</p>
    //             <FaAngleRight /> 
    //           </div>
    //           <div className='dashboardline'>
    //             <p className='paraghp'>Help</p>
    //             <FaAngleRight /> 
    //           </div>
    //           {/* <ol className="order">
    //             <li className="parag">Dashboard</li>
    //             <li className="parag" >Product <i className="fa fa-angle-right icon"></i> </li>
    //             <li className="parag">Customers <i className="fa fa-angle-right" style={{ marginLeft: "44px" }}></i></li>
    //             <li className="parag">Income <i className="fa fa-angle-right" style={{ marginLeft: "45px" }}></i> </li>
    //             <li className="parag">Promote <i className="fa fa-angle-right" style={{ marginLeft: "42px" }}></i></li>
    //             <li className="parag">Help <i className="fa fa-angle-right"></i></li>
    //           </ol> */}
    //         </div>
    //       </div>
    //     </div>


  )
}