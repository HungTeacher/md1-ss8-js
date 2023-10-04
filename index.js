function myFunction() {
    document.getElementById("demo").innerHTML = "Hello cac ban"
}
// myFunction()

/*var x, y, z; //declaration
x = 5; //expression
y = 6;
z = x + y;
console.log("z: ", z)*/

// alert("Hi! Im Minh Hung")
// prompt("Enter your phone number: ")
// confirm("Your are ready!")

/*
var result = "Ket qua thuc thi cua JS"
document.write(result)*/

function showMessage() {
    // document.write("Xin Chao")
    console.log("Xin Chao")
}

var age; // khai báo 1 biên có tên là age
age = 18; // Gán giá trị 18 cho biến age


age = 30;
console.log("Tuoi cua thay Hung: " + age);

//Thay đổi giá trị của biến
var num = 5;
num = num + 10;
console.log("num: ", num)

//Ghi đè giá trị cũ khi gán giá trị mới
var fruit = "Apple"
fruit = "Banana"
console.log("Loai trai cay la: ", fruit)

const color = "blue"; //initializer

const firstName = undefined
if (!firstName) {
    console.log("firstName is falsy")
}
// console.log(typeof firstName)
var res = 10 % 3;
console.log(" ket qua cua toan tu %: ", res)

//Toán tử prefix & postfix

var output = res++ + --res;
//res++ : 1
//cong vơi --res:1
console.log("res++: ", res++)
console.log("res--: ", --res)

console.log("Output: ", output)
console.log("res: ", res)

output += 3; //output = output + 3
console.log("Output: ", output)

//Toán tử chuỗi
var str = "Nguyen"
str += " Minh Hung"
console.log("str: ", str)

/*
* Toán tử so sánh
* ==
* !=
* >
* <
* >=
* <=
* */

var x = 1;
var y = "1";
if(x === y) {
    console.log("Dieu kien dung")
} else {
    console.log("Dieu kien sai")
}

var t = 1
var h = 2;
var isTruthy = t > h;
console.log("isTruthy: ", isTruthy)

/*
* Toan tử logic
* 1. && - And // đòi hỏi tất cả điều kiện phải đúng
* 2. || - Or // chi can 1 ve dung
* 3. ! - NOT // phủ đinh
* */

var m = 1;
var n = 2;
var z = 3;
if (m > 0 && n > 0 && z < 0) {
    console.log("Dieu kien dung")
}
if( m < 0 || n< 0 || z > 0) {
    console.log("Dieu kien dung")
}

/*
* Kiểu dữ liệu trong JS
* 1. Dữ liệu Nguyên Thuỷ - Primitive Datat
* - Number
* - String
* - Boolean
* - Undefined
* - Null
* - Symbol
*
* 2. Dữ liệu Phức tạp - complex data _ Reference Data
* - Object
* _Array
* -Function
* */

//Expression
var myFunc = function funcName() {
    alert("abc")
}
// myFunc()

//Declaration
function submit() {}

var myObject = {
    name: "Minh Hung",
    age: 18,
    address: "HCM",
    myFunc: function () {}
}
//Array : []
var myArr = ["JS", "PHP", "React"]
console.log(myArr)

var andOp = "0" && 0 || "B"
var result2 = "A" && "B" && NaN || 0 || undefined
console.log(result2)

/*var diem = prompt("Nhap diem vao: ")
if (diem >= 75) {
    alert("Loai A")
} else if (diem >= 60) {
    alert("Loai B")
} else {
    alert("Loai E")
}*/
/*
* Chuỗi trong JS
* 1. Tạo chuỗi
*   - các cách tạo chuỗi
*   - nên dùng cách nào? Lý do
*   - Kiểm tra data type
*  2. Mỗi số case sử dụng backlash (\)
* 3. Xem độ dài chuỗi
* 4. Chú ý đội dài khi viết code
* 5. Template string ES6
* */
var fullName = new String("Nguyen Minh Hung") //cách này ít xài
console.log(typeof fullName)
var fullName2 = "Minh Hung is 'Teacher'"
console.log(fullName2)
var fullName3 = "day la dau \\"
console.log(fullName3)
var fullName4 = "Minh Hung "
console.log(fullName4.length)
var fullName5 = "Một số case sử dụng backslash" + "1.Một số case sử dụng backslash" +  "2.Một số case sử dụng backslash"
console.log(fullName5)
var firstName1  = "Quan"
var lastName1 = "Duong"
console.log(`Toi la: ${firstName1} ${lastName1}`)

