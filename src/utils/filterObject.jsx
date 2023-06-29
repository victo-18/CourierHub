/* eslint-disable no-unused-vars */
export function filterObj(objeto) {
    const objetoFiltrado = Object.fromEntries(Object.entries(objeto).filter(([clave, valor]) => (valor !== undefined && valor !== "")));
    return objetoFiltrado;
}