import './footer.scss'

const  Footer = ({logo,address, email, phone, menuList, socialConnect}) => {
    return ( 
        <div className="footer">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='footer-logo'>
                            <h4>{logo}</h4>
                            <p className='small'>Copyright Momain 2022</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='footer-link'>
                            <p><b>Information</b></p>
                            {
                                menuList.map((item) => {
                                    return(
                                        <a href={item.link}>{item.name}</a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <p>
                            <b>Address :</b> <br></br>
                            {address}
                            <br></br><br></br>
                            {email}<br></br>
                            {phone}
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <div className='social-connect'>
                            <p><b>Connect With Us</b></p>
                            <div className='item-connect'>
                                {
                                    socialConnect.map((item) => {
                                        return(
                                            <a href={item.link}><img src={item.icon}></img></a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Footer