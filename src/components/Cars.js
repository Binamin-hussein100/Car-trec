import React,{useState,useEffect} from "react";

function Cars(){
    const [cars, setCars] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/cars')
        .then((res)=>res.json())
        .then((data)=>console.log((data)))
        .then((data)=>setCars(data))
    },[])
    return (
        <div>
            <h1>Master</h1>
            <li>
                {cars.forEach((item)=>console.log(item))}
            </li>
        </div>
    )
}

export default Cars
