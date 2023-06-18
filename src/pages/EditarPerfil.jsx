import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import '@styles/NuevoCliente.css'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addSnackbar } from '../hooks/redux/actions/snackbarActions'
import { CreateFields, InputTypes } from './constant'
import { useRef } from 'react'
import { useFetchData } from '../hooks/consumer'
import { API_Profile, API_UpdateProfile } from '../hooks/request'
import { Backdrop, CircularProgress } from '@mui/material'
import { filterObj } from '../utils/filterObject'

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

function EditarPerfil() {
  const [user, userLoading] = useFetchData(API_Profile);

  return (userLoading ?
    <Backdrop open>
      <CircularProgress />
    </Backdrop>
    : <Dialogo userdata={user} />
  )
}

function Dialogo({ userdata }) {
  const navigate = useNavigate()
  const { handleSubmit, control, watch } = useForm({ defaultValues: { ...userdata } })
  const watchRef = useRef(watch);
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    console.log(data)
    console.log(filterObj(data));
    const { status, response } = await API_UpdateProfile(data)
    if (status === 200) {
      dispatch(addSnackbar('¡Cliente añadido correctamente!', 'success'))
      handleBack()
    } else {
      dispatch(addSnackbar(response?.data ?? 'NO se ha podido añadir el cliente', 'warning'))
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Dialog open fullWidth maxWidth='lg'>
      <DialogTitle>
        Editar perfil
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SwitchTypes arr={CreateFields.persona} control={control} watchRef={watchRef} />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleBack}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Dialogo.propTypes = {
  userdata: PropTypes.any
}

export default EditarPerfil
