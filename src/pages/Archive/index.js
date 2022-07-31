import axios from 'axios'
import { useEffect,useState } from 'react'
import TopMenu from '../../component/TopMenu'
import Hero from '../../component/Hero'
import Footer from '../../component/Footer'
import FilterCars from '../../component/FilterCars'
import {menuList, logo, imgCar} from '../../component/const/staticData'


import './archive.scss'

const Archive = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [fdata,setFdata] = useState([])
    const [notFound, setNotFound] = useState(false)

    const props = {
        menuList,
        logo,
        imgCar
    }
    
    useEffect(() => {
        axios
        .get('https://bootcamp-rent-car.herokuapp.com/admin/car')
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    },[])
    
    const handleChangeName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)

        if(!e.target.value.length){
            setFdata([])
            setNotFound(false)
        }
    }

    const handleSearch = () => {
        let newArr = data.filter(data => data.name === name)
        setFdata(newArr)

        if(!newArr.length){
            setNotFound(true)
        }
    }

    const propsSearch = {
        handleChangeName,
        handleSearch,
        notFound
    }

    console.log(data)
    console.log('ini fdata', fdata)
    //console.log('ini name', name)
    
    return ( 
        <div>
            <TopMenu {...props}/>
            <Hero {...props}/> 
            <div className="container">
                <FilterCars data={!fdata.length ? data : fdata} {...propsSearch}/>
            </div>
            {/* <Footer />  */}
        </div>
    )
}
 
export default Archive;