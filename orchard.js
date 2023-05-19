///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

//for this problem I created a for loop for each of the 3 arrays whichh would calculate that specific arrays total. I then ran a consol.log which shows the cumultaive total. 

// CODE HERE
let totalAcres = 0
for (i =0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i]
}
for (i =0; i < galaAcres.length; i++) {
    totalAcres += galaAcres[i]
}
for (i =0; i < pinkAcres.length; i++) {
    totalAcres += pinkAcres[i]
}
console.log(totalAcres)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// for this problem I created a simple math equation that divided the total acres by the number of days in the week 

// CODE HERE

let averageDailyAcres = totalAcres/fujiAcres.length
console.log(averageDailyAcres)



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// I created a simple "while loop" that would run as long as acresLeft was greater than zero. Within each loop it will add +1 to days and remove the averageDailyAcres from acresLeft until it can no longer run the loop. 
//I then console.log the days to show the total number of days of work left

// CODE HERE
while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
//Initially I created three new arrays (one for each apple variatal) by using the slice function creating a shallow copy
//From there I ran three seperat for loops within each iteration of a loop the number of acres would be multiplied by 6.5 (which is the total amount of apples you can pick /acre)
//Finally I consol.log all three new arrays to show the tons of apples picked per day per variety 

// CODE HERE

let fujiTons = fujiAcres.slice(0, fujiAcres.length)
let galaTons = galaAcres.slice(0, galaAcres.length)
let pinkTons = pinkAcres.slice(0, pinkAcres.length)

for (i = 0; i < fujiTons.length; i++) {
    fujiTons[i] *= 6.5
}
for (i = 0; i < galaTons.length; i++) {
    galaTons[i] *= 6.5
}
for (i = 0; i < pinkTons.length; i++) {
    pinkTons[i] *= 6.5
}
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
//I initially ran a for loop for all 3 varietals of apples to ensure we had to total tons
//From there I multiplied each total by 2000 to show to toal amount of apples picked in lbs 
//finally I ran a consol.log to show these totals in the consol
// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (i =0; i < fujiTons.length; i++) {
    fujiPounds += fujiTons[i]
}
for (i =0; i < galaTons.length; i++) {
    galaPounds += galaTons[i]
}
for (i =0; i < pinkTons.length; i++) {
    pinkPounds += pinkTons[i]
}
fujiPounds *= 2000
galaPounds *= 2000
pinkPounds *= 2000

console.log(`The total number of Fuji Apples picked in pounds ${fujiPounds}`)
console.log(`The total number of Gala Apples picked in pounds ${galaPounds}`)
console.log(`The total number of Pink Apples picked in pounds ${pinkPounds}`)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
    const fujiPrice = .89 
    const galaPrice = .64
    const pinkPrice = .55
*/

//I created a simple equation that multiplied the total pounds by the price /lb

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log(`The profits for Fuji Apples is ${fujiProfit}`)
console.log(`The profits for Gala Apples is ${galaProfit}`)
console.log(`The profits for Pink Apples is ${pinkProfit}`)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// I ran a simple equation to show the total profits across all three varietals of apples
// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`The total profit ${totalProfit}`)