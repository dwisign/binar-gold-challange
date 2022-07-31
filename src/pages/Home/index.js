import TopMenu from '../../component/TopMenu'
import Hero from '../../component/Hero'
import OverView from '../../component/OverView'
import WhyUs from '../../component/WhyUs'
import Testimonial from '../../component/Testimonial'
import Footer from '../../component/Footer'
import {menuList, logo, lokasi, imgCar, imgOverview, serviceList, whyUs, testimoniData} from '../../component/const/staticData'
import BlueCta from '../../component/BlueCta'

const props = {
    menuList,
    logo,
    lokasi,
    imgCar,
    imgOverview,
    serviceList,
    whyUs,
    testimoniData
}


const Home = () => {
    return (
        <div>
            <TopMenu {...props}/>
            <Hero {...props}/>  
            <OverView {...props}/>
            <WhyUs {...props}/>
            <Testimonial {...props}/>
            <BlueCta {...props}/>
            {/* <Footer />  */}
        </div>
    )
}
 
export default Home;