/*
* Các phương thức làm viẹc với chuỗi
* 1. Length
* 2. Find Index
* 3. Cut String
* 4. Replace
* 5. Convert to upper case
* 6. Convert to lower case
* 7. Trim
* 8. Split
* 9. Get a character by index
* */
var myString = "De nong dan biet code "
console.log("De nong dan biet code: ", myString.length)
console.log(myString.indexOf("no"))
console.log(myString.indexOf("ABC")) //-1
var myString2 = "De nong dan biet code va lam code"
console.log(myString2.indexOf("code", 20))// 29
console.log(myString2.lastIndexOf("code")) //29
console.log(myString.slice(4,6)) //on
console.log(myString.slice(3)) //nong dan biet code
console.log(myString.replace(/code/g, "dev"))
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())
console.log(myString.trim()) //bỏ khoảng trắng ở đầu string

var languages = "Javascript, PHP, Ruby"
console.log(languages.split(", ")) //['Javascript', 'PHP', 'Ruby']
console.log(languages.split(""))
var myString3 = "Minh Hung"
console.log(myString3.charAt(0))//M
console.log(myString3.charAt(10))//trả về chuỗi rỗng ""
console.log(myString3[1]) //i

//If else - session 9
/*let radius = parseInt(prompt("Nhập bán kính: "));
let area;*/
/*
if (radius >= 0) {
    // const PI = 3.14;
    let area = Math.PI * radius * radius;
    console.log("Diện tích hình tròn: ", area)
}
*/

/*if (radius >= 0) area = Math.PI * radius * radius
console.log("Diện tích hình tròn: ", area)*/

/*let number = parseInt(prompt("Nhập vào 1 số: "))
var result = (number % 2 == 0) ? "Số chẵn" : "Số lẻ" //ternary operator
console.log("number là " +result)*/
/*var isEven = number % 2 == 0

if (isEven) {
    console.log(number + " is even")
} else {
    console.log(number + " is odd")
}*/
// Cho phep nhap  vào 3 số a, b, c
//if a > b => if a > c => log ra Greatest number is a
// else Greatest number is c
// if b > c => log Greatest number is b
// Greatest number is c
/*let a = parseInt(prompt("Nhập số a: "))
let b = parseInt(prompt("Nhập số b: "))
let c = parseInt(prompt("Nhập số c: "))
if (a > b) {
    if (a > c) {
        console.log("Greatest number is a =" + a)

    } else {
        console.log("Greatest number is c =" + c)
    }
} else {
    if (b > c) {
        console.log("greatest number is b = " + b)
    } else {
        console.log("Greatest number is c =" + c)
    }
}*/

//cho phép nhập vào điểm số
//check điểm >= 90 => loại A
// điểm >= 80 => loại B
// điểm >= 70 => loại C
// dưới 70 => loại D
// Sử dụng if bậc thang
// let score = parseInt(prompt("Nhập vào số điểm: "))
/*if (score >= 90) {
    console.log("Loai A")
} else if (score >= 80) {
    console.log("Loai B")
} else if(score >= 70) {
    console.log("Loai C")
} else {
    console.log("Loai D")
}*/
/*if(number)
    if(number >= 80) console.log("Loai B")
    else console.log("Loai C")*/

/*
var numFloat = 1.0 - 0.1 - 0.1 -0.1 - 0.1 - 0.1;
console.log(numFloat == 0.5) //
console.log(numFloat)
*/


