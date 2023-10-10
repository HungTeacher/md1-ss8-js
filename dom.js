//DOM events
//1. Attribute  events
//2. Assign event using element node

var h3Element = document.querySelectorAll("h3")
// console.log(h3Element)

//duyệt mảng span trong thẻ h3
//mỗi thẻ span sẽ nhận sự kiện onclick
//log ra target trong event object
/*for (let i = 0; i < 3; i++) {
    h3Element[i].onclick = function (event) {
        console.log(event)
    }
}*/
function handleInput(event) {
    console.log(event.target.value)
}

var inputElement = document.querySelector('input[type="text"]')
/*inputElement.onchange = function (e) {
    console.log(e.target.value)
}*/
/*
//keydown: khi bấm phím xuống là thực thi
inputElement.onkeydown = function (e) {
    console.log(e.key)
}*/
//keyup: là khi bấm xuống rồi nhấc lên thi mới thực thi
inputElement.onkeyup = function (e) {
    console.log(e.key)
}
var ulElement = document.querySelector("ul")
ulElement.onclick = function (e) {
    console.log(e.target)
}
console.log(ulElement)

//Event listener
//1. Xư lý nhiều việc khi 1 event xảy ra
//2. Lắng nghe/ huỷ bỏ lắng nghe
var btn = document.getElementById("btn")

function viec1() {
    console.log("viec1")
}

function viec2() {
    console.log("viec2")
}

btn.addEventListener("click", viec1)
btn.addEventListener("click", viec2)

//setTiemout, setInterval, fetch : đây là những thao tác bất dồng bộ
/*setTimeout(function() {
    btn.removeEventListener("click", viec1)
}, 3000)*/

/*setTimeout(function() {
    console.log(1)
},1000)
setTimeout(function() {
    console.log(5)
}, 1050)

console.log(2)
console.log(3)
console.log(4)*/

//Callback hell
/*setTimeout(function () {
    console.log(1) //viec1
    setTimeout(function () {
        console.log(2) //viec2
        setTimeout(function () {
            console.log(3) //viec3
            setTimeout(function () {
                console.log(4) //viec4
            },1000)
        },1000)
    },1000)
},5000)*/

//chaining
//Event loop
// 1 promise được sẵn sàng, then/catch/finally được đẩy vào queue, chưa thực thi ngay
//Khi Javascript engine hoàn thành code hiện tại (hoàn thành task synchronous),
//nó sẽ lấy task từ queue và thực thi
console.log('start') //sync
// setTimeout(() => {  //async
//     console.log('setTimeout done')
// }, 0)
// const promise1 = Promise.resolve()
/*promise1  //async
    .then(() => {
        console.log('promise then 1 ok')
    })
    .then(() => {
        console.log('promise then 2 ok')
    })*/
/*asyncFunc()
    .then(() => Promise.resolve('successfully'))
    .then(data => {
        console.log(data)
    })*/
/*const p1 = new Promise((resolve, reject) => {
    resolve('success')
})
const p2 = new Promise((resolve, reject) => {
    reject('error')
})*/
/*p1.then(data => {
    console.log(data)
})
p2.catch(error => {
    console.log(error)
})*/
/*
p1
    .then(success => console.log(success))
    .catch(error => console.log(error))
    .finally(() => console.log('finally'))
*/

//Promise all
/*const p1 = Promise.resolve(100)
const p2 = Promise.resolve(true)
const p3 = Promise.reject('error')
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p4")
    }, 4000)
})*/
/*Promise.race([p3, p2, p1,p4])
    .then(data => {
        console.log('p3,p2,p1, p4', data)
    })
    .catch(err => {
        console.log('p1,p2,p3,p4', err)
    })*/

//Catch error và callback error trong then
const resolvePromise = new Promise((resolve, reject) => {
    resolve('OK')
})
const rejectPromise = new Promise((resolve, reject) => {
    resolve('Success')
    reject('Error')
})
/*rejectPromise
    .then(() => {
        throw new Error('Oh no')
    })
    .catch(err => {
        console.log('rejectPromise, Catch lỗi', err)
    })*/

/*rejectPromise
    .then(() => {
            throw new Error('Oh no')
        }, err => {
            console.log('rejectPromise, Callback lỗi', err)
        }
    )*/

//return và không return trong callback của then (khi sử dụng tính chất chaining promise)
const promise = new Promise((resolve, reject) => {
    resolve(100)
})
/*
promise.then(data1 => {
    console.log('ok 1', data1)
    return data1 * 2
})
    .then(data2 => {
        console.log('ok 2', data2)
        return data2 * 5
    })
    .then(data3 => {
        console.log('ok 3', data3)
        return data3 * 3
    })
    .catch(err => {
        console.log('error', err)
    })
    .finally(() => {
        console.log('done')
    })*/
promise.then(data => {
    console.log('ok 1', data)
})
    .then(data => {
        console.log('ok 2', data)
    })
    .then(data3 => {
        console.log('ok 3', data3)
    })
    .catch(err => {
        console.log('error', err)
    })
    .finally(() => {
        console.log('done')
    })