class Tenistas {
    constructor (nombre, nacionalidad, ranking, grandSlams, triunfos, derrotas, email, password) {
        this.nombre = nombre
        this.nacionalidad = nacionalidad
        this.ranking = ranking
        this.grandSlams = grandSlams
        this.triunfos = triunfos
        this.derrotas = derrotas
        this.email = email
        this.password = password
    }
}

const formulario = document.getElementById('idFormulario')
const invitados = []


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('exampleInputUser1').value
    let nacionalidad = document.getElementById('exampleInputNationality1').value
    let ranking = document.getElementById('exampleInputRanking1').value
    let grandSlams = document.getElementById('exampleInputSlams1').value
    let triunfos = document.getElementById('exampleInputTriumphs1').value
    let derrotas = document.getElementById('exampleInputDefeats1').value
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value
    const tenistas = new Tenistas(nombre, nacionalidad, ranking, grandSlams, triunfos, derrotas, email, password)
    invitados.push(tenistas)
    console.table(invitados)
    formulario.reset()
})