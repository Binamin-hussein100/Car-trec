import React,{useState,useEffect} from "react";
import pic1 from "../Premium_Vector___Modern_and_sport_car_illustration-removebg-preview.png"



function Cars({cars,setCars}){

    console.log("=======",cars)

    useEffect(()=>{
        fetch('https://cartrecapi.herokuapp.com/cars')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setCars(data)})
       
    },[cars])

    const handleDeleteCar = (id) => {
        fetch(`https://cartrecapi.herokuapp.com/cars/${id}`,{
            method: 'DELETE',
        })
    }   


    return (
        <div id="display2">
            <ul id="listyy">
                { cars?.map(car => (
                <li key={car.id}> 
                    <div id="display">
                        <div className="danger">
                            <img src={pic1} alt="car"/>
                            
                        </div>
                        <div className="danger">
                            <h3>CAR MODEL : {car.model }</h3>
                            <h4>CAR NAME :  {car.cname}</h4>
                            <h4>YEAR :  {car.modelYear}</h4>
                            <h4>PRICE :  {car.price}</h4>

                            <a class="fancy" href="#">
                                <span class="top-key"></span>
                                <span onClick={()=>handleDeleteCar(car.id)} class="text">Buy the Car</span>
                                <span class="bottom-key-1"></span>
                                <span class="bottom-key-2"></span>
                            </a>
                        </div>

                    </div>
                </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Cars