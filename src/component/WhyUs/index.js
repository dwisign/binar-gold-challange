import './why-us.scss'

const  WhyUs = ({whyUs}) => {
    return ( 
        <div className='WhyUs' id="2">
            <div className='container'>
                <h5>Why Us?</h5>
                <p>Mengapa harus pilih Binar Car Rental?</p>
                <div className='row'>
                    {
                        whyUs.map((item) => {
                            return(
                                <div className='col-md-3'>
                                    <div className='card-why-us'>
                                        <img src={item.icon}></img>
                                        <h6>{item.title}</h6>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div> 
    )
}
 
export default WhyUs