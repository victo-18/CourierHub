import { Backdrop, CircularProgress } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import '@styles/NuevoCliente.css'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SwitchTypes from '../components/SwitchTypes'
import { useFetchData } from '../hooks/consumer'
import { addSnackbar } from '../hooks/redux/actions/snackbarActions'
import { API_Profile, API_UpdateProfile } from '../hooks/request'
import { filterObj } from '../utils/filterObject'
import { CreateFields } from './constant'

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
    const { status, response } = await API_UpdateProfile(filterObj(data))
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
