let num = [5, 8, 2, 9, 3]

num.sort()
num.push(1)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)

//laço para imprimir array
for (i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// forma simplificada  i == pos

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}