
/*
     F -> C
    T(°C) = (T(°F) - 32) / 1.8

    F -> K
    (32°F − 32) × 5/9 + 273.15

    C -> F
    T(°F) = T(°C) × 1.8 + 32

    C -> K
    C + 273.15

    K -> F
    (23K − 273.15) × 9/5 + 32 = -418.3°F

    K -> C
    K − 273.15
*/

// F -> C
// T(°C) = (T(°F) - 32) / 1.8

let fTemp1 = 60;
let cTemp1 = (fTemp1 - 32) / 1.8.toFixed()
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

//  F -> K
// (32°F − 32) × 5/9 + 273.15

let kTemp1 = (fTemp1 - 32) * 5/9 + 273.15
console.log(`\n${fTemp1}°F is equal to ${kTemp1}°K`);

// C -> F
// T(°F) = T(°C) × 1.8 + 32

let cTemp2 = 23;
let fTemp2 = cTemp2 * 9/5 + 32
console.log(`\n${cTemp2}°C is equal to ${fTemp2}°F`);


// C -> K
// C + 273.15


let kTemp2 = cTemp2 + 273.15
console.log(`\n${cTemp2}°C is equal to ${kTemp2}°K`);

 // K -> F
 //(23K − 273.15) × 9/5 + 32 = -418.3°F

let kTemp3 = 300;
let fTemp3 = (kTemp3 - 273.15) * 9/5 + 32
console.log(`\n${kTemp3}°K is equal to ${fTemp3}°F`);

// K -> C
//K − 273.15

let cTemp3 = kTemp3 - 273.15
console.log(`\n${kTemp3}°K is equal to ${cTemp3}°C`);

/**
 * 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 * 
 * Find the index of 'w' in the sentence (ignoring cases)
 */

let page = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';

page = page.indexOf('w')