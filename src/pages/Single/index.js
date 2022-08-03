import axios from 'axios'
import { useEffect,useState } from 'react'
import TopMenu from '../../component/TopMenu'
import Footer from '../../component/Footer'
import {menuList, logo, address, email, phone, socialConnect} from '../../component/const/staticData'
import { useParams, Link } from "react-router-dom";
import { Button, Alert } from 'reactstrap'


import './single.scss'


const Single = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    console.log(id)

    const [showSidebar, setShowSidebar] = useState(false)
    const handleSidebar = () =>{
        setShowSidebar(!showSidebar)
    }

    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    },[])

    const props = {
        menuList,
        logo,
        address,
        email,
        phone,
        socialConnect,
        showSidebar,
        handleSidebar
    }


    //console.log(data)

    return ( 
        <div>
            <TopMenu {...props}/>
            {
                !!Object.keys(data).length && (
                    <div className='car-detail'>
                        <div className='title-bar'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-9'>
                                        <h5>Paket Sewa {data.name}</h5>
                                    </div>
                                    <div className='col-3'>
                                        <div className='btn-wrap'>
                                            <Link to={'/archive'}>
                                                <Button color="success" to={'/archive'} size="sm">&laquo; Back</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className='row'>
                                <div className='col-md-7'>
                                    <div className='left'>
                                        <h5>Terms</h5><hr></hr>
                                        <p><b>Include</b></p>
                                        <ul>
                                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                            <li>Sudah termasuk bensin selama 12 jam</li>
                                            <li>Sudah termasuk Tiket Wisata</li>
                                            <li>Sudah termasuk pajak</li>
                                        </ul>
                                        <p><b>Exclude</b></p>
                                        <ul>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                        </ul>
                                        <p><b>Refund, Reschedule, Overtime</b></p>
                                        <ul>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className='right'>
                                        <div className='car-image'>
                                            <img src={data.image} />
                                        </div>
                                        <div className='car-description'>
                                            <h5>{data.name}</h5><hr></hr>
                                            <p>
                                                <b>Kategori:</b> {data.category}<br></br><hr></hr>
                                            </p>
                                            <Alert color="info">
                                                <b>Total:</b> {data.price} / Hari
                                            </Alert>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <Footer {...props}/> 
        </div>
    )
}
 
export default Single;