import axios from 'axios'
import { useEffect,useState } from 'react'
import TopMenu from '../../component/TopMenu'
import Footer from '../../component/Footer'
import {menuList, logo, address, email, phone, socialConnect} from '../../component/const/staticData'
import { useParams } from "react-router-dom";


const props = {
    menuList,
    logo,
    address,
    email,
    phone,
    socialConnect
}

const Single = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    console.log(id)

    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    },[])

    //console.log(data)

    return ( 
        <div>
            <TopMenu {...props}/> 
            {
                !!Object.keys(data).length && (
                    <div className="container">
                        <img src={data.image} />
                        <p>ID Mobil: {data.id}</p>
                        <p>Nama Mobil: {data.name}</p>
                        <p>Harga: {data.price}</p>
                    </div>
                )
            }
            <Footer {...props}/> 
        </div>
    )
}
 
export default Single;