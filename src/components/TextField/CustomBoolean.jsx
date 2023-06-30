/* eslint-disable react/jsx-handler-names */
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import PropTypes from "prop-types"
import { Controller } from "react-hook-form"
import { SelectValidator } from "./validators"
import useSmall from "../../hooks/breakpoints/useSmall"

function CustomBoolean({ input, control, rules }) {
  const isSmall = useSmall();

  return (
    <Controller
      render={({ field }) => (
        <FormControl sx={{ width: isSmall ? "calc(100% - 8px)" : "calc(50% - 8px)", m: 0.5, ...input?.sx }}>
          <InputLabel>{input.label}</InputLabel>
          <Select
            required={input?.rules?.required}
            value={field?.value ?? ""}
            label={input?.label}
            onChange={field.onChange}
          >
            <MenuItem value>SI</MenuItem>
            <MenuItem value={false}>NO</MenuItem>
          </Select>
          <FormHelperText>{" "}</FormHelperText>
        </FormControl>
      )}
      name={input.id}
      control={control}
      rules={{ ...rules, validate: SelectValidator }}
    />
  )
}

CustomBoolean.propTypes = {
  input: PropTypes.object.isRequired,
  control: PropTypes.any,
  rules: PropTypes.object
}

export default CustomBoolean
