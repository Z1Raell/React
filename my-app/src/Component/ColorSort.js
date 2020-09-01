import React, { useState } from 'react';
import { Container, CardDeck, Form, Button, FormControl } from 'react-bootstrap';


const ColorSort = () => {
    const [color, setColor] = useState("");

    let carArrey = JSON.parse(localStorage.getItem('items'));
    let result = carArrey.filter((item) => item.color === { color });
    const handleChenge = (event) => {
        let text = event.target.value;
        setColor(text);
    }
    return (
        <Container>
            <h2 className="text-centre">Car color</h2>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                />
                <Button variant="outline-info" value={color} onChange={handleChenge}>Search</Button>
            </Form>
            <CardDeck>

            </CardDeck>
        </Container>
    );
}

export default ColorSort;
