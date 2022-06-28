import React,{useState,useEffect} from "react";

function Cars(){
    const [cars, setCars] = useState([])

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
            <li>
                {/* {cars.forEach((item)=>{

                })} */}
            </li>
        </div>
    )
}

export default Cars
