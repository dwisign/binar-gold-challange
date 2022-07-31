import './blue-cta.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const BlueCta = ({lokasi}) => {
    return(
        <div className="container">
            <div className="blue-cta">
                <h4>Sewa Mobil di {lokasi} Sekarang</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div class="btn-wrap">
                    <Link to={'/archive'}>
                        <Button color="success" to={'/archive'}>Mulai Sewa Mobil</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlueCta