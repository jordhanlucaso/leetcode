var createCounter = function(n) {
    let calls = 0
    let number
    return function() {
        if(calls === 0) {
            calls++
            return n
        } 
        number = n + calls
        calls++
        return number
    };
};

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())