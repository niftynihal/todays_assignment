var price_1 = 80
var price_2 = 140

var quantity_1 = 6
var quantity_2 = 3

var total_price = (price_1*quantity_1) + (price_2*quantity_2)

// console.log(total_price)

var discount = 0.08 * total_price

// var final_amount = total_price - discount

var tax = 0.05 * total_price

var tip = 50

var total_bill = total_price + tax + tip - discount

console.log(total_bill)