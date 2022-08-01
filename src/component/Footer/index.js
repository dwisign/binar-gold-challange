import './footer.scss'

const  Footer = ({address, email, phone, menuList, socialConnect}) => {
    return ( 
        <div className="footer">
            <div className='container'>
                <div className='row'>
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
                </div>
            </div>
        </div>
    )
}
 
export default Footer