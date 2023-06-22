import Stack from '@mui/material/Stack'
import '@styles/NuevoCliente.css'
import PropTypes from 'prop-types'
import { InputTypes } from '../pages/constant'

function SwitchTypes(props) {
    const { arr, ...other } = props

    return (
        <Stack
            flexDirection='row'
            justifyContent='center'
            flexWrap='wrap'
        >
            {
                arr.map((input) => {
                    const Component = InputTypes[input.type ?? 'default']
                    return (<Component key={input.id} input={input} {...other} rules={input.rules} />)
                })
            }
        </Stack>
    )
}

SwitchTypes.propTypes = {
    arr: PropTypes.array.isRequired
}

export default SwitchTypes;