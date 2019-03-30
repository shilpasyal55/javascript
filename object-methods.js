//Two ways to write methods in an object
// Don't use arrow functions in Objects
var obj = {
    getVal() {
        return "New Way Methods"
    },
    getVal1 : function() {
        return "Old Way Method"
    }
}