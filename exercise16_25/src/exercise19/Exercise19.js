import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimalCard from './AnimalCard';
import animalsData from './Animals';

const Exercise19 = () => {
    const showAdditionalData = (additional) => {
        const responseString = Object.entries(additional)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

        alert(responseString);
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5 fw-bold">Animals</h1>
            <Row xs={1} md={3} className="g-4">
                {animalsData.map((animal, index) => (
                    <Col key={index}>
                        <AnimalCard
                            name={animal.name}
                            scientificName={animal.scientificName}
                            size={animal.size}
                            diet={animal.diet}
                            additional={animal.additional}
                            showAdditional={showAdditionalData}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Exercise19
