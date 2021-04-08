const alumnos = ["Julio", "Adriana", "Diego", "David", "Edgar", "Daniel", "Paulina"];

module.exports = class Alumnos {

    constructor(nombre) {
        this.nombre = nombre;
    }
    save() {
        alumnos.push(this.nombre);
    }

    static fetchAll() {
        return alumnos;
    }

}