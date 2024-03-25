async function obtenerImagenes() {

    try {
        const response = await fetch('animales.json')
        const data = await response.json()
        return data.imagenes

    } catch (error) {
        console.error('upss se ha producido un error intente nuevamente', error)

    }
}
export { obtenerImagenes }