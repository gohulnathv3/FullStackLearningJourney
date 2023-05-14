var num1 = 12;
var num2 = 23;

console.log(num1+num2);

// D = (L-S)/L * 100 - to find discount percentage

var sellingPrice = 199;
var listingPrice = 500;
var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
displayDiscountPercentage = Math.round(discountPercent);

console.log("Discount percentage is: "+displayDiscountPercentage+" % Offer");
