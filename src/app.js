console.log("Merhaba Kodalama.io")

let dolardun = 9.20
let dolarbugun = 9.30

{
    let dolardun = 9.10 
}

console.log(dolardun)

const eurodun = 11.2
//eurodun=11 yapamayız const sabit tanımlama yapar

//array
//camelCasing
//PascalCasing:İlk harfleri büyük tanımlama

let konutkredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log(konutkredileri)

console.log("<ul>")
for (let i = 0; i < konutkredileri.length; i++) {
    console.log("<li>"+konutkredileri[i]+"</li>")
    
}
console.log("</ul>")