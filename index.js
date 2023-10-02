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
let ageVote = parseInt(prompt("Nhap so tuoi cua ban"))
var result = (ageVote >= 18) ? "Bạn đủ điệu kiện vote" : "Bạn chưa đủ điều kiện vote"
console.log("Kết quả là: ", result)

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
var day;
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
document.getElementById("test").innerHTML = "Today is" + day