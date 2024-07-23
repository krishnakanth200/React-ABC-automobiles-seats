import React, { useEffect, useState } from "react";
import axios from 'axios';
import AddVehicle from "./addVehicals";
import { useNavigate } from 'react-router-dom';

function Vehicles() {
    const [vehicles,setVehicles] = useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetchVehicles();
    },[])

    function fetchVehicles(){
        axios.get('http://localhost:500/Vechicals')
        .then(response=>{
            setVehicles(response.data);
        })
        .catch(error=>{
            console.log("Error occured when fetching the vehicles",error);
        })
    }
    function deleteVehicle(id) {
        axios.delete(`http://localhost:500/Vechicals/${id}`)
            .then(() => {
                fetchVehicles();
            })
            .catch(error => {
                console.log("Error occurred when deleting the vehicle", error);
            });
    }
    

    return(
            <div className="container" style={{"fontFamily":"Cambria", "fontSize":15}}>
                <AddVehicle/>
                <h1 style={{"marginTop":50, "fontWeight":600, "textAlign":"center"}}>Vehicles</h1><br/>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {vehicles.map(vehicle=>(
                            <div className="col">
                            <div className="card shadow-sm">
                                <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name}/>
                                <div className="card-body" >
                                    <p className="card-text"><b>Name: </b>{vehicle.name}</p><hr/>
                                    <p className="card-text"><b>Color: </b>{vehicle.color}</p><hr/>
                                    <p className="card-text"><b>Mileage: </b>{vehicle.mileage}</p><hr/>
                                    <p className="card-text"><b>Seats: </b>{vehicle.seats}</p><hr/>
                                    <p className="card-text"><b>Fuel Type: </b>{vehicle.fuel}</p><hr/>
                                    <p className="card-text"><b>Transmission Type: </b>{vehicle.gear}</p><hr/>
                                    <p className="card-text"><b>Description: </b>{vehicle.description}</p><hr/>
                                    <p className="card-text"><b>Price: </b>Rs.{vehicle.price}</p>
                                    <button className="btn btn-primary" onClick={() => navigate(`/updatevehicle/${vehicle.id}`)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => {deleteVehicle(vehicle.id)}} style={{"float":"right"}}>Delete</button>
                                </div>
                            </div>
                            </div>
                        ))}
                </div>
            </div>
    )

}

export default Vehicles;
