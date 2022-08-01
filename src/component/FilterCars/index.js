import { FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom'
import './filter-cars.scss'

const filterCars = ({handleChangeName, handleSearch, data, notFound}) => {
    return (
        <div>
            <div className="filter-cars">
                <b><h5>Pencarianmu</h5></b><br></br>
                <div className="filter-forms">
                    <FormGroup>
                        <Label for="namaMobil">
                            Nama Mobil
                        </Label>
                        <Input
                        onChange={(e) => handleChangeName (e)}
                        id="namaMobil"
                        name="namaMobil"
                        placeholder="Nama mobil"
                        type="text"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="kategori">
                            Kategori
                        </Label>
                        <Input
                        id="kategori"
                        name="kategori"
                        placeholder="Kategori"
                        type="text"
                        disabled
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="harga">
                            Harga
                        </Label>
                        <Input
                        id="harga"
                        name="harga"
                        placeholder="Harga"
                        type="text"
                        disabled
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect">
                            Status
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            disabled
                        >
                            <option>True</option>
                            <option>False</option>
                        </Input>
                    </FormGroup>

                    <Button color="success" onClick={handleSearch}>Search</Button>
                </div>   
            </div>

            <div className="car-list">
                {
                    !!notFound && (
                        <Alert color="danger">
                            Mobil tidak ditemukan
                        </Alert>
                    )
                }
                <div className="row">
                    {!!data.length && //kalau data length true (lebih dari nol) maka
                        data.map((item) => (
                            <div className="col-md-4">
                                <div className='car-item'>
                                    <div className='car-image'>
                                        <img src={item.image} className="img-fluid"/>
                                    </div>
                                    <div className='car-description'>
                                        <h5>{item.name}</h5>
                                        <p>{item.price} / Hari</p>
                                    </div>
                                    <Link to={`/single/${item.id}`}>
                                        <div className="d-grid">
                                            <Button color="success" className='btn-block'>Pilih Mobil</Button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default filterCars
