let attendance = 80;
let marks = 85;

if (attendance >= 75 && marks > 80) {
    console.log("Scholarship Eligible");
} else {
    console.log("Scholarship Not Eligible");
}

let orderAmount = 700;
let isPrime = true;

if (orderAmount >= 500) {

    if (isPrime) {
        console.log("Free Delivery");
    } else {
        console.log("Delivery Charge: ₹50");
    }

} else {
    console.log("Minimum order amount not reached");
}

let membership = "silver";

switch (membership) {

    case "silver":
        console.log("Ticket Price: ₹250");
        break;

    case "gold":
        console.log("Ticket Price: ₹300");
        break;

    case "platinum":
        console.log("Ticket Price: ₹400");
        break;

    case "vip":
        console.log("Ticket Price: ₹500");
        break;

    default:
        console.log("Invalid Membership");
}