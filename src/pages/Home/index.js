import TopMenu from '../../component/TopMenu'
import Hero from '../../component/Hero'
import Footer from '../../component/Footer'
import {menuList, logo, lokasi} from '../../component/const/staticData'

const props = {
    menuList,
    logo,
    lokasi
}

const Home = () => {
    return (
        <div>
            <TopMenu {...props}/>
            <Hero {...props}/>  
            {/* <h4>Ini Home Page</h4> */}
            <Footer /> 
        </div>
    )
}
 
export default Home;