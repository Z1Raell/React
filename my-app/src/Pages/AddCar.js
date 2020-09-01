import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contacts = () => {

    const [carName, setCarName] = useState("");
    const [carManufacturer, setCarManufacturer] = useState("");
    const [carYearOfIssue, setCarYearOfIssue] = useState(0);
    const [carVolume, setCarVolume] = useState(0);
    const [carPrice, setCarPrice] = useState(0);
    const [carColor, setCarColor] = useState("");
    const [carReview, setCarReview] = useState("");


    const car = {
        name: carName,
        manufacturer: carManufacturer,
        yearofissue: carYearOfIssue,
        volume: carVolume,
        price: carPrice,
        Color: carColor,
        review: carReview
    }

    const hadleCarNameCheng = (event) => {
        let text = event.target.value;
        setCarName(text);
    }
    const hadleCarManufacturerCheng = (event) => {
        let text = event.target.value;
        setCarManufacturer(text);
    }
    const hadleCarYearOfIssueCheng = (event) => {
        let text = event.target.value;
        setCarYearOfIssue(text);
    }
    const hadleCarVolumeCheng = (event) => {
        let text = event.target.value;
        setCarVolume(text);
    }
    const hadleCarPriceCheng = (event) => {
        let text = event.target.value;
        setCarPrice(text);
    }
    const hadleCarColorCheng = (event) => {
        let text = event.target.value;
        setCarColor(text);
    }
    const hadleCarReviewCheng = (event) => {
        let text = event.target.value;
        setCarReview(text);
    }

    const handleSubmit = (event) => {
        localStorage.setItem("items",JSON.stringify(car))
        event.preventDefalt();
    }



    return (
        <Container style={{ width: '600px' }}>
            <h1 className="text-center">Add Car</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicCarName">
                    <Form.Label>Name Car</Form.Label>
                    <Form.Control type="text" placeholder="Enter car name" required
                        onChange={hadleCarNameCheng} value={carName} />
                </Form.Group>
                <Form.Group controlId="formBasicCarManufacturer">
                    <Form.Label>Car Manufacturer</Form.Label>
                    <Form.Control type="text" placeholder="Enter car manufacturer" required
                        onChange={hadleCarManufacturerCheng} value={carManufacturer} />
                </Form.Group>
                <Form.Group controlId="formBasicCarYearOfIssue">
                    <Form.Label>Car YearOfIssue</Form.Label>
                    <Form.Control type="number" placeholder="Enter car Year" required
                        onChange={hadleCarYearOfIssueCheng} value={carYearOfIssue} />
                </Form.Group>
                <Form.Group controlId="formBasicCarVolume">
                    <Form.Label>Car volume</Form.Label>
                    <Form.Control type="number" placeholder="Enter car volume" required
                        onChange={hadleCarVolumeCheng} value={carVolume} />
                </Form.Group>
                <Form.Group controlId="formBasicCarPrice">
                    <Form.Label>Car Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter car Price" required
                        onChange={hadleCarPriceCheng} value={carPrice} />
                </Form.Group>
                <Form.Group controlId="formBasicCarColor">
                    <Form.Label>Car Color</Form.Label>
                    <Form.Control type="text" placeholder="Enter car Color" required
                        onChange={hadleCarColorCheng} value={carColor} />
                </Form.Group>
                <Form.Group controlId="formBasicCarReview">
                    <Form.Label>Enter car review</Form.Label>
                    <Form.Control as="textarea" rows="3" required
                        onChange={hadleCarReviewCheng} value={carReview} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

export default Contacts;
