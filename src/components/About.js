import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate} from "react-router-dom"

function About(){
    let navigate = useNavigate()

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
        navigate("/cars")
        
    }

    return(
        <>
            <Container id="formy" >
                <Row>
                    <Col sm={3}></Col>

                    <Col id="from" sm={3}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Car name:</Form.Label>
                                <Form.Control name="cname"  value={car.cname} placeholder="eg Mazda" type="text" onChange={handleChange}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Model:</Form.Label>
                                <Form.Control name="model"  value={car.model} onChange={handleChange} placeholder="eg Demio" type="text"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Year:</Form.Label>
                                <Form.Control name="modelYear" value={car.modelYear} onChange={handleChange} placeholder="Eg 2014" type="year"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Pic:</Form.Label>
                                <Form.Control name="pic"  value={car.pic} onChange={handleChange} placeholder="Image" type="file"></Form.Control>
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label>Price:</Form.Label>
                                <Form.Control name="price" value={car.price} onChange={handleChange} placeholder="type" type="number"></Form.Control>
                            </Form.Group>            
                          <Button className="btn35" type="submit" variant="outline-dark">Add car</Button>                                           
                            
                        </Form>
                    </Col>

                    <Col sm={3}></Col>
                </Row>
            </Container>
        </>
    )
}

export default About