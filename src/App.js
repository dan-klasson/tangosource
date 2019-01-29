import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import './App.css';

export default function App(props) {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  function getValue(target) {
    if(target.value.length > 0) {
      return target.validity.valid ? parseFloat(target.value) : ''
    }
    return ''
  }

  function handleHeightChange(e) {
    setHeight(getValue(e.target))
  }

  function handleWeightChange(e) {
    setWeight(getValue(e.target))
  }

  function bmi() {
    if(weight !== '' && height !== '') {
      return Math.round(weight / Math.pow(height / 100, 2))
    }
    return ''
  }


  function bmiConclusion(bmi){
    if (bmi > 0 && bmi <= 18.5) {
      return 'underweight'
    }
    else if (bmi > 18.5 && bmi <= 24.9) {
      return 'within the average range'
    }
    else if (bmi > 24.9 && bmi <= 30) {
      return 'overweight'
    }
    else if (bmi > 30) {
      return 'obese'
    }
    return '';
  }

  return (
    <Form>
      <Form.Group controlId="height">
        <Form.Label>Your height</Form.Label>
        <Form.Control
          name="height"
          type="text"
          pattern="[0-9]*"
          placeholder="height in centimeters"
          value={height}
          onChange={handleHeightChange}
        />
      </Form.Group>
      <Form.Group controlId="weight">
        <Form.Label>Your weight</Form.Label>
        <Form.Control
          name="weight"
          type="text"
          pattern="[0-9]*"
          placeholder="weight in kilos"
          value={weight}
          onChange={handleWeightChange}
        />
      </Form.Group>
      <div className="bmi-value">
        Your BMI: {bmi()}
      </div>
      <div className="bmi-conclusion">
        You are: {bmiConclusion(bmi())}
      </div>
    </Form>
  )
}

