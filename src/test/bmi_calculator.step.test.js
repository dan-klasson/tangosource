import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { defineFeature, loadFeature } from 'jest-cucumber';

import React from 'react'
import App from '../App'
//import Root from '../index'
import BmiForm from '../BmiForm'
import Login from '../Login'
import Register from '../Register'

//import createRouterContext from 'react-router-test-context'
//import { MemoryRouter as Router } from 'react-router-dom';
//const mountWithRouter = node => mount(<Router>{node}</Router>);

configure({ adapter: new Adapter() })
const feature = loadFeature('./src/test/features/bmi_calculator.feature');

defineFeature(feature, test => {
  test('User calculates their BMI', ({ given, when, then }) => {

    const wrapper = mount(<BmiForm/>)

    given('they fill in their weight and height', () => {

      const height = wrapper.find('input[name="height"]')
      height.instance().value = 180
      height.simulate('change', height)

      const weight = wrapper.find('input[name="weight"]')
      weight.instance().value = 70
      weight.simulate('change', weight)

    })

    then('they are presented with their BMI', () => {

      expect(wrapper.find('.bmi-value').text()).toEqual('22')
      expect(wrapper.find('.bmi-conclusion').text()).toEqual('within the average range')

    })
  })

  test('User logs in', ({ given, when, then }) => {

      
    //const context = createRouterContext()
    //const wrapper = shallow(<Login />, { context })
    //const wrapper = mountWithRouter(<App />);
    //const context = { router: { isActive: (a, b) => true } }
    const wrapper = mount(<Login />)

    given("I'm a registered user", () => {
      const credentials = {username: 'daniel', password: 'password'}
      window.localStorage.setItem('credentials', credentials)
    })

    when('I submit my credentials', () => {
      const username = wrapper.find('input[name="username"]')
      username.instance().value = 'daniel'
      username.simulate('change', username)

      const password = wrapper.find('input[name="password"]')
      password.instance().value = 'password'
      password.simulate('change', password)

      wrapper.find('submit').simulate('click')
    })

    then('I should be logged in', () => {
      const authenticated = window.localStorage.getItem('authenticated')
      expect(authenticated).toEqual(true)
    })
  })
})
