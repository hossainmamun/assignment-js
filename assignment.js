// repository link
// https://github.com/hossainmamun/assignment-js


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