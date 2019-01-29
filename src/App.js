import React from 'react'
import { Form } from 'react-bootstrap';
import useFormInput from './custom/useFormInput'
import useBmiCalculator from './custom/useBmiCalculator'
import './App.css';

export default function App(props) {
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
      <div className="bmi-value">
        Your BMI: { bmiValue }
      </div>
      <div className="bmi-conclusion">
        You are: { bmiResult }
      </div>
    </Form>
  )
}
