let nomes = ['Larissa', 'Alessandro', 'Manu', 'Georgia']

//let dados =[false, {text: 'oi'}, 36, 45, 23, 20, false, 't']

let numeros =[36, 45, 23, 20]

numeros.forEach(function(i, index, array) {
    console.log(i)
    //console.log(array[index])
    //console.log(i, index, array)
})





//Passa o argumento como resposta da função
nomes.forEach(function(i) {
    //console.log(i)
})


numeros.forEach(function(i, index, array) {
    console.log(i)
})
numeros.forEach((i, index, array)=> console.log(i * 30))
console.log(numeros)

