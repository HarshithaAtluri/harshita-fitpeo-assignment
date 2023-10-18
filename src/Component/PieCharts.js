
import '../Component/Style.css'


import React from 'react';


export function PieCharts() {
  return (

    <div className="container-fluid piechartbar  ">
      <div className="row col-lg-12">
        <div className="paihead">
          <div style={{ textAlign: 'left', marginTop: '-25px' }}>
            <h1 className="heder">Customers</h1>
            <h1 className="parag">Customers that buy products</h1>
          </div>
          <div className="donut">
            <div className="hole">
              <div className="inholedata">
                <h1 className="heder">65%</h1>
                <h1 className="parag">Total New</h1>
                <h1 className="parag">Customers</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
