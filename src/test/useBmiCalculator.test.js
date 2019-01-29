import React from 'react'
import { cleanup, testHook } from 'react-testing-library'
import useBmiCalculator from '../custom/useBmiCalculator'

afterEach(cleanup)

describe('useBmiCalulator', () => {
  const weight = {onChange: jest.fn()}
  const height = {onChange: jest.fn()}
  let bmiValue, bmiResult

  const hook = (w, h) => {
    weight['value'] = w
    height['value'] = h
    testHook(() => { return ({bmiValue, bmiResult} = useBmiCalculator(weight, height))})
    return {bmiValue, bmiResult}
  }

  it('calculates underweight', () => {
    let {bmiValue, bmiResult} = hook(50, 180)
    expect(bmiValue).toBe(15)
    expect(bmiResult).toBe('underweight')
  })

  it('calculates average weight', () => {
    let {bmiValue, bmiResult} = hook(60, 180)
    expect(bmiValue).toBe(19)
    expect(bmiResult).toBe('within the average range')
  })

  it('calculates overweight', () => {
    let {bmiValue, bmiResult} = hook(80, 180)
    expect(bmiValue).toBe(25)
    expect(bmiResult).toBe('overweight')
  })
})