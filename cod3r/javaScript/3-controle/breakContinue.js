const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if(x == 5) {
        break // O break sai do laço corrente que ele suporta (break não suporta if, else, if else)
    }
    console.log(`Índce ${x} = ${nums[x]}`)
}

for(let y in nums) {
    if (y == 5) {
        continue
    }
     console.log(`y = ${nums[y]}`)
}

// NÃO USE -> RÓTULOS: crie um rótulo (ex "externo:") e atribua ao break o rótulo do elemento que você quer associar o break
externo: for(a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Pulou pra fora do for externo')