
export default function useBmiCalculator(w, h) {
  const { value: weight } = w
  const { value: height } = h

  function bmiValue(weight, height) {
    if(weight !== '' && height !== '') {
      return Math.round(weight / Math.pow(height / 100, 2))
    }
    return ''
  }

  function bmiResult(bmi){
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

  return {
    bmiValue: bmiValue(weight, height),
    bmiResult: bmiResult(bmiValue(weight, height))
  }

}