var isEmailLoggedIn = true;
var isGoogleLoggedIn = false;
var isFaceBookLoggedIn = true;
var isEmailVerfied = true;
var isPhoneNumberVerified = true;
var paymentInfoProvided = true;

// to allow purchase, you should have logged in anyone of the following email, facebook, google and having verified email or phone number and payment Info

if ((isEmailLoggedIn || isFaceBookLoggedIn || isGoogleLoggedIn) && ( isEmailVerfied || isPhoneNumberVerified) && paymentInfoProvided){
    console.log("Thanks for the purchase, please pay and enjoy the course !!! ")
} else {
    console.log("Sorry, you're NOT allowed to purchase. To allow you to make purchase, you should have logged in anyone of the following way by using email or facebook or google and having verified email or phone number and payment Info")
}

