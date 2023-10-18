
import '../Component/Style.css'
import { FaAngleDown } from "react-icons/fa";



import React from 'react';



export function BarGraph() {

  return (
    <div className="container-fluid mainbargraph">
      <div className="row col-lg-12 col-sm-12 col-md-12">
        <div className="barhead ">
          <div className="graphBlocks">
            <div style={{ textAlign: 'left', marginTop: '-40px' }}>
              <h1 className="heder">Overview</h1>
              <h1 className="parag">Monthly Earning</h1>
            </div>
            <div style={{ backgroundColor: '#fafbff', height: '30px', borderRadius: '10px', paddingLeft: '5px', paddingTop: '2px', marginTop: '-40px' }}>
              <input placeholder="Quartely" style={{ width: '70px', borderStyle: 'none' }} />
              <FaAngleDown style={{ paddingTop: '5px' }} />
            </div>
          </div>
          <div className="graphBlock barblock">
            <div style={{ marginTop: '100px' }}>
              <div className="bar1" style={{ height: '100px' }}></div>
              Jan
            </div>
            <div style={{ marginTop: '70px' }}>
              <div className="bar1" style={{ height: "130px" }}></div>
              Feb
            </div>
            <div style={{ marginTop: '60px' }}>
              <div className="bar1" style={{ height: "140px" }}></div>
              Mar
            </div>
            <div style={{ marginTop: '100px' }}>
              <div className="bar1" style={{ height: "100px" }}></div>
              Apr
            </div>
            <div style={{ marginTop: '155px' }}>
              <div className="bar1" style={{ height: "45px" }}></div>
              May
            </div>
            <div style={{ marginTop: '160px' }}>
              <div className="bar1" style={{ height: "40px" }}></div>
              Jun
            </div>
            <div style={{ marginTop: '125px' }}>
              <div className="bar1" style={{ height: "75px", }}></div>
              Jul
            </div>
            <div style={{ marginTop: '40px' }}>
              <div className="bar1" style={{ height: "160px", backgroundColor: "#6138e9" }} ></div>
              Aug
            </div>
            <div style={{ marginTop: '160px' }}>
              <div className="bar1" style={{ height: "40px" }}></div>
              Sep
            </div>
            <div style={{ marginTop: '120px' }}>
              <div className="bar1" style={{ height: "80px" }}></div>
              Oct
            </div>
            <div style={{ marginTop: '90px' }}>
              <div className="bar1" style={{ height: "110px", }}></div>
              Nov
            </div>
            <div style={{ marginTop: '70px' }}>
              <div className="bar1" style={{ height: "130px", }}></div>
              Dec
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
