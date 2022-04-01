let invoiceItems = []
let washBtn = document.querySelector("#wash-btn")
let mowBtn = document.querySelector("#mow-btn")
let weedBtn = document.querySelector("#weed-btn")
let totalEl = document.querySelector("#total-el")
const sendBtn = document.querySelector("#send")


let itemEl = document.getElementById("item")
let priceEl = document.getElementById("price")

//remove
let removeEl = document.querySelector(".remove-el")
let removeEl1 = document.querySelector(".remove-el1")
let removeEl2 = document.querySelector(".remove-el2")


// removeEl.innerHTML = ``;

const washEl = document.querySelector("#wash-el")
const washNum = document.querySelector("#wash-num")

const mowEl = document.querySelector("#mow-el")
const mowNum = document.querySelector("#mow-num")

const weedEl = document.querySelector("#weed-el")
const weedNum = document.querySelector("#weed-num")



let clicked = false
let clicked2 = false
let clicked3 = false

let itemRemoved = false;
let itemRemoved2 = false;
let itemRemoved3 = false

const washCar = {"serviceName":"Wash Car","price": 10}
const mowLawn = {"serviceName":"Mow Lawn","price": 20}
const pullWeeds = {"serviceName":"Pull Weeds","price": 30}

// washBtn.addEventListener("click", function(){
//     if(!clicked || itemRemoved === true){
//         invoiceItems.push(washCar.price)
//         clicked = true
//     }
//     washEl.innerHTML = `${washCar.serviceName} `
//     let button = `<button class="remove-el">Remove</button>`
//     removeEl.innerHTML = `${button}`
//     washNum.innerHTML = `$ ${washCar.price}`
//     totalEl.innerHTML= `$ ${addALl(invoiceItems)}`
//     console.log(invoiceItems)
// })



// mowBtn.addEventListener("click", function(){
//     if(!clicked2 || itemRemoved2 === true){
//         invoiceItems.push(mowLawn.price)
//         clicked2= true
//     }
//     mowEl.innerHTML = `${mowLawn.serviceName}`
//     let button = `<button class="removeBtn1">Remove</button>`
//     removeEl1.innerHTML = `${button}`
//     mowNum.innerHTML = `$ ${mowLawn.price}`
//     totalEl.innerHTML= `$ ${addALl(invoiceItems)}`
//     console.log(invoiceItems)

// })
// weedBtn.addEventListener("click", function(){
//     if(!clicked3 || itemRemoved3 === false ){
//         invoiceItems.push(pullWeeds.price)
//         clicked3 = true
//     }
//     weedEl.innerHTML = `${pullWeeds.serviceName}`
//     let button = `<button class="remove2">Remove</button>`
//     removeEl2.innerHTML = `${button}`
//     weedNum.innerHTML = `$ ${pullWeeds.price}`
//     totalEl.innerHTML= `$ ${addALl(invoiceItems)}`
//     console.log(invoiceItems)

// })

// sendBtn.addEventListener("click", function(){
//     window.alert("Invoice Sent")
// })

// function addALl(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }

// function remove(item){
//     invoiceItems.pop(item.price)
// }

// removeEl.addEventListener("click", function(){
//     remove(washCar)
//     itemRemoved = true;
//     washNum.innerHTML = `$ 0`
//     totalEl.innerHTML= `$ ${addALl(invoiceItems)}`
//     console.log("remove wash card")
//     console.log(invoiceItems)
// })

// removeEl1.addEventListener("click", function(){
//     remove(mowLawn)
//     itemRemoved2 = true;
//     mowNum.innerHTML = `$ 0`
//     totalEl.innerHTML = `$ ${addALl(invoiceItems)}`
//     console.log("remove mow lawn")
//     console.log(invoiceItems)
// })

// removeEl2.addEventListener("click", function(){
//     remove(pullWeeds)
//     itemRemoved3 = true;
//     weedNum.innerHTML = `$ 0`
//     totalEl.innerHTML = `$ ${addALl(invoiceItems)}`
//     console.log("remove pull weeds")
//     console.log(invoiceItems)
// })

// if(invoiceItems.length >1){
//     totalEl.innerHTML= `$ ${addALl(invoiceItems)}`
//     console.log(invoiceItems)
// }

function renderItem(name){
    itemEl.innerHTML = `<span> ${name.serviceName} </span>`
    priceEl.innerHTML = `<span> ${name.price}</span>`
    
}

washBtn.addEventListener("click", function(){
    invoiceItems.push(washCar.price)
    renderItem(washCar)
    console.log("wash button pressed")
})

mowBtn.addEventListener("click", function(){
    invoiceItems.push(mowLawn.price)
    renderItem(mowLawn)
    console.log("mow button pressed")
})

weedBtn.addEventListener("click", function(){
    invoiceItems.push(pullWeeds.price)
    renderItem(pullWeeds)
    console.log("weed button pressed")
})