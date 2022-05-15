const names: string[] = [];

names.push('A')
names.push('B')
names.push('C')
names.push('D')

names.forEach((name)=>{
    console.log(name)
})

console.log('************')
// for - é um loop - controle de repeticao
for(let i = 0; i<names.length; i++){
    console.log(names[i])
}


console.log('************')
// for - é um loop - controle de repeticao
for(let j = 2; j<names.length; j++){
    console.log(names[j])
}