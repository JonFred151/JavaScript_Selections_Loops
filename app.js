

//// Exercise 1 Section
//console.log('exercise 1')
//let isNotEven = 0;
//for (let i = 0; i <= 100; i++) {
//    if (i% 2 != 0) {
//        isNotEven = i
//        console.log(isNotEven);
//    }
//}

// Exercise 2 Section
//console.log('exercise 2')
//let FizzBuzz = 0;
//for (let i = 0; i <= 100; i++) {
//    FizzBuzz = i;
//    if (i % 3 == 0 && i % 5 == 0) {
//        console.log('FIZZBUZZ');
//    }
//    else if (i % 3 == 0) {
//        console.log('FIZZ');
//    }
//    else if (i % 5 == 0) {
//        console.log('BUZZ')
//    }
//}

////Exercise 3
//console.log('exercise 3')

// let NotEven = 1;
//do {
//    if (NotEven % 2 != 0) {
//        console.log(NotEven);
        
//    }
//    NotEven++
//}
//while (NotEven <= 100)

// let Buzz = 0
//do {
//    if (Buzz % 3 == 0 && Buzz % 5 == 0) {
//        console.log('FIZZBUZZ');
        
//    }
//    else if (Buzz% 3 == 0) {
//        console.log('FIZZ');
        
//    }
//    else if (Buzz % 5 == 0) {
//        console.log('BUZZ');
        
//    }
//    Buzz++
//} while (Buzz <= 100)

//exercise 4 
//let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
//let n4 = Math.round(Math.random() * (500 - 100) + 100); // kept here  just in case I need to change somthing 
//let n = 1
//for (let i = 1; i <= n4; i++) {
//    if (i == value) {
//        console.log(`Found ${value}`);
//        break;
//    }
//    else if (i == n) {
//        console.log(`Did not find ${value}`);
//        break;
//    }
//}

// Exercise 5 Section
console.log('exercise 5')
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n5 = Math.round(Math.random() * (1000 - 1) + 1);
let start = 1;
//let start = Math.round(Math.random() * (10 - 1) + 1); // kept here  just in case I need to change somthing
for (start; start <= n5; start++) {
    
    if (start % fizzDivisor == 0 && start % buzzDivisor == 0) {
        console.log(`FIZZBUZZ`);
    }
    else if (start % fizzDivisor == 0) {
        console.log(`FIZZ`);
    }
    else if (start% buzzDivisor == 0) {
        console.log(`BUZZ`)
    }
}
