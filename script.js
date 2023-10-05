//IIFE
/*(function (){
    alert("JS ao qua")
})()*/

function writeLog(message) {
    //message là tham số
    console.log(message)
}
writeLog("Day la message") //truyền text như vầy gọi là đối số
writeLog(123) //123

function writeLog2 (message, message2 = 123) {
    console.log(message)
    console.log(message2)
}
writeLog2("abc")



function writeLog3 () {
    console.log(arguments)
}
writeLog3("Log1", "Log2", "Log3")

var id = Symbol("id") //unique
var id2 = Symbol("id") //unique
console.log(id === id2) //false

//viết 1 function nhâm vào kiểu dữ liệu là string, 3 tham số
//log ra được là param1 - param2 - param3
function writeLog4() {
    var myString = ''
    for (let el of arguments) {
        myString += `${el} - `
    }
    console.log(myString)
}
writeLog4("Log1", "Log2", "Log3") // => Log1 - Log2 - Log3 -

//Mốt số lưu ý với function
function showMessage() {
    console.log("Message 1")
}
function showMessage() {
    console.log("Message 2")
}
showMessage()

function showMessage2() {
    function showMessage3() {
        console.log("Message 3")
    }
    showMessage3()
}
showMessage2()

//Hoisting trong function
showMessage5()
function showMessage5() {
    console.log("Declaration function")
}
// const showMess5 = function showMessage5() {
//     console.log("Declaration function")
// }

setTimeout(function autoLogin() {}) //expression function

//Callback function
function myFunction(param) {
    if (typeof param === 'function') {
        param("De nong dan biet code")
    }
}
function myCallback(value) {
    console.log("RA: ", value)
}
myFunction(myCallback) //RA: De nong dan biet code

//map() => trả về 1 new array thoả 1 điều kiện cho trước
Array.prototype.map2 = function (callback) {
    var output = []
    var arrayLength = this.length;
    // console.log("arrayLength: ", arrayLength)
    // console.log("this: ", this)
    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i])
        // console.log("i: ", i)
        // console.log("this[i]: ", this[i])
        // console.log("result: ", result)

        output.push(result)
    }
    return output
}

var courses = ["JS", "HTML", "PHP", "Ruby"]

/*var html = courses.map2(function (course) {
    return `<h2>${course}</h2>`
})*/

var html = courses.map2( course => `<li>${course}</li>`)
document.write(html.join(""))

Array.prototype.filter2 = function(callback) {
    var output = []

    for (var i in this) {
        if(this.hasOwnProperty(i)){
            var result = callback(this[i],i, this)
            if(result) {
                output.push(this[i])
            }
        }
    }
    return output
}
var course2 = [
    {
        name: "Dart",
        price: 680,
        isFinish: true
    },
    {
        name: "JS",
        price: 0,
        isFinish: false
    },
    {
        name: "Node",
        price: 400,
        isFinish: true
    }
]
/*const callbackFunc = function (course, index, array) {
    return course.price >= 400
}*/
var someCourse = course2.filter2(course => {
    let charN = course.name.toLowerCase()
    return charN.includes('n')
})
console.log(someCourse)