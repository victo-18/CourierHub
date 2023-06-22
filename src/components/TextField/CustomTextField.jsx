/* eslint-disable react/jsx-handler-names */
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { textHelperHandler } from './functions'

function CustomTextField({ input, control, rules, sx }) {
  const handleFormat = (e) => {
    const { target: { value } } = e
    if (value === '') { return e }
    e.target.value = value.trim()
    return e
  }

  const handleBlur = (field, e) => {
    field.onChange(handleFormat(e))
  }

  return (
    <Controller
      render={({ field, formState: { errors } }) => (
        <TextField
          label={input.label}
          required={input?.rules?.required}
          error={(errors[input.id] !== undefined)}
          helperText={textHelperHandler(errors, input)}
          value={field.value ?? ''}
          onChange={field.onChange}
          onBlur={(e) => handleBlur(field, e)}
          inputRef={field.ref}
          autoComplete='none'
          sx={{ width: 'calc(50% - 8px)', m: 0.5, mb: 0, ...sx }}
        />
      )}
      name={input.id}
      control={control}
      rules={{ ...rules }}
    />
  )
}

CustomTextField.propTypes = {
  input: PropTypes.object.isRequired,
  control: PropTypes.any,
  rules: PropTypes.object,
  sx: PropTypes.object
}

export default CustomTextField
