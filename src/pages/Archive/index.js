import TopMenu from '../../component/TopMenu'
import Footer from '../../component/Footer'
import {menuList, logo} from '../../component/const/staticData'

const props = {
    menuList,
    logo
}

const Archive = () => {
    return ( 
        <div>
            <TopMenu {...props}/> 
            <h4>Ini Archive</h4>
            <Footer /> 
        </div>
    )
}
 
export default Archive;