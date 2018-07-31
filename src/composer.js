//arr.reduce(callback[, initialValue])
const reducer1 = function(composed, f) {
    console.log("f is " + f);
    console.log("composed is " + composed);
    return f(composed)
}    
const compose = (...fns) => (arg) => fns.reduce(reducer1, arg)
//const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg)
module.exports = compose;