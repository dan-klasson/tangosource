import { cleanup, testHook } from 'react-testing-library'
import useFormInput from '../custom/useFormInput'

afterEach(cleanup)

describe('useFormInput', () => {
  let value, onChange

  const event = (value = '', valid = true) => {
    return {
      target: {
        value: value,
        validity: {
          valid: valid
        }
      }
    }
  }

  it('handles initial value', () => {
    const initialValue = '10'
    testHook(() => { return ({value, onChange} = useFormInput(initialValue))})
    expect(value).toBe('10')
  })

  it('handles valid input', () => {
    const e = event('20')
    testHook(() => { return ({value, onChange} = useFormInput())})
    onChange(e)
    expect(value).toBe('20')
  })

  it('handles invalid input', () => {
    const e = event('30', false)
    testHook(() => { return ({value, onChange} = useFormInput())})
    onChange(e)
    expect(value).toBe('')
  })

})
