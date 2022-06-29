import React,{useState} from "react";

function About({cars,setCars}){
    
    const [name,setName] = useState("")

    // function submitForm(e){
    //     e.preventDefault()
    //     const formData = {
    //         model:model,
    //     }

    // }

    return(
        <div>
            <div id="formy">
                {/* <form>
                    <label>
                        <input
                        type="text"
                        name="cname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="model"
                            value={model}
                            onChange={(e) => setName(e.target.value)}
                            />
                        <input
                        type="number"
                        name="modelYear"
                        value={modelYear}
                        onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="text"
                            name="pic"
                            value={pic}
                            onChange={(e) => setName(e.target.value)}
                            />
                        
                        <input
                            type="number"
                            name="price"
                            value={price}
                            onChange={(e) => setName(e.target.value)}
                            />
                        
                    </label>
                </form> */}
            </div>
        </div>
    )
}

export default About