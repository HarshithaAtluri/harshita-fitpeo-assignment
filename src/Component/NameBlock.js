
import '../Component/Style.css'
import { FaSearch } from "react-icons/fa";


export const NameBlock = () => {
    return(

<div className="graphBlock ">
   <div className='d-flex flex-row'>
    <h1 className='heder headtext'>Hello Harshitha</h1>
    <span style={{fontSize:'30px',marginLeft:'5px'}}>&#128075;,</span>
   </div>
<div className="d-flex">
    <div style={{ backgroundColor: '#f1effc', height: '30px', marginRight: '5px', paddingRight: '5px', borderRadius: '10px', paddingLeft: '5px', paddingTop: '2px', marginTop: '30px' }}>
        <FaSearch />
        <input placeholder="Search" style={{ width: '70px', borderStyle: 'none' }} />
    </div>
</div>
</div>
    )
}