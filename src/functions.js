function addToCart(productionName="Elma",quantity) {
    console.log("Sepete eklendi : ürün : " + productionName + " adet : " + quantity)
}

//addToCart("Elma")
//addToCart("Armut")
//addToCart("Karpuz")

addToCart("Yumurta",12)


let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function() {
    console.log("Hello World 2")
}

sayHello2()

//Bu tercih edilmemeli! çok fazla parametrenin çağırıldığı durumlarda karışıklık olabilir!
function addToCart2(productName, quantity, unitPrice) {
    
}

//OBJELER
let product1 = {productName:"Elma", unitPrice:10, quantity:5} //obje tanımı
function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

addToCart3(product1) //product param. sine product1 atanır.

let product2 = {productName:"Elma", unitPrice:10, quantity:5} 
let product3 = {productName:"Elma", unitPrice:10, quantity:5} 
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

//sayılar==Değer Tip      Arrayler,objeler==Referans Tip

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

//REST 
function add(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    }


add(1,2,3,4,5)


//SPREAD
let numberseries = [20,65,3,5,35,345,3,452,76]
console.log(Math.max(...numberseries))


let [icAnadolu, marmara, karadeniz,[icanadolusehirleri, marmarasehirleri, karadenizsehirleri]] = [
    {name: "İç Anadolu", population: "20M"},
    {name: "Marmara", population: "30M"},
    {name: "Karadeniz", population: "10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Kocaeli"],
        ["Bartın", "Trabzon"]
    ]
]

console.log(marmara.name)
console.log(icAnadolu.population)
console.log(karadeniz.name)
console.log(karadenizsehirleri)


let newProductName, newUnitPrice, newQuantity
({productName: newProductName, unitprice: newUnitPrice, quantity: newQuantity}
= {productName: "Elma", unitPrice: 10, quantity: 5})

console.log(newProductName)


