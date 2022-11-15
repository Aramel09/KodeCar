// let sign = `Stop`;
// console.log(`I see sign,`, sign);

// sign = `Go`
// console.log(`I see No sign,`, sign)

//Logic: You see a stop sign: stop
// If you dont see a stop sign: go

let sign = `stop`
if ( sign === `stop` ) {
    console.log(`Stop vehicle at sign`)
}
else {
    console.log(`Continue`)
}

sign = `no sign`
if ( sign === `stop` ) {
    console.log(`Stop vehicle at sign`)
}
else {
    console.log(`Continue`)
}

//logic: if the speed limit is 70mph - 100mph: Put some gas in it
// if the speed limit is 45mph to 70mph - Mantain speed :)
//if the speed limit is 30mph to 45 mph - Lower speed
// if the speed limit is 20mph - 45 mph - SLOW DOWN!!!!

let speed = 70;
if (speed >= 70) {
    console.log(`Put some gas in it!`)
}
else if (45 < speed <70) {
    console.log(`Mantain speed :)`)
}
else if (30 < speed <= 45) {
    console.log(`Lower your speed`)
}
else if (10 < speed <= 30) {
    console.log(`SLOW DOWN`)
}
else {
    console.log(`Might as well park the car`)
}

speed = 5;
if (speed >= 70) {
    console.log(`Put some gas in it!`)
}
else if (45 <= speed) {
    console.log(`Mantain speed :)`)
}
else if (30 <= speed) {
    console.log(`Lower your speed`)
}
else if (10 <= speed) {
    console.log(`SLOW DOWN`)
}
else {
    console.log(`Might as well park the car`)
}


speed = 42
if (speed >= 70) {
    console.log(`Put some gas in it!`)
}
else if (45 <= speed) {
    console.log(`Mantain speed :)`)
}
else if (30 <= speed) {
    console.log(`Lower your speed`)
}
else if (10 <= speed) {
    console.log(`SLOW DOWN`)
}
else {
    console.log(`Might as well park the car`)
}

// logic: if I want to change lanes and is empty: Go ahead
// if there is a car: Wait for the space

let changeLanes = `car`
if ( changeLanes === `car`) {
    console.log(`Wait for the space`)
}
else {
    console.log(`Go ahead`)
}

changeLanes = ``
if ( changeLanes === `car`) {
    console.log(`Wait for the space`)
}
else {
    console.log(`Go ahead`)
}

//logic: if the day is sunny: Pedal to the medal
// if it's raining: Careful the roads are slippery
// if it's snowing: Slow down or meet your creator
// it it's cloudy: Go nuts, the gas prices are coming down

let weather = `sunny`
if (weather === `sunny`) {
    console.log(`PEDAL TO THE MEDAL!!!`)
}
else if (weather === `raining`) {
    console.log(`Careful the roads are slippery`)
}
else if (weather === `snowing`) {
    console.log(`Slow down or meet your creator`)
}
else {
    console.log(`Go nuts, the gas prices are coming down`)
}

weather = `snowing`
if (weather === `sunny`) {
    console.log(`PEDAL TO THE MEDAL!!!`)
}
else if (weather === `raining`) {
    console.log(`Careful the roads are slippery`)
}
else if (weather === `snowing`) {
    console.log(`Slow down or meet your creator`)
}
else {
    console.log(`Go nuts, the gas prices are coming down`)
}