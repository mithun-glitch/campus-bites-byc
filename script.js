function login(){

let user=document.getElementById("loginUser").value
let pass=document.getElementById("loginPass").value

if(user==="mithun" && pass==="@54321"){

document.getElementById("loginPage").style.display="none"
document.getElementById("app").classList.remove("hidden")

}else{

alert("Wrong username or password")

}

}

let cart=[]

const stalls=[
{name:"Break Time",rating:"4.3"},
{name:"Hangyo",rating:"4.1"},
{name:"Mingos",rating:"4.4"},
{name:"Cake Boutique",rating:"4.5"},
{name:"Falcons",rating:"4.2"},
{name:"Surf and Turf",rating:"4.3"},
{name:"Cafe Coffee Day",rating:"4.6"},
{name:"Wave",rating:"4.0"},
{name:"Chat Hut",rating:"4.1"},
{name:"McDonalds",rating:"4.7"}
]

const menus={

"Break Time":[
{name:"Veg Sandwich",price:60},
{name:"Grilled Sandwich",price:80},
{name:"Cheese Toast",price:70},
{name:"French Fries",price:90},
{name:"Paneer Roll",price:100},
{name:"Chicken Roll",price:120},
{name:"Cold Coffee",price:80},
{name:"Milkshake",price:90}
],

"Hangyo":[
{name:"Vanilla Ice Cream",price:50},
{name:"Chocolate Ice Cream",price:60},
{name:"Strawberry Ice Cream",price:60},
{name:"Butterscotch Cup",price:70},
{name:"Ice Cream Sundae",price:120},
{name:"Kulfi",price:50},
{name:"Choco Bar",price:40},
{name:"Ice Cream Shake",price:90}
],

"Mingos":[
{name:"Chicken Burger",price:120},
{name:"Veg Burger",price:100},
{name:"Chicken Nuggets",price:150},
{name:"Fries",price:90},
{name:"Chicken Wings",price:170},
{name:"Chicken Wrap",price:140},
{name:"Cold Drink",price:40},
{name:"Popcorn Chicken",price:160}
],

"Cake Boutique":[
{name:"Chocolate Cake",price:150},
{name:"Red Velvet Cake",price:200},
{name:"Black Forest Cake",price:170},
{name:"Cupcake",price:80},
{name:"Donut",price:70},
{name:"Brownie",price:90},
{name:"Pastry",price:100},
{name:"Cheesecake",price:180}
],

"Falcons":[
{name:"Chicken Shawarma",price:140},
{name:"Paneer Shawarma",price:120},
{name:"Chicken Burger",price:130},
{name:"Zinger Burger",price:150},
{name:"Chicken Nuggets",price:140},
{name:"Fries",price:90},
{name:"Pepsi",price:40},
{name:"Chicken Wrap",price:120}
],

"Surf and Turf":[
{name:"Fish Fry",price:180},
{name:"Prawn Fry",price:220},
{name:"Grilled Chicken",price:200},
{name:"Chicken Steak",price:230},
{name:"Veg Steak",price:150},
{name:"Garlic Bread",price:120},
{name:"Cold Drink",price:40},
{name:"Lemon Soda",price:50}
],

"Cafe Coffee Day":[
{name:"Cappuccino",price:120},
{name:"Latte",price:130},
{name:"Espresso",price:110},
{name:"Cold Coffee",price:140},
{name:"Mocha",price:150},
{name:"Garlic Bread",price:120},
{name:"Chocolate Brownie",price:130},
{name:"Sandwich",price:110}
],

"Wave":[
{name:"Veg Fried Rice",price:120},
{name:"Chicken Fried Rice",price:150},
{name:"Veg Noodles",price:110},
{name:"Chicken Noodles",price:150},
{name:"Spring Rolls",price:120},
{name:"Manchurian",price:140},
{name:"Chilli Chicken",price:180},
{name:"Soup",price:90}
],

"Chat Hut":[
{name:"Pani Puri",price:40},
{name:"Bhel Puri",price:50},
{name:"Sev Puri",price:50},
{name:"Samosa Chaat",price:70},
{name:"Dahi Puri",price:60},
{name:"Aloo Tikki",price:70},
{name:"Pav Bhaji",price:100},
{name:"Masala Puri",price:60}
],

"McDonalds":[
{name:"McAloo Tikki",price:60},
{name:"McChicken",price:120},
{name:"McSpicy Paneer",price:150},
{name:"McVeggie",price:100},
{name:"French Fries",price:90},
{name:"Chicken Nuggets",price:150},
{name:"McFlurry",price:100},
{name:"Cold Drink",price:50}
]

}