/*let initState
if (initState) {
    tuition = 5000
} else {
    tuition = 15000
}
console.log("The tuition is" + tuition)*/

/*
var colors = prompt("Chọn 1 màu dưới đây. 1. red 2.blue")
switch(colors) {
    case "red":
        console.log("Màu đỏ")
        break
    case "blue":
        console.log("Màu xanh")
        break
    default:
        console.log("Không phát hiện màu nào")
        break
}
*/

/*
var day = parseInt(prompt("Ngày hôm nay là cuối tuần hay trong tuần"))
switch(day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday")
        break;
    case 6:
        console.log("Weekend")
}*/

//viết 1 chương trình cho phép nhập vào số tuổi, check số tuổi đó >= 18 thì được vote, ngược lại
//nhỏ <= 18, bạn không được quyền vote
//ternary operator
/*let ageVote = parseInt(prompt("Nhap so tuoi cua ban"))
var result = (ageVote >= 18) ? "Bạn đủ điệu kiện vote" : "Bạn chưa đủ điều kiện vote"
console.log("Kết quả là: ", result)*/

/*
* If - else
* trong JS có 6 giá trị sau: primitive value (dữ liệu nguyên thuỷ)
*  number, string, boolean, undefined, null, symbol, NaN
* 1. 0
* 2. false
* 3. '' hoặc ""
* 4. undefined
* 5.null
* 6. NaN
* 6 giá trị này convert sang boolean thì là = false;
* ngoài những giá trị này đều là true
*
* reference value (tham chiếu) //Complex data (dữ liệu phức tạp): Function , object, array
* */

//Viết 1 chương trình sử dụng switch case check xem ngày hiện tại là thứ mấy trong tuần
//Show kết quả trong thẻ p sử dụng id
// document.getElementById(id).innerHTML
/*var day;
var a = new Date().getDay()
console.log(a)
switch(a) {
    case 0:
        day = "Sunday"
        break
    case 1:
        day = "Monday"
        break;
}
document.getElementById("test").innerHTML = "Today is" + day*/

/*e = 1;
var e;
console.log(e)

const sum = (a, b) => a + b
console.log(sum(2,2))*/

const h1 = document.querySelectorAll("h1")
console.log(h1)
h1.forEach(item => item.title = "hello world")
// h1.innerHTML = "Hello word"

// const className = h1.getAttribute("class")
// console.log(className)

var json = '["JS", "PHP"]'
console.log(typeof json)
console.log(typeof JSON.parse(json))
var json2 = ["JS", "PHP"]
console.log(typeof JSON.stringify(json2))

for (var i = 1; i <= 10; i++) {
    var product = 5 * i
    document.write("5 x "+ i + " = " + product + "<br />")
}

for (let i = 0, j = 10; i <= 10; i++, j--) {
    let sum = i + j;
    document.write(i + " + " + j + " = " + sum + "<br />")
}

/*let text = "Hello"

while (text !== 'q' && text !== '') {
    text = prompt('Enter a text to print. Enter "q" to quit.')
    document.write(text + '<br />');
}*/

/*let count = 0
let text = ''
while (count < 50) {
    text += '<hr width="' + count + '%">';
    count++;
}
document.getElementById("shape").innerHTML = text*/

/*let text = ''
for (let count = 0; count < 50; count++) {
    text += '<hr width="' + count + '%">';
}
document.getElementById("shape").innerHTML = text*/

/*
for (let i = 0; i >= 0; i++) {
    document.write("i = " + i + "<br />")
}

let i = 0;
while (i >= 0) {
    document.write("i = " + i + "<br />")

}*/
/*let sum = 0;
let number;
do {
    number = parseInt(prompt('Enter a number'))
    sum += number; // sum = sum + number
} while(number != 0)

document.write("The sum is: " +sum)*/

let text = ''
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    text += 'The number is ' + i + '<br />'
}
document.getElementById('result').innerHTML = text

