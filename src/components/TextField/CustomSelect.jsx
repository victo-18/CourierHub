/* eslint-disable react/jsx-handler-names */
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Skeleton from '@mui/material/Skeleton'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { useFetchData } from '../../hooks/consumer'
import { SelectValidator } from './validators'
import { endpoints } from '../../hooks/endpoints'

function CustomSelect({ input, control, rules, watchRef }) {
  if (input.dependsOn)
    if (watchRef.current(input.dependsOn))
      return (<MySelect {...{ input, control, rules, dependencyValue: watchRef.current(input.dependsOn) }} />)
    else
      return (
        <FormControl disabled sx={{ width: 'calc(50% - 8px)', m: 0.5, ...input?.sx }}>
          <InputLabel>{input.label}</InputLabel>
          <Select
            required={input?.rules?.required}
            value=''
            label={input?.label}
          >
            <MenuItem disabled>Cargando...</MenuItem>
          </Select>
          <FormHelperText>{' '}</FormHelperText>
        </FormControl>
      )
  else
    return (<MySelect {...{ input, control, rules, watchRef }} />
    )
}

function MySelect({ input, control, rules, dependencyValue }) {
  const consumer = dependencyValue ? () => endpoints[input.id](dependencyValue) : endpoints[input.id]
  const dependencyArr = dependencyValue ? [dependencyValue] : [];

  const [options, optionsLoading] = useFetchData(consumer, dependencyArr)

  const label = input.label + (rules.required ? ' *' : '')

  return (
    optionsLoading
      ? <Skeleton sx={{ width: 'calc(50% - 8px)', height: 56, m: 0.5, ...input?.sx }} />
      : <Controller
        render={({ field }) => (
          <FormControl sx={{ width: 'calc(50% - 8px)', m: 0.5, ...input?.sx }}>
            <InputLabel>{label}</InputLabel>
            <Select
              required={input?.rules?.required}
              value={field?.value ?? ''}
              label={label}
              onChange={field.onChange}
            >
              {
                optionsLoading
                  ? <MenuItem disabled>Cargando...</MenuItem>
                  : options?.map((o) => (
                    <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
                  ))
              }
            </Select>
            <FormHelperText>{' '}</FormHelperText>
          </FormControl>
        )}
        name={input.id}
        control={control}
        rules={{ ...rules, validate: SelectValidator }}
      />
  )
}

MySelect.propTypes = {
  input: PropTypes.object.isRequired,
  control: PropTypes.any,
  rules: PropTypes.object,
  dependencyValue: PropTypes.any
}

CustomSelect.propTypes = {
  input: PropTypes.object.isRequired,
  control: PropTypes.any,
  rules: PropTypes.object,
  watchRef: PropTypes.any
}

export default CustomSelect
