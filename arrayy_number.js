let numbers =[1,2,3,4,5,6,7,8,9,10]

// lista que contem numeros maior que 5
let listaMaior5 = [];

//lista que contem numeros menor ou igaul do que 5
let listaMenor5 = [];

numbers.forEach(function(item) {
    //console.log(item)

    if (item > 5) {
        listaMaior5.push(item)
    } else {
        listaMenor5.push(item)
    }
})

console.log(listaMaior5)
console.log(listaMenor5)
