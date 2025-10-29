// first task 
const fruites = ['Mango', 'Orange', 'Apple', 'Banana', 'Pepeya']
console.log(fruites.indexOf('Apple'))
console.log(fruites)
fruites[2] = 'Jumbura'
console.log(fruites)

//2nd task

const turestSport = ['Conx Bazar', 'Bandarban', 'Rangamati']
console.log(turestSport)
turestSport.push('Sagek')
console.log(turestSport)
turestSport.push('Chumbuk Pahar', 'Nill Giri')
console.log(turestSport)
turestSport.pop()
console.log(turestSport)

// 3Th task 

const books = ['Bangla', 'English', 'Math', 'JavaScripts', 'Chemistry']
if (books.includes('JavaScripts')) {
    console.log('He is learner')
}
else {
    console.log('He is normal student')
}

// 4th task 

const district = ['Dhaka', 'Rajshahi', 'Naogaon', 'Bogura', 'Joypur hat']

console.log(Array.isArray(district))

const a = true;
console.log(Array.isArray(a))
const b = false;
console.log(Array.isArray(b))
const c = 20;
console.log(Array.isArray(c))
const d = 40;
console.log(Array.isArray(d))
const names = 'Al Amin'
console.log(Array.isArray(names))



// 5th number task 

const sobji = ['Cal', 'dal' , 'pepe', 'alu', 'tometu', 'gajor' , 'borboti']
const mosla = ['kacamori', 'piyaj' , 'rosun' , 'ada', 'tel']

const khicuri = sobji.concat(mosla);

console.log(khicuri)
