function textHelperHandler (error, input) {
  const { id } = input
  if (error[id] === undefined) { return " " }

  const { type } = error[id]

  switch (type) {
    case "required":
      return input?.helpers?.[type] ?? "Completa este campo"
    case "pattern":
      return input?.helpers?.[type] ?? "Por favor, revisa este campo"
    default:
      break
  }
}

export { textHelperHandler }
