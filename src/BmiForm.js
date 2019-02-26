
import React from 'react'
import { Form } from 'react-bootstrap';
import useFormInput from './custom/useFormInput'
import useBmiCalculator from './custom/useBmiCalculator'
import { Container, Row, Col } from 'react-bootstrap'

export default function BmiForm(props) {
  const weight = useFormInput()
  const height = useFormInput()
  const { bmiValue, bmiResult } = useBmiCalculator(weight, height)

  return (
    <Form>
      <Form.Group controlId="height">
        <Form.Label>Your height</Form.Label>
        <Form.Control
          name="height"
          type="text"
          pattern="[0-9]*"
          placeholder="height in centimeters"
          { ...height }
        />
      </Form.Group>
      <Form.Group controlId="weight">
        <Form.Label>Your weight</Form.Label>
        <Form.Control
          name="weight"
          type="text"
          pattern="[0-9]*"
          placeholder="weight in kilos"
          { ...weight }
        />
      </Form.Group>
      <Container>
        <Row>
          <Col>Your BMI:</Col>
          <Col><div className="bmi-value">{ bmiValue }</div></Col>
        </Row>
        <Row>
          <Col>You are:</Col>
          <Col><div className="bmi-conclusion">{ bmiResult }</div></Col>
        </Row>
      </Container>
    </Form>
  )
}
