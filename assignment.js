
// convert kilometer to meter
function kilometerToMeter(kilometer){
    let distance = kilometer * 1000;
    return distance;
}
let totalMeter = kilometerToMeter(5);
console.log(totalMeter);


// budget calculator
function budgetCalculator(watch, phone, laptop){
    let totalWatch = watch *4;
    let totalPhone = phone * 3;
    let totalLaptop = laptop * 2;
    let total = totalWatch + totalPhone + totalLaptop;
    return total; 
}
let budget = budgetCalculator(50, 100, 500);
console.log(budget);


// hotel cost
var rent = 0;
function hotelCost(days){
    if(days <= 10){
        rent = days * 100;
        return rent;
    }
    else if(days <= 20){
        var firstPackage = 10 * 100;
        var remaining = days - 10;
        var secondPackage = remaining * 80;
        rent = firstPackage + secondPackage;
        return rent;
    }
    else{
        var firstPackage = 10 * 100;
        var secondPackage = 10 * 80;
        var remaining = days - 20;
        var thirdPackage = remaining * 50;
        rent = firstPackage + secondPackage + thirdPackage;
        return rent;
    }
}
let totalRent = hotelCost(51);
console.log(totalRent);


