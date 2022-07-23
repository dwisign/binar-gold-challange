import './top-menu.scss'

const  TopMenu = ({menuList, logo}) => {
    return ( 
        <div className="top-menu">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="logo">{logo}</h5>
                    </div>
                    <div className="col-md-8">
                        <div className="menu">
                            {menuList.map((item) => ( 
                                <div className="list-menu"><a href="#">{item}</a></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default TopMenu