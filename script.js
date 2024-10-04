// html колекція результатів
let methodsRes = document.querySelectorAll(".method-res")

// метод length
let arr = [1,2,3,4,5]
methodsRes[0].textContent = arr.length

// метод push
arr = [1,2,3,4,5]
arr.push(13)
console.log(arr)
methodsRes[1].textContent = arr

// метод map
arr = [1,3,4,5]
arr = arr.map(num => num * num)
console.log(arr)
methodsRes[2].textContent = arr

// метод filter
arr = [1, -10, 100, 3, -1, 0]
arr = arr.filter(function(elem) {
    if (elem >= 0) {
        return true;
    } else {
        return false;
    }
});
console.log(arr)
methodsRes[3].textContent = arr

// метод forEach
arr = [1, -10, 100, 3, -1, 0]
arr.forEach((item, index, array) => arr[index] += 1)
console.log(arr)
methodsRes[4].textContent = arr

// метод every
arr = [1, -10, 100, 3, -1, 0]
let res = arr.every((item, index, array) => item % 2 == 0)
console.log(res)
methodsRes[5].textContent = res

// метод 