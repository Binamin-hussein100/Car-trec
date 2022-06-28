import React,{useState,useEffect} from "react";

function Cars(){
    const [cars, setCars] = useState([])

    console.log("=======",cars)

    useEffect(()=>{
        fetch('https://cartrecapi.herokuapp.com/cars')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setCars(data)})
    },[])
    return (
        <div>
            <h1>Master</h1>
            <ul>
                { cars?.map(car => <li key={car.id}> {car.model }</li>
                )}
            </ul>
        </div>
    )
}

export default Cars