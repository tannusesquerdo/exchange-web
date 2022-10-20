import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useQueryClient} from '@tanstack/react-query';

import SelectFlagDropdown from './SelectFlagDropdown';
import ExchangeRateTotal from './ExchangeRateTotal';

const ExchangeRate = ({ from, to, setFrom, setTo }) => {
  const [ammount, setAmmount] = React.useState(1000);
  const queryClient = useQueryClient();
  const { rates } = queryClient.getQueryData(['rates']);

  return (
    <>
      <Card.Header className='text-center calculated-ammount'>
        <ExchangeRateTotal ammount={ammount} rate={rates[to]} to={to} from={from} />
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Form>
          <Row className="mb-3">
            <Form.Group className="mb-3">
              <Form.Label>Ammout</Form.Label>
              <Form.Control data-testid="input-ammount" type="number" inputMode='decimal' autoComplete='off' placeholder="1000" value={ammount} onChange={(e) => setAmmount(e.target.value)} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>From</Form.Label>
              <SelectFlagDropdown selected={from} onSelect={setFrom} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>To</Form.Label>
              <SelectFlagDropdown selected={to} onSelect={setTo} />
            </Form.Group>
          </Row>
        </Form>
      </Card.Body>
    </>
  )
}

export default ExchangeRate