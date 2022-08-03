import './overview.scss'

const OverView = ({imgOverview, serviceList, iconCheck, lokasi}) => {
    return (
        <div className="overview" id="1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left">
                            <img src={imgOverview}></img>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right">
                            <h5>Best Car Rental for any kind of trip in !</h5>
                            <p>Sewa mobil di {lokasi} bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <ul className="service-list">
                                    {
                                        serviceList.map((item) => {
                                            return <li><img src={iconCheck} ></img> {item}</li>
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView