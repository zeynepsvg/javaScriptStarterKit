console.log("Verdiğimiz sayının asal olup olmadığını yazan program")

let number

function asal(number) {
    for (let i = 2; i < number; i++) {
        if (number%i==0) {
            console.log("Asal değil")
            break;
        } else {
            console.log("Asal")
        }
    }
}


asal(7)
