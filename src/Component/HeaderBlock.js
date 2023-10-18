
import '../Component/Style.css'
import { FaCommentDollar, FaWallet, FaShoppingBag, FaCalculator, FaArrowUp, FaArrowDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
export const HeaderBlock = () => {


    return (
        <div className="container" style={{marginLeft:'0%'}}>
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center">
                        <div className="card-body"  style={{display:'flex',flexDirection:'row',}}>
                            <div style={{ backgroundColor: '#e6fff1' }} className="iconPic">
                                <FaCommentDollar size={70} className='headerIcon' color='#0eb054' /></div>
                            <div className="headerdown">
                                <h1 className="parag">Earning</h1>
                                <h1 className="heder">$198k</h1>
                                <p className="paragph"><span style={{ color: '#0eb054' }}><FaArrowUp />37.8%</span> this
                                    month</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-3">
                    <div className="card text-center">
                        <div className="card-body" style={{display:'flex',flexDirection:'row',}}>
                            <div style={{ backgroundColor: '#e7dbff' }} className="iconPic">
                                <FaCalculator size={55} className='headerIcon' color='#c67fff' /></div>
                            <div className="headerdown">
                                <h1 className="parag">Orders</h1>
                                <h1 className="heder">$2.4k</h1>
                                <p className="paragph"><span style={{ color: 'red' }}><FaArrowDown />2%</span> this
                                    month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center">
                        <div className="card-body" style={{display:'flex',flexDirection:'row',}}>
                            <div style={{ backgroundColor: '#ccf2ff' }} className="iconPic"><FaWallet size={55} className='headerIcon' color='#2c6fc9' /></div>
                            <div className="headerdown">
                                <h1 className="parag">Balance</h1>
                                <h1 className="heder">$2.4k</h1>
                                <p className="paragph"><span style={{ color: 'red' }}><FaArrowDown />2%</span> this
                                    month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center">
                        <div className="card-body" style={{display:'flex',flexDirection:'row',}}>
                            <div style={{ backgroundColor: '#ffb2d9' }} className="iconPic"><FaShoppingBag size={55} className='headerIcon' color='#e54d63' /></div>
                            <div className="headerdown">
                                <h1 className="parag">Total Sales</h1>
                                <h1 className="heder">$89k</h1>
                                <p className="paragph"><span style={{ color: '#0eb054' }}><FaArrowUp />11%</span> this
                                    month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}