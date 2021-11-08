//console.log("Merhaba Kodalama.io")

let dolardun = 9.20
let dolarbugun = 9.30

{
    let dolardun = 9.10 
}

//console.log(dolardun)

const eurodun = 11.2
//eurodun=11 yapamayız const sabit tanımlama yapar

//array
//camelCasing
//PascalCasing:İlk harfleri büyük tanımlama

let konutkredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

//console.log(konutkredileri)

//console.log("<ul>")
for (let i = 0; i < konutkredileri.length; i++) {
    //console.log("<li>"+konutkredileri[i]+"</li>")
    
}
//console.log("</ul>")


//ÖDEV1 REACT 10. GÜN VİDEOSUNDAN js TEKRARI VE ÖRNEKLERİ
let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Zeynep"}
//console.log(student)

function save(puan=0,ogrenci) {
    //console.log(ogrenci.name + ":" + puan)
}
save(undefined,student) 


let students = ["Engin Demiroğ","Zeynep Seviğ","İlknur Yazıcı","Şeymanur Atakul"]

//console.log(students)

let students2 = [student, {id:2, name:"Zeynep"}, "Ankara", {city:"Kocaeli"}]
//console.log(students2)


//REST(geriye kalan parametreler)
let showProducts = function name(id,...products) {
    console.log(id)
    console.log(products)

}

//console.log(typeof showProducts)
// showProducts(10,"elma","armut","karpuz")


//SPREAD(ayrıştırmak)
let points = [1,2,3,4,50,4,60,14]

console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")
console.log(..."Zeynep Seviğ")

//DESTRUCTURİNG(array in değerlerini değişkenlere atama)
let populations = [10000,20000,30000]
let [small,medium,high] = populations
console.log(small)
console.log(medium)
console.log(high)

function somefunction([small1,medium1],number) {
    console.log(small1,medium1)
}

somefunction(populations)

let category = {id:1, name:"içecek"}
console.log(category.id)
console.log(category["name"])

//----------------2.GÜN--------------------

