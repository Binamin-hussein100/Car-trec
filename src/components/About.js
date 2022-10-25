import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <>
            <Container id="formy" >
                <Row>
                    <Col sm={3}></Col>

                    <Col sm={3}>
                        <Form>
                            <Form.Label>Car name:</Form.Label>
                            <Form.Control placeholder="type" type="text"></Form.Control>
                        </Form>
                        <Form>
                            <Form.Label>Car name:</Form.Label>
                            <Form.Control placeholder="type" type="text"></Form.Control>
                        </Form>
                        <Form>
                            <Form.Label>Car name:</Form.Label>
                            <Form.Control placeholder="type" type="text"></Form.Control>
                        </Form>
                        <Form>
                            <Form.Label>Car name:</Form.Label>
                            <Form.Control placeholder="type" type="text"></Form.Control>
                        </Form>
                        <Form>
                            <Form.Label>Car name:</Form.Label>
                            <Form.Control placeholder="type" type="text"></Form.Control>
                        </Form>
                    </Col>

                    <Col sm={3}></Col>
                </Row>
            </Container>
        </>
    )
}

export default About