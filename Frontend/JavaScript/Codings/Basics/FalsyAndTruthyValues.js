// TODO: falsy values
// undefined 
// null
// ""
// ''
// 0
// NaN

var check = "hello";
if (check) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}

// coercion is nothing but === we used this only when js needed to check the exact data type

// without coercion
var check = 2;
if ("2" == check) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}
// with coercion
var check = 2;
if ("2" === check) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}
