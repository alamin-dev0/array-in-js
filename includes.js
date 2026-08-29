const friends = ['Abul', 'babul', 'cabul', 'dabul', 'bulbul', 'gelam', 'pelam', 'khailam']
console.log(friends.includes('Abul'))

const fd = ['Abul', 'babul', 'cabul', 'dabul', 'bulbul', 'gelam', 'pelam', 'khailam']
console.log(fd)
const alamin= 'Al Amin'
console.log(fd)
fd.unshift(alamin)
console.log(fd)
const ddk = fd.includes('Al Amin')
console.log(ddk)
if (fd.includes(alamin)){
    console.log('We will be party')
}
else{
    console.log()
}