const stallContainer=document.getElementById("stallContainer")

stalls.forEach(stall=>{

let card=document.createElement("div")
card.className="stallCard"

card.innerHTML=`
<img src="https://source.unsplash.com/300x200/?restaurant,food">
<h3>${stall.name}</h3>
<p class="rating">⭐ ${stall.rating}</p>
`

card.onclick=()=>openStall(stall.name)

stallContainer.appendChild(card)

})

function openStall(name){

document.getElementById("stallSection").classList.add("hidden")
document.getElementById("menuSection").classList.remove("hidden")

document.getElementById("stallTitle").innerText=name

let menuContainer=document.getElementById("menuContainer")
menuContainer.innerHTML=""

menus[name].forEach(item=>{

let card=document.createElement("div")
card.className="menuItem"

card.innerHTML=`
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="addToCart('${item.name}',${item.price})">Add to Cart</button>
`

menuContainer.appendChild(card)

})

}

function addToCart(name,price){

let existing = cart.find(item => item.name === name)

if(existing){

existing.qty += 1

}else{

cart.push({name,price,qty:1})

}

updateCart()

}

function openCart(){

document.getElementById("cartPanel").style.display="block"

updateCart()

}

function closeCart(){

document.getElementById("cartPanel").style.display="none"

}

function updateCart(){

let area=document.getElementById("cartItems")

area.innerHTML=""

let total=0
let totalItems=0

cart.forEach((item,index)=>{

area.innerHTML+=`
<div class="cartItem">

<span class="cartName">${item.name}</span>

<div class="cartControls">

<button onclick="decreaseQty(${index})">−</button>

<span>${item.qty}</span>

<button onclick="increaseQty(${index})">+</button>

<button class="removeBtn" onclick="removeItem(${index})">🗑</button>

</div>

<span class="cartPrice">₹${item.price * item.qty}</span>

</div>
`

total += item.price * item.qty
totalItems += item.qty

})

document.getElementById("cartTotal").innerText="Total ₹"+total
document.getElementById("cartCount").innerText=totalItems

}

function checkout(){

if(cart.length===0){
alert("Your cart is empty!")
return
}

let orderId = "ORD" + Math.floor(Math.random()*100000)

localStorage.setItem("currentOrder", orderId)

document.getElementById("orderID").innerText = "Order ID: " + orderId

saveOrder(cart, document.getElementById("cartTotal").innerText)

closeCart()

document.getElementById("orderPopup").classList.remove("hidden")

cart=[]

document.getElementById("cartCount").innerText=0

updateCart()

}

function goHome(){

let popup = document.getElementById("orderPopup")

if(popup){
popup.classList.add("hidden")
}

document.getElementById("menuSection").classList.add("hidden")
document.getElementById("stallSection").classList.remove("hidden")

}
function searchStalls(){

let input=document.getElementById("searchBar").value.toLowerCase()

let cards=document.querySelectorAll(".stallCard")

cards.forEach(card=>{

let name=card.innerText.toLowerCase()

card.style.display=name.includes(input)?"block":"none"

})

}
function increaseQty(index){

cart[index].qty++

updateCart()

}

function decreaseQty(index){

if(cart[index].qty > 1){

cart[index].qty--

}else{

cart.splice(index,1)

}

updateCart()

}

function removeItem(index){

cart.splice(index,1)

updateCart()

}
function payNow(){

let options={
key:"RAZORPAY_KEY_HERE",
amount:50000,
currency:"INR",
name:"Campus Bites",
description:"Food Order",
handler:function(){

checkout()

}
}

let rzp=new Razorpay(options)

rzp.open()

}
function showPaymentOptions(){

if(cart.length===0){
alert("Your cart is empty!")
return
}

document.getElementById("paymentPopup").classList.remove("hidden")

}

function closePayment(){

document.getElementById("paymentPopup").classList.add("hidden")

}function payCOD(){

closePayment()

checkout()

}function payOnline(){

let totalText = document.getElementById("cartTotal").innerText
let amount = parseInt(totalText.replace(/\D/g,'')) * 100

let options = {

key: "YOUR_RAZORPAY_KEY",

amount: amount,

currency: "INR",

name: "Campus Bites",

description: "Food Order",

handler: function(){

closePayment()

checkout()

}

}

let rzp = new Razorpay(options)

rzp.open()

}
function openTrack(){

window.location.href="track.html"

}
function trackOrder(){

let popup = document.getElementById("orderPopup")

if(popup){
popup.classList.add("hidden")
}

window.location.href = "track.html"

}