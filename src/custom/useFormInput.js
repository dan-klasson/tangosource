import { useState } from 'react';

export default function useFormInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    if(e.target.value.length > 0 && e.target.validity.valid) {
      setValue(parseFloat(e.target.value).toString())
    } else {
      setValue('')
    }
  }

  return {
    value,
    onChange: handleChange
  }

}
