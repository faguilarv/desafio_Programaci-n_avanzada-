class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre
        this.edad = edad
        this.img = img
        this.comentarios = comentarios
        this.sonido = sonido
    }

    getNombre() {
        return this.nombre
    }
    getEdad() {
        return this.edad
    }
    getImg() {
        return this.img
    }
    setComentarios() {
        this.comentarios = comentarios
    }
    getSonido() {
        return this.sonido
    }

}
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    rugir() {
        //aqui se debiera reproducir el audio rugir del León
    }
}
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    aullar() {
        //aqui se debiera reproducir el audio aullar del lobo
    }
}
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    gruñir() {

    }
}
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    sisear() {

    }
}
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    chillar() {

    }
}
export { Animal, Leon, Lobo, Oso, Serpiente, Aguila }