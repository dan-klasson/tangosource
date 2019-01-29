
//import { configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//configure({ adapter: new Adapter() })

import App from '../App'
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./features/bmi_calculator.feature');

defineFeature(feature, test => {
  test('User calculates their BMI', ({ given, when, then }) => {

    given('the user is logged in', function () {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    })

    when('they fill in their weight and height', function () {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    })

    then('they are presented with their BMI', function () {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    })



//import { shallow } from 'enzyme';

//const assert = require('assert')
//const { Given, When, Then } = require('cucumber')


