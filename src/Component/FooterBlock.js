
import '../Component/Style.css'
import { FaSearch, FaAngleDown } from "react-icons/fa";

export const FooterBlock = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="graphBlock ">
                        <div className='hearderbaricon'>
                            <h1 className="heder">Product Sell</h1>
                        </div>
                        <div className="d-flex">
                            <div style={{ backgroundColor: '#f1effc', height: '30px', marginRight: '5px', paddingRight: '5px', borderRadius: '10px', paddingLeft: '5px', paddingTop: '2px', marginTop: '30px' }}>
                                <FaSearch />
                                <input placeholder="Search" style={{ width: '70px', borderStyle: 'none' }} />
                            </div>
                            <div style={{ backgroundColor: '#f1effc', height: '30px', borderRadius: '10px', paddingRight: '5px', paddingLeft: '5px', paddingTop: '2px', marginTop: '30px' }}>
                                <input placeholder="Last 30 days" style={{ width: '70px', borderStyle: 'none' }} />
                                <FaAngleDown />
                            </div>
                        </div>
                    </div>
                    <div className="graphBlock stock3">
                        <div>
                            <p className='parag'>Product Name</p>
                        </div>
                        <div className="graphBlock stock">
                            <p className="paragph adj">Stock</p>
                            <p className="parag adj">Price</p>
                            <p className="parag adj">Total Sales</p>
                        </div>
                    </div>
                    <hr />
                    <div className="graphBlock stock3">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" alt="avatar" className="img-fluid image" />
                            </div>
                            <div className="col-md-8">
                                <h1 className="heder sh">Abstract 3D</h1>
                                <p className="parag ph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="graphBlock stock">
                            <p className="paragph adj">32 in stock</p>
                            <p className="heder adj">$ 45.99</p>
                            <p className="parag adj">20</p>
                        </div>
                    </div>
                    <div className="graphBlock stock3">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" alt="avatar" className="img-fluid image" />
                            </div>
                            <div className="col-md-8">
                                <h1 className="heder sh">Abstract 3D</h1>
                                <p className="parag ph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="graphBlock stock">
                            <p className="paragph adj">32 in stock</p>
                            <p className="heder adj">$ 45.99</p>
                            <p className="parag adj">20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}