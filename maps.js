let nomes = ['Larissa', 'Alessandro', 'Manu', 'Georgia']

let georgia = nomes.map(nome => {
    if(nome === 'Georgia') {
        return nome.toUpperCase()
    }})
//console.log(georgia)

let georgiaArray = nomes.filter((nome, index) => nome === 'Georgia' ).map(i => i.toUpperCase())
console.log(georgiaArray)

// let nomesMaiusculos = nomes.map(nome => nome.toUpperCase())
// console.log(nomes, nomesMaiusculos)
