import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import React from 'react'
import App from '../App'
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./features/bmi_calculator.feature');

defineFeature(feature, test => {
  test('User calculates their BMI', ({ given, when, then }) => {

    // shallow not yet supported
    // https://github.com/facebook/react/issues/14091
    const wrapper = mount(<App />)

    given('the user is logged in', () => {

    })

    when('they fill in their weight and height', () => {

      const height = wrapper.find('input[name="height"]')
      height.instance().value = 180
      height.simulate('change', height)

      const weight = wrapper.find('input[name="weight"]')
      weight.instance().value = 70
      weight.simulate('change', weight)

    })

    then('they are presented with their BMI', () => {

      expect(wrapper.find('.bmi-value').text()).toEqual('Your BMI: 22')
      expect(wrapper.find('.bmi-conclusion').text()).toEqual('You are: within the average range')

    })
  })
})
