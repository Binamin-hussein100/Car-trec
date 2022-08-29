import React,{useState} from "react";

function About(){
    
    const [car,setCar] = useState({
        cname:"",
        model: "",
        modelYear:0,
        pic:"",
        price:0
    })

    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.name] : e.target.value,   
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://cartrecapi.herokuapp.com/cars',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cname:car.cname,
                model: car.model,
                modelYear: car.modelYear,
                pic: car.pic,
                price: car.price,

            })

        })
    }

    return(
        <div>
            <div id="formy">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="cname"
                            placeholder="name"
                            value={car.cname}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="model"
                            placeholder="Model Name"
                            value={car.model}
                            onChange={handleChange}
                        />
                        <input
                            type="month"
                            name = "modelYear"
                            placeholder="Model Year"
                            value={car.modelYear}
                            onChange={handleChange}
                        />
                        <input
                            type="file"
                            name="pic"
                            placeholder="Include Picture..."
                            value={car.pic}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter Price..."
                            value={car.price}
                            onChange={handleChange}
                        />
                        <button className="ui button" type="submit">
          Add Car
        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default About