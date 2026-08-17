import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table, Button } from 'react-bootstrap';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional
}) {
  return (
    <Card className="shadow h-100 border-warning bg-warning bg-opacity-10">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-danger fw-bold fs-2 mb-3">{name}</Card.Title>
        
        <Table bordered className="bg-white mb-4">
          <tbody>
            <tr>
              <td><strong>Scientific Name:</strong> {scientificName}</td>
            </tr>
            <tr>
              <td><strong>Size:</strong> {size} kg</td>
            </tr>
            <tr>
              <td><strong>Diet:</strong> {diet.join(', ')}</td>
            </tr>
          </tbody>
        </Table>

        <div className="mt-auto text-center">
          <Button 
            variant="danger" 
            className="px-4 py-2"
            onClick={() => showAdditional(additional)}
          >
            More Info
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

// Định nghĩa PropTypes cho component
AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

// Định nghĩa defaultProps để tránh lỗi khi prop 'additional' bị thiếu (undefined)[cite: 4]
AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
    link: 'No Additional Information'
  }
};