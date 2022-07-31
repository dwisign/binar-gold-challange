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
                        >
                            <option>True</option>
                            <option>False</option>
                        </Input>
                    </FormGroup>

                    <Button color="success" onClick={handleSearch}>Search</Button>
                </div>   
            </div>

            <div className="cars-list">
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
                                <div>
                                    <img src={item.image} className="img-fluid"/>
                                </div>
                                <div>
                                    <h1>{item.name}</h1>
                                    <p>{item.price}</p>
                                </div>
                                <Link to={`/single/${item.id}`}>
                                    <Button color="success">Pilih Mobil</Button>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default filterCars
