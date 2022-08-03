import './top-menu.scss'
import { Link } from 'react-router-dom'
import { CloseButton } from 'reactstrap'

const  TopMenu = ({menuList, logo, handleSidebar, showSidebar}) => {
    return ( 
        <div className="top-menu">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h5 className="logo"><Link to={'/'}>{logo}</Link></h5>
                    </div>
                    <div className="col-8">
                        <div className='burger-menu'>
                            <span onClick={handleSidebar}>{showSidebar === true ? <CloseButton /> : <h1>=</h1>}</span>
                        </div>
                        <div className={`menu ${showSidebar === true ? 'menu-mobile' : ''}`}>
                            {menuList.map((item) => ( 
                                <div className="list-menu"><a href={item.link}>{item.name}</a></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default TopMenu