var myArr4 = [
    [1,2], //i = 0
    [3,4], //i = 1
    [5,6], //i = 2
]
// var a = []
for (let i = 0; i < myArr4.length; i++) {
    for (let j = 0; j < myArr4[0].length; j++) {
        console.log(myArr4[i][j]) //myArr4[0][0] => 1
        // myArr4[0][1] => 2
        // myArr4[1][0] => 3
    }
}
/*var result = a.join()
console.log("result: ", result)*/
//1 2 3 4 5 6

/*
************
************
************
************
************
************
* */
for (let i = 0; i < 5; i++) {
    for(let j = 0; j < 10; j ++) {
        document.write("*")
    }
    document.write("*" + "<br />")
}

// in ra 0 2 4 6 8 sử dụng vòng lặp for kết hợp continue
// let text= ''
for (let i = 0; i < 9; i ++) {
    if (i % 2 !== 0) {
            continue
    }
    console.log(i)
}

var array = [1,2,3,4,5,6,7,8,9,10]
// for (let el in array) {
//     console.log("element = " + el)
// }
for (let i = 0; i < array.length; i++) {
    console.log("element = " + array[i])
}

let cars = new Array('honda', 'suzuki', 'vinfast')
let text2 = ''
for (let i = 0; i < cars.length; i++) {
    text2 += cars[i] + '<br />'
}
document.write(text2)

let fruits= ['Banana', 'Grange', 'Apple', 'Orange']
// alert(fruits.length)
// fruits.push('Lemon')
fruits[fruits.length] = 'Watermelon'
document.write(fruits)

let nums = [1,2,3]
console.log(nums.join())
console.log(nums.join(' '))
console.log(nums.join(''))
console.log(nums.join('-'))
console.log(nums.reverse().join())
let arr2 = new Array(10)
console.log(arr2.join('-'))

let arr3 = new Array('watermelon','Banana', 'orange', 'banana', 2,5,1, "*", "$")

arr3.sort()
console.log(arr3.join(', '))

let arr4 = [33, 44, 111, 222, 5555]
arr4.sort() // sort theo Alphabet order
arr4.sort(function (a, b) {
    return b - a
})
console.log(arr4)

let arr5 = ['Bug', 'ant', 'cat', 'Dog']
/*arr5.sort()
console.log(arr5)*/
arr5.sort(function (s, t) {
    let a = s.toLocaleLowerCase() // ant
    let b = t.toLocaleLowerCase() //bug
    if ( a < b) return -1; // [a, b]
    if ( a > b) return 1; // [b, a]
    return 0 //giu nguyen vi tri ban dau
})
console.log(arr5)

let arr6 = [5,6,7]
// arr6.concat(9,10)
console.log(arr6.concat(9,10))
console.log(arr6.concat([9,10], [11,12]))
console.log(arr6.concat(8,[9,[10,11]]))

let stack = []
stack.push(1,2,3,4,5,6)
stack.unshift(1)
const lastEl = stack.pop()
console.log(stack.toString())

let courses = [
    {
        id: 1,
        name: "Javascript",
        price:250
    },
    {
        id: 2,
        name: "HTML, CSS",
        price: 150
    },
    {
        id: 3,
        name: "NodeJs",
        price: 350
    },
    {
        id: 4,
        name: "ReactJs",
        price: 0
    }
]
let isFree = courses.every(function (course,index) {
    // console.log(course)
    return course.price == 0
})
console.log(isFree) //false

// tìm kiếm khoá học có tên là HTML, CSS
let isFree1 = courses.find(function (course, index) {
    return course.name === "HTML, CSS"
})
console.log(isFree1)

let isFree2 = courses.filter(function (course, index) {
    return course.price >= 150
})
console.log(isFree2)

let isFree3  = courses.map(function (course, index) {
    // const newPrice = course.price * 0.5
    const newCourse = {
        id: course.id,
        name: course.name,
        price: course.price * .5
    }
    return newCourse
})
console.log(isFree3)

let isFree4 = courses.reduce(function (acc, currVal){
    // console.log(accumulator, currentValue)
    return acc + currVal.price
}, 1)
console.log(isFree4)