/* eslint-disable react-refresh/only-export-components */
import CustomBoolean from "../components/TextField/CustomBoolean"
import CustomSelect from "../components/TextField/CustomSelect"
import CustomTextField from "../components/TextField/CustomTextField"
import NumericField from "../components/TextField/NumericField"
import { ROLES } from "../hooks/roles/constants"

const defaultHelpers = {
  required: "Este campo es requerido",
  pattern: "Verifica este campo"
}

const homePage = {
  [ROLES.CLIENTE]: "/dashboard",
  [ROLES.MENSAJERO]: "/entregas",
  [ROLES.ADMINISTRADOR]: "/dashboard",
}

const CreateFields = {
  persona: [
    { label: "Telefono", id: "phone", type: "numeric", rules: { required: true, pattern: /^\d+$/ }, helpers: { pattern: "Solo se permiten numeros" } },
    { label: "Nombres", id: "firstname", rules: { required: true, pattern: /^(?=.*[a-zA-Z])\S.*$/ } },
    { label: "Apellidos", id: "lastname", rules: { required: true, pattern: /^(?=.*[a-zA-Z])\S.*$/ } },
    { label: "Direccion", id: "address", rules: { required: true } },
    { label: "Email", id: "email", rules: { required: true, pattern: /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/ } },
    { label: "Nueva contraseña", id: "password", rules: { required: false } },
    { label: "Departamento", id: "stateId", type: "select", rules: { required: true } },
    { label: "Ciudad", id: "cityId", type: "select", dependsOn: "stateId", rules: { required: true } },
  ],
  request: [
    { label: "Descripcion del pedido", id: "description", rules: { required: true } },
    { label: "Origen", id: "origin", rules: { required: true } },
    { label: "Destino", id: "destination", rules: { required: true } },
    { label: "Numero de paquetes", id: "numberPackages", type: "numeric", rules: { required: true, pattern: /^\d+$/ }, helpers: { pattern: "Solo se permiten numeros" } },
    { label: "Tipo de transporte", id: "transportId", type: "select", rules: { required: true } },
  ]
}

const InputTypes = {
  default: CustomTextField,
  select: CustomSelect,
  numeric: NumericField,
  boolean: CustomBoolean
}

export { CreateFields, defaultHelpers, InputTypes, homePage }
