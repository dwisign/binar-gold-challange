import {useState} from "react"
import TopMenu from '../../component/TopMenu'
import Hero from '../../component/Hero'
import OverView from '../../component/OverView'
import WhyUs from '../../component/WhyUs'
import Testimonial from '../../component/Testimonial'
import BlueCta from '../../component/BlueCta'
import Faq from '../../component/Faq'
import Footer from '../../component/Footer'
import {
    menuList, 
    logo, 
    lokasi, 
    imgCar, 
    imgOverview, 
    serviceList, 
    whyUs, 
    testimoniData, 
    faqData, 
    address, 
    email, 
    phone,
    socialConnect
} from '../../component/const/staticData'

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const handleSidebar = () =>{
        setShowSidebar(!showSidebar)
    }

    const props = {
        menuList,
        logo,
        lokasi,
        imgCar,
        imgOverview,
        serviceList,
        whyUs,
        testimoniData,
        faqData,
        address,
        email,
        phone,
        socialConnect,
        showSidebar,
        handleSidebar
    }

    return (
        <div>
            <TopMenu {...props}/>
            <Hero {...props}/>  
            <OverView {...props}/>
            <WhyUs {...props}/>
            <Testimonial {...props}/>
            <BlueCta {...props}/>
            <Faq {...props}/>
            <Footer {...props}/>
            {/* <Footer />  */}
        </div>
    )
}
 
export default Home;