import './hero.scss'
import imgCar from '../../assets/car.png'

const Hero = ({lokasi}) => {
    return ( 
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left">
                            <h3>Sewa & Rental Mobil Terbaik di kawasan {lokasi}</h3>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right">
                            <img src={imgCar}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blue-element"></div>
        </div>
    )
}
 
export default Hero;